// Sticky Footer //
function setFooterPosition() {
  var footerEl = $('#footer');
  var windowHeight = $(window).height();
  var topHeight = $('#top').height();
  var footerHeight = footerEl.outerHeight(true);

  if (topHeight + footerHeight > windowHeight) {
    footerEl.removeClass('bottom');
  } else {
    footerEl.addClass('bottom');
  }
}

// Setup Form Components //
function setupForm(container) {
  if ('undefined' === typeof container || null === container) {
    container = $('body');
  }

  $('.gfield').each(function(){
    if($(this).find('.ginput_container_radio, .ginput_container_checkbox, .ginput_container_select').length !== 0) {
      $(this).removeClass('label-up').addClass('normal-label');
    }
  });

  if (!Modernizr.touchevents) {
    $('.ginput_container_select select:not(.custom-input-set)', container).each(function() {
      $(this)
          .chosen({
            disable_search: true,
            width: '100%'
          })
      ;

      $(this).addClass('custom-input-set');
    });
  }

  $('.ginput_container_checkbox .gfield_checkbox li:not(.custom-input-set)', container).each(function(){
    $(this).addClass('custom-input-set');
    $(this).append("<span></span>");
  });

  $('.ginput_container_radio .gfield_radio li:not(.custom-input-set)', container).each(function(){
    $(this).addClass('custom-input-set');
    $(this).append("<span></span>");
  });

  $('.ginput_container_textarea:not(.custom-input-set)').each(function () {
    var $input = $(this);
    var $container = $input.closest('.gfield');
    $container.addClass('is-textarea');
    $(this).addClass('custom-input-set');
  });

  $('.gform_body .gform_fields .gfield .ginput_container input, .gform_body .gform_fields .gfield .ginput_container textarea', container).each(function () {
    var $input = $(this);
    var $container = $input.closest('.gfield');
    var $val = $input.val();

    if ('' !== $val) {
      $container.addClass("label-up");
    } else if ('password' === $input.attr('type')) {
      setTimeout(function () {
        if ('rgb(255, 255, 255)' !== $input.css('background-color')) {
          $container.addClass("label-up");
        }
      }, 50);
    }
  });
}