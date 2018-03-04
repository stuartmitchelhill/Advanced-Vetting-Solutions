$(function () {
    // Vars //
    var $body = $('body');
    var $header = $('header');

    // Functions //
    sliderSetup();

    // Scroll Magic //
    if($body.hasClass('homepage')) {
        var headerHeight = $header.outerHeight(true) - 24;
        var controller = new ScrollMagic.Controller();

        // Introduction //
        new ScrollMagic.Scene({
            triggerElement: '#white-section-1',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-1').outerHeight(true)
        })
            .setClassToggle('#logo', 'blue')
            // .addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '#white-section-1',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-1').outerHeight(true)
        })
            .setClassToggle('#menu-icon', 'blue')
            // .addIndicators()
            .addTo(controller);

        // Services //
        new ScrollMagic.Scene({
            triggerElement: '#white-section-2',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-2').outerHeight(true)
        })
            .setClassToggle('#logo', 'blue')
            // .addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '#white-section-2',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-2').outerHeight(true)
        })
            .setClassToggle('#menu-icon', 'blue')
            // .addIndicators()
            .addTo(controller);

        // Contact Us //
        new ScrollMagic.Scene({
            triggerElement: '#white-section-3',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-3').outerHeight(true)
        })
            .setClassToggle('#logo', 'blue')
            // .addIndicators()
            .addTo(controller);

        // Get In Touch //
        new ScrollMagic.Scene({
            triggerElement: '#white-section-4',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-4').outerHeight(true)
        })
            .setClassToggle('#logo', 'blue')
            // .addIndicators()
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: '#white-section-4',
            offset: -headerHeight,
            triggerHook: 0,
            duration: $('#white-section-4').outerHeight(true)
        })
            .setClassToggle('#menu-icon', 'blue')
            // .addIndicators()
            .addTo(controller);
    }


    // Trigger Functions //
    $body
        .on('click', '.js-menu-trigger', function () {
            if ($header.hasClass('menu-open')) {
                $header.removeClass('menu-open');
            } else {
                $header.addClass('menu-open');
            }
        })
    ;

    // Accordion //
    $('.accordion-list .accordion-item .accordion-title').click(function () {
        var $title = $(this),
            $item = $title.closest('.accordion-item'),
            $icon = $title.find('.icon'),
            $itemExpand = $item.find('.accordion-hidden');

        $icon.toggleClass('icon-plus icon-minus');
        $itemExpand.slideToggle();
    });
});