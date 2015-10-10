// jshint unused: false
"use strict";

define(['jquery'], function ($) {
	// Coordinates of the school
	var MX = [42.5006, -71.3694];
	
	// Coordinates of Dunkin' Donuts
	var DD = [42.456378, -71.356217];
	
	/*function updateCoords() {
		$.get('http://127.0.0.1:8789', function (data) {
			coords = MX_COORDS;
		}).fail(function () {
			throw new Error();
		});
	}*/
	
	/**
	 * Updates the bus coordinates
	 * TODO reimplement as the GPS begins to work
	 *
	 * @returns {Array} The bus coordinates
	 */
	function updateCoords () {
		// Fun stuff. The bus will appear in a different latitude every 5 seconds
		// Intended to test future functionalities
		var lat = (Math.random() * (42500 - 42455) + 42455) / 1000;
		return [lat, MX[1]];
	}
	
	return {
		MX: MX,
		DD: DD,
		updateBus: updateCoords
	};
});
