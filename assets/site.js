var timeouts = [];

(function() {
  'use strict';

  // Stop the script if the user is on an old browser.
  // Browser support: http://caniuse.com/#search=queryselectorall
  if (!document.querySelectorAll) {
    return;
  }


  window.onscroll = function() {
    if (typeof highlightCustomNav !== 'undefined') {
      // highlightCustomNav();
    }
    if (typeof checkProductListImages !== 'undefined') {
      checkProductListImages();
    }
  };


  // mobile navigation
  $('.cnew-header-mobile__navbtn').on('click', function(){
    $('.cnew-header-mobile__navbtn__icon').toggleClass('active');
    $('.cnew-header-mobile-drawer').toggleClass('expanded');
    $('body').toggleClass('mobilenav--expanded');


    setTimeout(function(){
      var $drawer = $('.cnew-header-mobile-drawer');
      if ($drawer.hasClass('expanded')) {
        $drawer.addClass('onscreen');
      } else {
        // drawer fadeout has completed, now we can move it offscreen for old mobile browsers
        $drawer.removeClass('onscreen');
      }
    }, 500);
  });


  // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var isDrawerExpanded = $('.cnew-header-mobile-drawer').hasClass('expanded');

    if (prevScrollpos > currentScrollPos || currentScrollPos < 100 || isDrawerExpanded) {
      $('.cnew-header-mobile').removeClass('tucked');
    } else {
      $('.cnew-header-mobile').addClass('tucked');
    }
    prevScrollpos = currentScrollPos;
  };


  function collapseSubNav() {
    $('.cnew-header__nav__items a, .cnew-header__subnav').removeClass('expanded');

    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }


  // web navigation
  $('.cnew-header__nav__items a').on('mouseenter', function(){
    var subnav = $(this).data('subnav');

    if (!$(this).hasClass('expanded')) {
      collapseSubNav();

      timeouts.push(setTimeout((function() {
        $(this).addClass('expanded');
        $('.cnew-header__subnav--' + subnav).addClass('expanded');
      }.bind(this)), 400));
    }
  });

  $('.cnew-header').on('mouseleave', function(){
    collapseSubNav();
  });

  $('.cnew-header__nav__title').on('mouseenter mouseleave', function(){
    collapseSubNav();
  });

}());
