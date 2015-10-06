"use strict";

define(['leaflet', 'map', 'markers'], function (L, map, markers) {
	// Creates a title layer on the map
	var titleLayer = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?' + 
		'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MT' + 
		'cwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ';
	var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>';

	L.tileLayer(titleLayer, {
		maxZoom: 18,
		attribution: attribution,
		id: 'mapbox.streets'
	}).addTo(map);

	// Adds the markers to the maps
	markers.mx.addTo(map);
	markers.dd.addTo(map);
	markers.bus.addTo(map);
});
