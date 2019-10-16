// *********************************************************** YOUTUBE API
// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#main-video)
  player = new YT.Player('main-video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// ********** END YOUTUBE API ************************************************





// START DOCUMENT LOAD
(function ($) {
  $(document).ready(function(){
  
	// change load icon
	$('.load-icon').css({ 'background-image':'url("library/images/loading-circle.gif?t=' + (new Date().getTime()) + '")' }); 

	// check IE
	function GetIEVersion() {
	  var sAgent = window.navigator.userAgent;
	  var Idx = sAgent.indexOf("MSIE");

	  // If IE, return version number.
	  if (Idx > 0) 
		return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

	  // If IE 11 then look for Updated user agent string.
	  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
		return 11;

	  else
		return 0; //It is not IE
	}

	if (GetIEVersion() == 11) { // IF IE11
	
		// change industries flip card to modal
		$('.industries-row-xl').addClass('d-none');
		$('.industries-row-m').addClass('d-block');
		$('body').addClass('ie-11');
	   
	   
	} else { // not IE 11
	
		// Animations non-mobile
		if ($(window).width() > 767) {
			// Welcome animation
			$('.welcome-text-container').animate({
				marginTop: "0",
				opacity: 	1
			}, 1200 );
		}
		
		if ($(window).width() > 1240) {
			// Flip Cards
			document.querySelector(".card-flip").classList.toggle("flip");
		}
		
		
	} // end not IE 11
  
	// ANIMATE PAGE
	setTimeout(function(){
		$('.load-icon').fadeOut(500);
	}, 3000);		
	
	
	// NEWS slider
	$('.center').slick({
        infinite: true,
        centerMode: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			centerMode: true,
			slidesToShow: 1,
			infinite: false
		  }
		}
	  ]
	});
	
	
	
	// ****************************************** VIDEO EMBED POPUP *****************************/
	$('#video-btn').on('hidden.bs.modal', function(e) {
		$('#welcome .vimeo-wrapper').fadeIn();
		player.pauseVideo();
	})
	
	$('.video-btn').on('click',function() {
		$('#welcome .vimeo-wrapper').fadeOut();
		player.playVideo();
	});	
	
	
	// ****************************************** SCROLL FUNCTIONS *****************************/
	$('.scroll').on('click',function(e) {
		// remove hash // e.preventDefault();
		var offset = 0;
		var target = this.hash;
		if ($(this).data('offset') != undefined) offset = $(this).data('offset');
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top - offset
		}, 1000, 'swing', function() {
			// window.location.hash = target;
		});
	});

	
	

	
	
	// ****************************************** TOGGLE FUNCTIONS *****************************/
	// top nav (mobile)
	$('.hamburger').click(function() {
		if ( $(this).hasClass( "is-active" ) ) {
 
			$('#main-nav').animate({opacity:0},100);
				setTimeout(function () {
					$('#main-nav').addClass('h-mobile-nav');
					$('.hamburger').removeClass('is-active');
					$('#top').removeClass('menu-open');
				}, 500);
			
			
		} else {
		
			$(this).addClass('is-active');
			$('#top').addClass('menu-open');
			$('#main-nav').fadeIn(500); 
			$('#main-nav').removeClass('h-mobile-nav');
			$('#main-nav').animate({opacity:1},300)
		
		}
	});
	
	// hamburger click menu link on mobile
	$('.nav-link').click(function() {
		if ($(window).width() < 768) {
			$('#main-nav').animate({opacity:0},100);
				setTimeout(function () {
					$('#main-nav').addClass('h-mobile-nav');
					$('.hamburger').removeClass('is-active');
					$('#top').removeClass('menu-open');
				}, 300);
		};
	});
	
	
	
	
	
	
	// ***********************************************************************/
	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#top').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			$('#top').removeClass('nav-down').addClass('nav-up');
		} else {
			// Scroll Up
			if (st < lastScrollTop && st > 70){
				$('#top').removeClass('nav-up').addClass('nav-down');
			}
		}
		if (st == 0){ // if back to top
			$('#top').removeClass('nav-down');
		}
		
		lastScrollTop = st;
	}
	
	
	
	
	

});
  }(jQuery));



