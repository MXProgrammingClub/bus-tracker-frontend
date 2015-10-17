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
	// inits map and icons
	require('display');
	
	// makes sure function loads;
	require('update');

	// updates the bus location for every 1 second
	setInterval(require('coordinates').bus, 1000); 
	
	// preserves jQuery module's scope
	if (window.$) window.$.noConflict(true);
	
	// @testing
	// adds element to display distance info
	require('distanceDisplay').insertAfter('#map');
});
