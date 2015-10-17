"use strict";

define(['jquery', 'markers', 'coordinates', 'distance'], function ($, markers, coordinates, distance) {
	return function (arr) {
		var lat = coordinates.MX[0];
		var lon = coordinates.MX[1];
		var response = false;
		
		if (!arr || JSON.stringify(arr).indexOf('[') !== 0) console.error('Argument must be an array');
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
		markers.bus.setLatLng({
			lat: lat, 
			lng: lon
		});
		
		// @testing
		if (response) {
			// Displays distance info
			var mx = Math.round(distance(lat, lon, coordinates.MX[0], coordinates.MX[1]) * 10) / 10;
			var dd = Math.round(distance(lat, lon, coordinates.DD[0], coordinates.DD[1]) * 10) / 10;
			$('#distanceDisplay p span:eq(0)').text(mx);
			$('#distanceDisplay p span:eq(1)').text(dd);
		} else {
			$('#distanceDisplay p span:eq(0)').text('--');
			$('#distanceDisplay p span:eq(1)').text('--');
		}
	};
});
