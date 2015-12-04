"use strict";

define(['jquery', 'markers', 'coordinates'], function ($, markers, coordinates) {
	var bus = markers.bus;
	var error = markers.error;

	// Converts meters to miles
	var metersToMiles = 1 / 1609.34;

	/**
	 * Updates the markers on the map based on the call by the backend server
	 *
	 * @param {Array} arr The array of coordinates
	 */
	return function (arr) {
		refresh(checkResponse(arr));
	};

	/**
	 * Updates markers and distances based on GPS Server response
	 *
	 * @param {Array} res [Coordinates, GPS Response status]
	 */
	function refresh (res) {	
		bus.setLatLng(res[0]); // Sets bus's location
		bus._bringToFront(); // Makes sure marker is at the top layer

		if (res[1]) {
			setError(true);
			// Displays distance info
			var mx = Math.round(bus._latlng.distanceTo(coordinates.MX) * metersToMiles * 10) / 10;
			var dd = Math.round(bus._latlng.distanceTo(coordinates.DD) * metersToMiles * 10) / 10;
			$('#distanceDisplay p span:eq(0)').text(mx);
			$('#distanceDisplay p span:eq(1)').text(dd);
		} else {
			setError();
			$('#distanceDisplay p span:eq(0)').text('--');
			$('#distanceDisplay p span:eq(1)').text('--');
		}
	}
	
	/**
	 * Checks validity of GPS Response
	 *
	 * @param {Array} arr The array of coordinates
	 * @returns {Array}:[{Array},{Boolean}]
	 *		[GPS Coordinates, GPS response status]
	 */
	function checkResponse (arr) {
		var latlon = coordinates.DEFAULT;
		var response = false;
		
		if (!arr || !Array.isArray(arr)) console.error('Argument must be an array');
		else {
			if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
				console.error('GPS Server not responding');
			} else {
				latlon = [arr[0], arr[1]];
				response = true;
			}
		}
		return [latlon, response];
	}
	
	/**
	 * Sets error icon in the map
	 *
	 * @param {Boolean} response If GPS has responded
	 */
	function setError (response) {
		if (response) error.setLatLng(coordinates.DEFAULT);
		else {
			error.setLatLng(coordinates.ERROR);
			setTimeout(function () {
				error.setLatLng(coordinates.DEFAULT);
			}, 500);
		}
	}
});
