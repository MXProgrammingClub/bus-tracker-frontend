"use strict";

(function () {
	requirejs.config({
		// defines paths for bower dependencies
		paths: {
			buffer: '../bower_components/buffer/buffer.min',
			leaflet: '../bower_components/leaflet/dist/leaflet',
			jquery: '../bower_components/jquery/dist/jquery.min',
			materialize: '../node_modules/materialize-css/dist/js/materialize.min',
			hammerjs: '../node_modules/materialize-css/node_modules/hammerjs/hammer.min',
			text: '../node_modules/text/text'
		},
		shim: {
			materialize: {
				deps: ['jquery', 'hammerjs']
			}
		}
	});
})();

define(['coordinates', 'display', 'materialize', 'ui', 'update', 'schedule'], function (coordinates, display) {
	// FIXME materialize.js is not compatible with amd
	/* global L */

	// initializes map display
	display.init();

	// updates the bus location for every 1 second
	setInterval(coordinates.bus, 1000);

	// preserves Leaflet module's scope
	if (L) L.noConflict();

	// preserves jQuery module's scope
	if ($) $.noConflict(true);
});
