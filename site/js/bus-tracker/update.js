"use strict";

define(['jquery', 'markers', 'coordinates', 'distance'], function ($, markers, coordinates, distance) {
	return function () {
		var coords = coordinates.updateBus(); // Fetches new coordinates
		
		// Sets the bus marker's position
		markers.bus.setLatLng({
			lat: coords[0], 
			lng: coords[1]
		});
		
		// @testing
		// Displays distance info
		var mx = Math.round(distance(coords[0], coords[1], coordinates.MX[0], coordinates.MX[1]) * 10) / 10;
		var dd = Math.round(distance(coords[0], coords[1], coordinates.DD[0], coordinates.DD[1]) * 10) / 10;

		$('#distanceDisplay p span:eq(0)').text(mx);
		$('#distanceDisplay p span:eq(1)').text(dd);
	};
});
