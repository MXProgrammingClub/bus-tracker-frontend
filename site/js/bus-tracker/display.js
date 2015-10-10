"use strict";

define(['leaflet', 'map', 'markers'], function (L, map, markers) {
	// Creates a title layer on the map
	var token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ';
	var titleLayer = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + token;
	var attribution = '<a href="https://www.mapbox.com/about/maps/">© Mapbox © OpenStreetMap</a>';

	L.tileLayer(titleLayer, {
		attribution: attribution,
		id: 'mapbox.streets'
	}).addTo(map);

	// Adds the markers to the map
	markers.mx.addTo(map);
	markers.dd.addTo(map);
	markers.bus.addTo(map);
});
