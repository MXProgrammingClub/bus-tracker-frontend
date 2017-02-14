'use strict';

define(['leaflet'], function (L) {
    // Map config
	var config = {
		center: [42.47722, -71.35946],
		zoom: 13,
		zoomControl: false
	};

    return new L.Map('map', config);
});
