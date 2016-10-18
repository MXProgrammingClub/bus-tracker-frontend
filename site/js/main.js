"use strict";

(function () {
	require.config({
		// defines paths for bower dependencies
		paths: {
			buffer: '../bower_components/buffer/buffer.min',
			leaflet: '../bower_components/leaflet/dist/leaflet',
			jquery: '../bower_components/jquery/dist/jquery.min',
			materialize: '../node_modules/materialize-css/dist/js/materialize.min'
		},
		// requires `define` call
		enforceDefine: true
	});
})();

define(['coordinates', 'display', 'update', 'actions', 'schedule'], function (coordinates) {
	/* global L */

	// updates the bus location for every 1 second
	setInterval(coordinates.bus, 1000);

	// preserves Leaflet module's scope
	if (L) L.noConflict();

	// preserves jQuery module's scope
	if ($) $.noConflict(true);
});
