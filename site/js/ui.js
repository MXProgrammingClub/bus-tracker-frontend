'use strict';

define(['jquery', 'minify!../tab-contents/map.html'], function ($, mapHTML) {
    $(mapHTML).appendTo('div.tab-contents');
});
