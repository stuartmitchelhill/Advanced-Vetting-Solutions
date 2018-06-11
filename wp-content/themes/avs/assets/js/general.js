$(function () {
    // Vars //
    var $body = $('body');
    var $header = $('header');

    // Functions //
    sliderSetup();
    setSticky();
    stickyScroll();

    $(document).scroll(function() {
        stickyScroll();
    });

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

    var resizeThreshold;
    $(window).on('resize', function(){
        if (resizeThreshold) {
           clearTimeout(resizeThreshold);
       }

       resizeThreshold = setTimeout(function () {
           setSticky();
           stickyScroll();
       }, 200);
    });
});
