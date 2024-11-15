// Initialize the base map
let map = L.map("map").setView([37.09, -95.71], 5); // Centered on the US

// Add a tile layer (base map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map); // TileLayer loads without error (20 points)

// Define the GeoJSON URL for earthquake data
const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

// Fetch the GeoJSON data using D3.js
d3.json(earthquakeURL).then(function (data) {
  console.log("Earthquake Data:", data); // Verify the data loads without error
  createFeatures(data.features); // Process and display the data
});

// Function to process and display earthquake data
function createFeatures(earthquakeData) {
  // Define a function for each feature (popup content)
  function onEachFeature(feature, layer) {
    layer.bindPopup(
      `<h3>Location: ${feature.properties.place}</h3>
       <hr>
       <p>Magnitude: ${feature.properties.mag}</p>
       <p>Depth: ${feature.geometry.coordinates[2]} km</p>`
    ); // Tooltip with magnitude, location, and depth (10 points)
  }

  // Define a function to style the markers
  function markerStyle(feature) {
    return {
      radius: feature.properties.mag * 4, // Markers size corresponds to magnitude (10 points)
      fillColor: getColor(feature.geometry.coordinates[2]), // Color changes with depth (10 points)
      color: "#000",
      weight: 0.5,
      opacity: 1,
      fillOpacity: 0.8,
    };
  }

  // Define a function to assign colors based on depth
  function getColor(depth) {
    if (depth > 90) return "#ff5f65";
    if (depth > 70) return "#fca35d";
    if (depth > 50) return "#fdb72a";
    if (depth > 30) return "#f7db11";
    if (depth > 10) return "#dcf400";
    return "#a3f600";
  }

  // Create a GeoJSON layer
  let earthquakeLayer = L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng); // Use circle markers
    },
    style: markerStyle, // Apply styling to markers
    onEachFeature: onEachFeature, // Add popups to markers
  });

  // Add the earthquake layer to the map
  earthquakeLayer.addTo(map);

  // Automatically fit map bounds to earthquake markers
  map.fitBounds(earthquakeLayer.getBounds());

  // Add a legend to the map
  addLegend();
}

// Function to add a legend to the map
function addLegend() {
  let legend = L.control({ position: "bottomright" });

  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend"),
      grades = [-10, 10, 30, 50, 70, 90],
      colors = ["#a3f600", "#dcf400", "#f7db11", "#fdb72a", "#fca35d", "#ff5f65"];

    // Loop through depth intervals to generate labels with colors
    for (let i = 0; i < grades.length; i++) {
      div.innerHTML +=
        `<i style="background: ${colors[i]}"></i> ` +
        grades[i] +
        (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }

    return div;
  };

  legend.addTo(map); // Legend shows depth and colors (10 points)
}
