"use strict";

define(['jquery', 'url'], function ($, url) {
	// Coordinates of the school
	var MX = [42.5006, -71.3694];
	
	// Coordinates of Dunkin' Donuts
	var DD = [42.456378, -71.356217];
	
	function updateCoords() {
		$('<script type="text/javascript" jsonp="true" src=' + url.server + '></script>').appendTo('body');
		$('script[jsonp=true]').remove(); // Prevents script memory overload.
	}
	
	return {
		MX: MX,
		DD: DD,
		bus: updateCoords
	};
});
