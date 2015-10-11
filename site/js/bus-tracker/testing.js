"use strict";

define(['jquery'], function ($) {
	return function () {
		$.ajax({
			type: 'GET', 
			url: 'http://127.0.0.1:8789',
			success: function (response) {
				console.log('Data get: ' + response);
			}
		});
	};
});
