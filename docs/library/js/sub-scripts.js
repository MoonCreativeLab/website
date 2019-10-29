// START DOCUMENT LOAD
(function($) {
  $(document).ready(function() {
    // change load icon
    $(".load-icon").css({
      "background-image":
        'url("library/images/loading-circle.gif?t=' +
        new Date().getTime() +
        '")'
    });

    // check IE
    function GetIEVersion() {
      var sAgent = window.navigator.userAgent;
      var Idx = sAgent.indexOf("MSIE");

      // If IE, return version number.
      if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
      // If IE 11 then look for Updated user agent string.
      else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
      else return 0; //It is not IE
    }

    if (GetIEVersion() == 11) {
      // IF IE11

      // change industries flip card to modal
      $(".industries-row-xl").addClass("d-none");
      $(".industries-row-m").addClass("d-block");
      $("body").addClass("ie-11");
    } else {
      // not IE 11

      // Animations non-mobile
      if ($(window).width() > 767) {
        // Welcome animation
        $(".welcome-text-container").animate(
          {
            marginTop: "0",
            opacity: 1
          },
          1200
        );
      }

      if ($(window).width() > 1240 && document.querySelector(".card-flip")) {
        // Flip Cards
        document.querySelector(".card-flip").classList.toggle("flip");
      }
    } // end not IE 11

    // ANIMATE PAGE
    setTimeout(function() {
      $(".load-icon").fadeOut(500);
    }, 1000);

    // NEWS slider
    $(".center").slick({
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

    // ****************************************** TOGGLE FUNCTIONS *****************************/
    // top nav (mobile)
    $(".hamburger").click(function() {
      if ($(this).hasClass("is-active")) {
        $("#main-nav").animate({ opacity: 0 }, 100);
        setTimeout(function() {
          $("#main-nav").addClass("h-mobile-nav");
          $(".hamburger").removeClass("is-active");
          $("#top").removeClass("menu-open");
        }, 500);
      } else {
        $(this).addClass("is-active");
        $("#top").addClass("menu-open");
        $("#main-nav").fadeIn(500);
        $("#main-nav").removeClass("h-mobile-nav");
        $("#main-nav").animate({ opacity: 1 }, 300);
      }
    });

    // hamburger click menu link on mobile
    $(".nav-link").click(function() {
      if ($(window).width() < 768) {
        $("#main-nav").animate({ opacity: 0 }, 100);
        setTimeout(function() {
          $("#main-nav").addClass("h-mobile-nav");
          $(".hamburger").removeClass("is-active");
          $("#top").removeClass("menu-open");
        }, 300);
      }
    });
  });
})(jQuery);
