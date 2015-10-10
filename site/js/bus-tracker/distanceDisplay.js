"use strict";

define(['jquery'], function ($) {
	return $('<div>')
		.attr('id', 'distanceDisplay')
		.append(
			$('<p style="color:white;">Distance to MX: <span></span> mi</p>'),
			$('<p style="color:white;">Distance to DD: <span></span> mi</p>')
		);
});
