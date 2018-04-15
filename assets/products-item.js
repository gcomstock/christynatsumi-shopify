(function() {
	'use strict';


	function thumbnailClickEvent() {
		var productTn = document.querySelectorAll('.cn-product__tnContainer__tn');

		for (var i = 0; i < productTn.length; i++) {
			productTn[i].addEventListener('click', function(){
				var clicked = this.dataset.index-1;
				var slides = document.querySelectorAll('.cn-product__mask__slide');

				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
				}
				slides[clicked].classList.add('active');
			}, false);
		}
	}


	thumbnailClickEvent();
}());