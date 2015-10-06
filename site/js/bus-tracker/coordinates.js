"use strict";

define(['jquery'], function ($) {
	var MX_COORDS = [42.500253, -71.370928];
	var coords = MX_COORDS;
	
	/*function updateCoords() {
		$.get('http://127.0.0.1:8789', function (data) {
			coords = MX_COORDS;
		}).fail(function () {
			coords = MX_COORDS;
		});
	}*/
		
	function updateCoords () {
		coords = MX_COORDS;
	}
	
	return {
		MX_COORDS: MX_COORDS,
		coords: coords,
		update: updateCoords
	};
	
});
