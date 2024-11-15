# leaflet-challenge
Leaflet Challenge: Earthquake Visualization
Overview
This project visualizes significant earthquakes from the past 7 days using Leaflet.js and GeoJSON data provided by the USGS. The map includes interactive markers, depth-based coloring, and a legend for better data interpretation.

Features
Interactive Map:
Displays earthquake locations with circle markers.
Marker size corresponds to earthquake magnitude.
Marker color reflects earthquake depth.
Popups: Show earthquake details (location, magnitude, depth) when clicked.
Legend: Explains the depth-based color scheme.
Data: Fetched dynamically using D3.js.
Files
index.html: Main HTML file for rendering the map.
static/css/style.css: Stylesheet for map layout.
static/js/logic.js: JavaScript logic for fetching and visualizing data.
Data Source
Earthquake data is provided by the USGS GeoJSON Feed:

URL: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson
Setup Instructions
Clone the repository:
bash
Copy code
git clone https://github.com/ysabharw/leaflet-challenge.git
Open index.html in your browser (use a local server if necessary).
External Resources
Leaflet.js Documentation: https://leafletjs.com/
D3.js Documentation: https://d3js.org/
USGS Earthquake GeoJSON Documentation: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
MDN Web Docs (for JavaScript and HTML):
JavaScript Reference
HTML Reference
CSS Styling:
CSS Tricks
Stack Overflow:
Used for debugging JavaScript errors and improving GeoJSON handling.
