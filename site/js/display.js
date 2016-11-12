"use strict";

define(['buffer', 'leaflet', 'markers', 'url'], function (buffer, L, markers, url) {

	// Map config
	var config = {
		center: [42.47722, -71.35946],
		zoom: 13,
		zoomControl: false
	};

	// Decodes url info
	var Buffer = buffer.Buffer;
	var encoding = 'base64';
	var decode = {
		tileLayer: new Buffer(url.layer, encoding).toString() + new Buffer(url.token, encoding).toString(),
		attribution: new Buffer(url.attribution, encoding).toString(),
		id: new Buffer(url.id, encoding).toString()
	};

	// Init function in main.js
	return {
		init: function () {

			var map = new L.Map('map', config);

			// Disable drag and zoom handlers
			map.dragging.disable();
			map.touchZoom.disable();
			map.doubleClickZoom.disable();
			map.scrollWheelZoom.disable();

			// Disable tapping handler, if present
			if (map.tap) map.tap.disable();

			// Creates a title layer on the map
			L.tileLayer(decode.tileLayer, {
				attribution: decode.attribution,
				id: decode.id
			}).addTo(map);

			// Adds the markers to the map
			markers.mx.addTo(map);
			markers.dd.addTo(map);
			markers.bus.addTo(map);
			markers.error.addTo(map);

			define('map', [], function () {
				return map;
			});

		}
	}
});
