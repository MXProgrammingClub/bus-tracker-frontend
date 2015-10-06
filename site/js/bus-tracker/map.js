"use strict";

define(['leaflet'], function (L) {
	// Creates new map
	var map = L.map('map').setView([42.47722, -71.35946], 13); // Original position: [42.493760, -71.372565]
	return map;
});