import Swiper from "swiper";
var $ = require( "jquery" );

new Swiper('div.home-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.home-slider-wrap .button-next',
      prevEl: '.home-slider-wrap .button-prev',
    }
  }),

  new Swiper('div.home-reviews', {
    loop: true,
    slidesPerView: 3,
  
    // If we need pagination
    pagination: {
      el: '.home-reviews-wrap .swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });




var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true
});
var galleryProduct = new Swiper('.product-gallery', {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})