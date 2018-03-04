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