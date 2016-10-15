define(["jquery"], function($) {
	$(document).ready(function() {
		var date = new Date();
		var dayOfTheWeek = date.getDay();
		if(dayOfTheWeek === 0) {
			$.get("scheduleTimes.html", function(data){
    			$("#schedule-box").html($(data).filter("#sundaySchedule"));
			});
		}
		else if(dayOfTheWeek >= 1 && dayOfTheWeek <= 5) {
			$.get("scheduleTimes.html", function(data){
    			$("#schedule-box").html($(data).filter("#weekdaySchedule"));
			});
		}
		else if(dayOfTheWeek === 6) {
			$.get("scheduleTimes.html", function(data){
    			$("#schedule-box").html($(data).filter("#saturdaySchedule"));
			});
		}
	});
});
