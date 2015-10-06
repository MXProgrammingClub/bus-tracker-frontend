"use strict";

(function () {
	require.config({
		// defines paths for bower dependencies
		paths: {
			leaflet: "../bower_components/leaflet/dist/leaflet", 
			jquery: "../bower_components/jquery/dist/jquery.min"
		},
		// requires `define` call in main
		enforceDefine: true
	});
})();

define(function (require) {
	// makes sure jQuery loads
	require('jquery');
	
	// inits map and icons
	require('display'); 
	
	// updates the bus location for every 5 seconds
	setInterval(require('update'), 5000); 
});

