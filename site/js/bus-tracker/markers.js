"use strict";

define(['leaflet', 'coordinates'], function (L, coordinates) {
	var mxIcon = L.icon({
		iconUrl: '/images/mx.png',
		iconSize: [36, 36], // size of the icon
		iconAnchor: [18, 18], // point of the icon which will correspond to marker's location
		popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

	var ddIcon = L.icon({
		iconUrl: '/images/dd.png',
		iconSize: [32, 20], // size of the icon
		iconAnchor: [16, 10], // point of the icon which will correspond to marker's location
		popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
	});

	var busIcon = L.icon({
		iconUrl: '/images/bus.png',
		iconSize: [12, 12], // size of the icon
		iconAnchor: [6, 6], // point of the icon which will correspond to marker's location
		popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
	});
	

	var mx = L.marker(coordinates.MX, { icon: mxIcon });

	var dd = L.marker(coordinates.DD, { icon: ddIcon });

	var bus = L.marker(coordinates.updateBus(), { icon: busIcon });
	
	return {
		mx: mx,
		dd: dd, 
		bus: bus
	};
});
