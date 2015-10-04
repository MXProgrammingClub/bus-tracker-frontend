// jshint unused:false
"use strict";
(function () {
	require.config({
		paths: {
			leaflet: "../bower_components/leaflet/dist/leaflet", 
			jquery: '../bower_components/jquery/dist/jquery.min'
		},
		enforceDefine: true
	});
})();

define(function (require) {
	var $ = require('jquery');
	console.log('Success!');
	
	require(['leaflet', 'map', 'coordinates'], function (L, map, coordinates) {
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?' + 
		'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MT' + 
		'cwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
						'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
						'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(map);
	});
});

