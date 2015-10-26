"use strict";

define(['jquery', 'markers', 'coordinates'], function ($, markers, coordinates) {

	// Converts meters to miles
	var metersToMiles = 1 / 1609.34;
	
	/**
	 * Updates the markers on the map based on the call by the backend server
	 *
	 * @param {Array} arr The array of coordinates
	 */
	return function (arr) {
		var lat = coordinates.MX[0];
		var lon = coordinates.MX[1];
		var bus = markers.bus;
		var response = false;
		
		if (!arr || !Array.isArray(arr)) console.error('Argument must be an array');
		else {
			if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
				console.error('GPS Server not responding');
			} else {
				lat = arr[0];
				lon = arr[1];
				response = true;
			}
		}
	
		// Sets the bus marker's position
		bus.setLatLng({
			lat: lat, 
			lng: lon
		});

		// @testing
		if (response) {
			// Displays distance info
			var mx = Math.round(bus.distanceTo(coordinates.MX) * metersToMiles * 10) / 10;
			var dd = Math.round(bus.distanceTo(coordinates.DD) * metersToMiles * 10) / 10;
			$('#distanceDisplay p span:eq(0)').text(mx);
			$('#distanceDisplay p span:eq(1)').text(dd);
		} else {
			$('#distanceDisplay p span:eq(0)').text('--');
			$('#distanceDisplay p span:eq(1)').text('--');
		}
	};
});
