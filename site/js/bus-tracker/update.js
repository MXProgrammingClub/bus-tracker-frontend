"use strict";

define(['markers', 'coordinates'], function (markers, coordinates) {
	return function () {
		var coords = coordinates.update(); // Fetches new coordinates
		
		// Sets the bus marker's position
		markers.bus.setLatLng({
			lat: coords[0], 
			lng: coords[1]
		});
	};
});