(function($) {

	"use strict";

   var toggleButton = $('.menu-toggle'),
       nav = $('#menu-nav-wrap'),
       siteBody = $('body'),
       mainContents = $('#main-content, header');

	// open-close menu by clicking on the menu icon
	toggleButton.on('click', function(e){

		e.preventDefault();

		toggleButton.toggleClass('is-clicked');
		siteBody.toggleClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			siteBody.toggleClass('overflow-hidden');
		});
			
		if ($('html').hasClass('no-csstransitions')) {
			 siteBody.toggleClass('overflow-hidden');
		}

	});
	mainContents.on('click', function(e){

		if( !$(e.target).is('.menu-toggle, .menu-toggle span') ) {

			toggleButton.removeClass('is-clicked');
			siteBody.removeClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				siteBody.removeClass('overflow-hidden');
			});

			if ($('html').hasClass('no-csstransitions')) {
				 siteBody.removeClass('overflow-hidden');
			}
		}

	});

	$(window).on('load', function() {

		$('#grup-slider').flexslider({
			namespace: "flex-",
			controlsContainer: ".flexslider-controls",
			animation: "fade",
			manualControls: ".flex-control-nav li",	     
			controlNav: true,
			directionNav: false,
			smoothHeight: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			randomize: false,
			touch: true,
			useCSS: false, 
			
		});
 
	});
	
	$(window).on('load', function() {

		$('#gallery-slider').flexslider({
			namespace: "flex-",
			controlsContainer: ".flexslider-controls",	
			manualControls: ".flex-control li",	     
			controlNav: true,
			directionNav: false,
			smoothHeight: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			randomize: false,
			touch: true,
			useCSS: false, 
			
		});
 
	});




})(jQuery);