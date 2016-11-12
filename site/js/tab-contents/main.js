'use strict';

define(['text!./map.html', 'text!./schedule.html', 'text!./about.html'], function (map, schedule, about) {
    return [map, schedule, about].join('');
});
