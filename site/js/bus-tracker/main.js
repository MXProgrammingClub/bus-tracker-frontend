"use strict";

(function () {
	require.config({
		// defines paths for bower dependencies
		paths: {
			buffer: "../bower_components/buffer/buffer.min",
			jquery: "../bower_components/jquery/dist/jquery.min",
			leaflet: "../bower_components/leaflet/dist/leaflet"
		},
		// requires `define` call
		enforceDefine: true
	});
})();

define(function (require) {
	/* global L */
	// inits map and icons
	require('display');
	
	// makes sure function loads;
	require('update');

	// updates the bus location for every 1 second
	setInterval(require('coordinates').bus, 1000); 
	
	// preserves Leaflet module's scope
	if (L) L.noConflict();
	
	// preserves jQuery module's scope
	if ($) $.noConflict(true);
	
	// @testing
	// adds element to display distance info
	require('distanceDisplay').insertAfter('#map');
});
