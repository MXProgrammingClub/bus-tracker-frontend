// jshint unused:false
"use strict";

define(['jquery'], function ($) {
	var MX_COORDS = [42.500253, -71.370928];
	var coords = "LAT: 42.378463875 LON: -13.235672839746"; // some function
	
	coords = coords.split(" ");

	return {
		MX_COORDS: MX_COORDS,
		busCoords: [Number(coords[1]), Number(coords[3])]
	};
	
});
