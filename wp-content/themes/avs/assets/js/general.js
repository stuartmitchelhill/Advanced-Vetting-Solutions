$(function () {
  // Vars //
  var $body = $('body');
  var $header = $('header');

  // Functions //
  setFooterPosition();
  setupForm();

  // Headroom //
  $header.headroom({});

  // Trigger Functions //
  $body
      .on('click', '.js-menu-trigger', function () {
        if ($header.hasClass('menu-open')) {
          $header.removeClass('menu-open');
        } else {
          $header.addClass('menu-open');
        }
      })
      .on('focus', '.gform_body .gform_fields .gfield .ginput_container input, .gform_body .gform_fields .gfield .ginput_container textarea', function () {
        var $input = $(this);
        var $container = $input.closest('.gfield');
        $container.addClass("label-up");
      })
      .on('blur', '.gform_body .gform_fields .gfield .ginput_container input, .gform_body .gform_fields .gfield .ginput_container textarea', function () {
        var $input = $(this),
            $container = $input.closest('.gfield');
        var $val = $.trim($input.val());
        if ('' == $val) {
          $container.removeClass("label-up");
        }
      })
      .on('keydown keyup change', '.gform_body .gform_fields .gfield .ginput_container input, .gform_body .gform_fields .gfield .ginput_container textarea', function () {
        var $input = $(this),
            $container = $input.closest('.gfield');

        var $val = $.trim($input.val());

        if ('' !== $val) {
          $container.addClass("label-up");
        }
      })
  ;

  // Smooth Scroll //
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  // Accordion //
  $('.accordion-list .accordion-item .accordion-title').click(function () {
    var $title = $(this),
        $item = $title.closest('.accordion-item'),
        $icon = $title.find('.icon'),
        $itemExpand = $item.find('.accordion-hidden');

    $icon.toggleClass('icon-plus icon-minus');
    $itemExpand.slideToggle();
  });

  // Window Resize Functions //
  var resizeThreshold;
  $(window).on('resize', function () {
    if (resizeThreshold) {
      clearTimeout(resizeThreshold);
    }

    resizeThreshold = setTimeout(function () {
      setFooterPosition();
      if($("div.validation_error").length != 0){
        console.log('submission error');
        setupForm();
      }
    }, 200);
  });

  jQuery(document).bind('gform_post_render', function(){
    setupForm();
  });
});


$(window).on('load', function () {
  setFooterPosition();
});