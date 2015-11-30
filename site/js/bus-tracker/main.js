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

	require('display');
	require('update');
	require('actions');

	// updates the bus location for every 1 second
	setInterval(require('coordinates').bus, 1000); 
	
	// preserves Leaflet module's scope
	if (L) L.noConflict();
	
	// preserves jQuery module's scope
	if ($) $.noConflict(true);
});
