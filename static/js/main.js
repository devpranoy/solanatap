(function ($) {
"use strict";

	/*------------- preloader js --------------*/
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();

	// Tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// countdown
	$('[data-countdown]').each(function () {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>minute</span></div><div class="time-count">%S <span>Second</span></div>'));
		});
	});


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

if ($("#firefly").length) {
	$.firefly({
		color: '#000',
		minPixel: 3,
		maxPixel: 5,
		total: 30,
		on: '#firefly'
	});
}

// One Page Nav
// if ($(".header-area").length) {
// 	var top_offset = $('.header-area').height() - 10;
// 	$('.main-menu nav ul').onePageNav({
// 		currentClass: 'active',
// 		scrollOffset: top_offset,
// 	});
// }


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#header-sticky").removeClass("sticky-bar");
	} else {
		$("#header-sticky").addClass("sticky-bar");
	}
});


// mainSlider
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
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
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

// blog - active
$('.postbox__gallery').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// owlCarousel
	$('.testimonial-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})


// owlCarousel
$('.brand-active').owlCarousel({
    loop:true,
	margin:0,
	autoplay:true,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:false,
    responsive:{
        0:{
			items:2,
			nav: false,
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


	$('.brand-active-2').slick({
		dots: false,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	// testimonial-active
	$('.testimonial-text-active').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 700,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay:true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// testimonial-active
	$('.testimonial-slider-active').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// portfolio-slider
	$('.portfolio-slider-active').slick({
		dots: false,
		arrows: true,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// portfolio-slider
	$('.related-product-active').slick({
		dots: false,
		arrows: true,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// product-large-img
	$('.product-large-img').slick({
		dots: false,
		arrows: false,
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-long-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-long-arrow-right"></i></button>',
		speed: 300,
		autoplay:true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});


$('.testimonia-item-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots: true,
		asNavFor: '.testimonial-nav'
});
$('.testimonial-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.testimonia-item-active',
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		centerMode: true,
		focusOnSelect: true,
		centerPadding: 0
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// isotop
$('.blog-masonry').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.blog-masonry').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		}
	});
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
if ($(".wow").length) {
	var wow = new WOW({
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 20,          // distance to the element when triggering the animation (default is 0)
		mobile: true,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
	});
	wow.init();
}


//  AOS Animation
if ($("[data-aos]").length) {
	AOS.init({
		duration: 1000,
		mirror: true
	});
}


	/*-------------------------
		showlogin toggle function
	--------------------------*/
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/*-------------------------
		showcoupon toggle function
	--------------------------*/
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	/*-------------------------
		Create an account toggle function
	--------------------------*/
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	/*-------------------------
		Create an account toggle function
	--------------------------*/
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});


	// map
	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(23.810331, 90.412521), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": "21" }, { "weight": "4.05" }] }]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(23.810331, 90.412521),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}



})(jQuery);