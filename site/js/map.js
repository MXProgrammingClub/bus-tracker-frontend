"use strict";

define(['leaflet'], function (L) {
	// Creates new map
	var map = new L.Map('map', {
		center: [42.47722, -71.35946],
		zoom: 13,
		zoomControl: false
	});
	
	// Disable drag and zoom handlers
	map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	
	// Disable tapping handler, if present
	if (map.tap) map.tap.disable();
	
	return map;
});
