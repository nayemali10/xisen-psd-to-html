(function ($) {
	"use strict";

	// Pre Loader Js 
	$(window).on('load', function () {
		$("#loading").fadeOut(500);
	});

	// Side Bar Menu Js
	$("#sidebar-toggle").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn, .body-overlay").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});



	// Slider Active Here 

	function mainSlider() {

		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});

		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 8000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false
				}
			}]
		});
		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();



	// Client Slider Js 
	$('.client__slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 600,
		items: 1,
		nav: false,
		dots: true,
	});

	$('.partner__slider').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 600,
		items: 5,
		nav: false,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: false,
				dots: false,

			},
			575: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1201: {
				items: 4,
			},
			1400: {
				items: 5
			}
		}
	});




	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header__sticky").removeClass("sticky");
			$(".back__top").removeClass('show');
		} else {
			$(".header__sticky").addClass("sticky");
			$(".back__top").addClass('show');
		}
	});

	$(".back__top").on("click", function () {

		$('html').animate({ 'scrollTop': '0px' });
		return false;

	});


	new WOW().init();




})(jQuery);