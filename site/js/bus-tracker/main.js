// jshint unused:false

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
	var $ = require('jquery');
	$(function() {
		delete L;
	});
	console.log('Success!');
	
	require(['leaflet', 'map', 'coordinates'], function (L, map, coordinates) {
		"use strict";
		
		var titleLayer = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?' + 
			'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MT' + 
			'cwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ';
		var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>';
				
		var mxIcon = L.icon({
			iconUrl: '/images/mx.jpg',

			iconSize: [38, 38], // size of the icon
			iconAnchor: [19, 19], // point of the icon which will correspond to marker's location
			popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

		var ddIcon = L.icon({
			iconUrl: '/images/dd.png',

			iconSize: [30, 38], // size of the icon
			iconAnchor: [15, 19], // point of the icon which will correspond to marker's location
			popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

		var busIcon = L.icon({
			iconUrl: '/images/bus.png',

			iconSize: [38, 30], // size of the icon
			iconAnchor: [19, 15], // point of the icon which will correspond to marker's location
			popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

		L.tileLayer(titleLayer, {
			maxZoom: 18,
			attribution: attribution,
			id: 'mapbox.streets'
		}).addTo(map);

		L.marker([42.5006, -71.3694], { icon: mxIcon }).addTo(map);

		L.marker([42.456378, -71.356217], { icon: ddIcon }).addTo(map);

		L.marker([42.476378, -71.36], { icon: busIcon }).addTo(map);

		function onMapClick (e) {
			L.popup()
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng)
				.openOn(map);
		}

		map.on('click', onMapClick);
		
	});
});

