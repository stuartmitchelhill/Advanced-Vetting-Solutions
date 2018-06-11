// Sticky Header //
function setSticky(){
    if($(window).width() < 1024) {
        console.log('stickySet');
        var logoLeft = $('.js-logo-fixed').offset().left;
        var menuIconLeft = $('.js-menu-icon-fixed').offset().left;
        $('.js-logo-inverse').each(function(){
            $(this).css('left', logoLeft);
        });

        $('.js-menu-icon-inverse').each(function(){
            $(this).css('left', menuIconLeft);
        });
    }
}
function stickyScroll() {
    if($(window).width() < 1024) {
        console.log('stickyScroll');
        $('.js-logo-inverse').each(function() {
            $(this).css('top',
                $('.js-logo-fixed').offset().top -
                $(this).closest('.block').offset().top
            );
        });

        $('.js-menu-icon-inverse').each(function() {
            $(this).css('top',
                $('.js-menu-icon-fixed').offset().top -
                $(this).closest('.block').offset().top
            );
        });
    }
};

// Generic Slider //
function sliderSetup() {
    var $sliderContainer = $('.slider-container');

    $sliderContainer.each(function () {
        var $container = $(this),
            $slider = $container.find('.slider'),
            $controls = $container.find('.slider-controls');


        // Thumbnail Navigation //
        if ($container.hasClass('thumbnail-navigation')) {
            navFor = '.slider-navigation';

            $('.slider-navigation').not('.slick-initialized').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.slider',
                focusOnSelect: true
            });

            $slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                appendArrows: $controls,
                prevArrow: '<a class="slick-prev"><span class="icon-arrow-left"></span></a>',
                nextArrow: '<a class="slick-next"><span class="icon-arrow-right"></span></a>',
                asNavFor: navFor,
                rows: 0
            })
            ;
        }
    });
}
