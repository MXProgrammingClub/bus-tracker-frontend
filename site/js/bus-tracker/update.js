"use strict";

define(['markers', 'coordinates'], function (markers, coordinates) {
	coordinates.update();
	var coords = coordinates.coords;
	
	markers.bus.setLatLng({
		lat: coords[0], 
		lng: coords[1]
	});
});