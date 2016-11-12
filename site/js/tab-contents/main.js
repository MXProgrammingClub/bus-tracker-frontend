'use strict';

define(['minify!./map.html', 'minify!./schedule.html', 'minify!./about.html'], function (map, schedule, about) {
    return [map, schedule, about].join("");
});
