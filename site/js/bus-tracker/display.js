"use strict";

define(['leaflet', 'map', 'markers', 'url'], function (L, map, markers, url) {
	// Creates a title layer on the map
	L.tileLayer(url.titleLayer, {
		attribution: url.attribution,
		id: 'mapbox.streets'
	}).addTo(map);

	// Adds the markers to the map
	markers.mx.addTo(map);
	markers.dd.addTo(map);
	markers.bus.addTo(map);
});
