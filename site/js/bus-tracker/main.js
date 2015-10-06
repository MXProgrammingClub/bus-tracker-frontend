"use strict";

(function () {
	require.config({
		paths: {
			leaflet: "../bower_components/leaflet/dist/leaflet", 
			jquery: "../bower_components/jquery/dist/jquery.min"
		},
		enforceDefine: true
	});
})();

define(function (require) {
	require('jquery'); // makes sure jQuery loads
	require('display'); // inits map and icons
	
	$(function () {
		var timer = setInterval(function () {
			require('update');
			console.log('Updated');
		}, 5000);
	});
});

