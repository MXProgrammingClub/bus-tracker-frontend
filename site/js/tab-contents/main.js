'use strict';

define(['text!./schedule.html', 'text!./about.html'], function (schedule, about) {
    return [schedule, about].join('');
});
