// jshint unused: false
"use strict";

define(['jquery'], function ($) {
	// Coordinates of the school
	var MX_COORDS = [42.500253, -71.370928];
	
	// Coordinates of the bus
	var coords = MX_COORDS;
	
	/*function updateCoords() {
		$.get('http://127.0.0.1:8789', function (data) {
			coords = MX_COORDS;
		}).fail(function () {
			coords = MX_COORDS;
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
		coords = [lat, MX_COORDS[1]];
		console.log("Coords updated to: " + coords);
		return coords;
	}
	
	return {
		MX_COORDS: MX_COORDS,
		update: updateCoords
	};
	
});
