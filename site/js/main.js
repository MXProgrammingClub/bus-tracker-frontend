"use strict";

(function () {
	requirejs.config({
		// defines paths for bower dependencies
		paths: {
			buffer: '../bower_components/buffer/buffer.min',
			leaflet: '../bower_components/leaflet/dist/leaflet',
			jquery: '../bower_components/jquery/dist/jquery.min',
			materialize: '../node_modules/materialize-css/dist/js/materialize.min',
			text: '../node_modules/text/text'
		},
		// requires `define` call
		enforceDefine: true
	});
})();

define(['coordinates', 'display', 'ui', 'update', 'schedule'], function (coordinates, display) {
	/* global L */

	// initializes map display
	display.init();
	require(['map']);

	// updates the bus location for every 1 second
	setInterval(coordinates.bus, 1000);

	// preserves Leaflet module's scope
	if (L) L.noConflict();

	// preserves jQuery module's scope
	if ($) $.noConflict(true);
});
