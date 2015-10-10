"use strict";

(function () {
	require.config({
		// defines paths for bower dependencies
		paths: {
			leaflet: "../bower_components/leaflet/dist/leaflet", 
			jquery: "../bower_components/jquery/dist/jquery.min"
		},
		// requires `define` call
		enforceDefine: true
	});
})();

define(function (require) {
	// makes sure jQuery loads
	require('jquery');
	window.jQuery = undefined;
	
	// inits map and icons
	require('display'); 
	window.L = undefined;
	
	// updates the bus location for every 1 second
	setInterval(require('update'), 1000); 
	
	// @testing
	// Adds element to display distance info
	require('distanceDisplay').insertAfter('#map');
});
