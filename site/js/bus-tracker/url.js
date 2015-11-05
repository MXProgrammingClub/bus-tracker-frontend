"use strict";

define(function () {
	var server = 'http://10.3.108.10:8789/zUpdate';
	var token = 'pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ';
	var titleLayer = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + token;
	var attribution = '<a href="https://www.mapbox.com/about/maps/">© Mapbox © OpenStreetMap</a>';
	
	return {
		server: server,
		token: token,
		titleLayer: titleLayer,
		attribution: attribution
	};
});
