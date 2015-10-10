"use strict";

define(function() {
	
	// Average earth radius at 45 degrees lat.
	var earthRadiusMI = 3959;
	
	/**
	 * Turns degrees to radians
	 * 
	 * @param {Number} degrees The degree to be converted
	 * @returns {Number} Radians of the degree
	 */
	function toRadians (degrees) {
		return degrees * Math.PI / 180;
	}
	
	/**
	 * Computes the distance between two sets of coordinates using Haversine's formula
	 * 
	 * @param {Number} lat1 Latitude of first coordinate
	 * @param {Number} lon1 Longetude of first coordinate
	 * @param {Number} lat2 Latitude of second coordinate
	 * @param {Number} lon2 Longetude of second coordinate
	 * @returns {Number} The distance computed, in miles
	 */
	function getDistance (lat1, lon1, lat2, lon2) {
		var dlat = toRadians(lat2 - lat1);
		var dlon = toRadians(lon2 - lon1);
		var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		
		return earthRadiusMI * c;
	}
	
	return getDistance;
});
