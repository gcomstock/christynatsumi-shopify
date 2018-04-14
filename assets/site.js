(function() {
  'use strict';

  // Stop the script if the user is on an old browser.
  // Browser support: http://caniuse.com/#search=queryselectorall
  if (!document.querySelectorAll) {
    return;
  }

  //only construct Instafeed on home page, where script has been included
  /*
  if (typeof Instafeed !== 'undefined') {
    var feed = new Instafeed({
      get: 'user',
      limit: 7,
      userId: 178110804,
      clientId: '54db78126f764a879ba681b4a9db8140',
      accessToken: '178110804.54db781.e9695f2f1ddf4ce6b68cf91798e131e9',
      template: '<a class="fx-allFast" href="{{link}}" style="background-image:url({{image}})" target="_blank"></a>',
      resolution: 'low_resolution'
    });
    feed.run();
  }
  */

  /*
    window.addEventListener('resize', loadAllImages);
   */


  window.onscroll = function() {
    if (typeof toggleMiniHeader !== 'undefined') {
      toggleMiniHeader();
    }
    if (typeof highlightCustomNav !== 'undefined') {
      highlightCustomNav();
    }
    if (typeof checkProductListImages !== 'undefined') {
      checkProductListImages();
    }
  };

  document.getElementById('cn-mobileNav__drawerBtn').addEventListener('click', function(){
    document.getElementById('cn-mobileNav').classList.toggle('open');
  });

}());
