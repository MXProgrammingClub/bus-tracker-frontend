// jshint unused: false
"use strict";

define(['jquery'], function ($) {
	// Coordinates of the school
	var MX = [42.5006, -71.3694];
	
	// Coordinates of Dunkin' Donuts
	var DD = [42.456378, -71.356217];
	
	function updateCoords() {
		$('<script type="text/javascript" jsonp="true" src="http://127.0.0.1:8789"></script>').appendTo('body');
		$('script[jsonp=true]').remove(); // Prevents script memory overload.
	}
	
	return {
		MX: MX,
		DD: DD,
		bus: updateCoords
	};
});
