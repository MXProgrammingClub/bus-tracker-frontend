"use strict";

define(["jquery", "minify!tab-contents/scheduleTimes.html"], function($, scheduleTimes) {
	$(document).ready(function() {
		var date = new Date();
		var dayOfTheWeek = date.getDay();
		if(dayOfTheWeek === 0) {
    		$("#schedule-box").html($(scheduleTimes).filter("#sundaySchedule"));
		}
		else if(dayOfTheWeek >= 1 && dayOfTheWeek <= 5) {
    		$("#schedule-box").html($(scheduleTimes).filter("#weekdaySchedule"));
		}
		else if(dayOfTheWeek === 6) {
    		$("#schedule-box").html($(scheduleTimes).filter("#saturdaySchedule"));
		}
	});
});
