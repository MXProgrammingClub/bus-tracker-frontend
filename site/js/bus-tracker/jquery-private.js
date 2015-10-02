"use strict";

require.config({ 
	paths: { 
	  jquery: '../bower_components/jquery/dist/jquery.min'
	}
});

define(['jquery'], function ($) {
	return $.noConflict(true);
});