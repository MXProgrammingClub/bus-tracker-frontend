'use strict';

define(['jquery', 'tab-contents/main', "materialize"], function ($, tabHTML) {
    // initializes the side nav
    $(".button-collapse").sideNav();

    var $container = $('div.tab-contents');
    $(tabHTML).appendTo($container);

    // Toggle actions
    $('.toggle').on('click', function (event) {
        event.preventDefault();

		var c = 'active';

        // The tab that is currently active
        var $this = $('.tab-contents-toggle').find('.' + c).children();

        // The tab that the user clicks on
        var $that = $('.tab-contents-toggle').find(`.toggle[toggle="${$(this).attr('toggle')}"]`);

        // Current active content
        var $current = $container.find($this.attr('toggle'));

        // Target active content
        var $target = $container.find($that.attr('toggle'));

        // Activates proper tabs
		$current.removeClass(c);
		$target.addClass(c);
		$this.parent().removeClass(c);
		$that.parent().addClass(c);
    });
});
