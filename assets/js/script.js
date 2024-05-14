(function ($) {

    "use strict";

    // Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }
    headerStyle();

    // dropdown menu

    var mobileWidth = 992;
    var navcollapse = $('.navigation li.dropdown');

    navcollapse.hover(function () {
        if ($(window).innerWidth() >= mobileWidth) {
            $(this).children('ul').stop(true, false, true).slideToggle(300);
        }
    });

    //Submenu Dropdown Toggle
    if ($('.main-header .navigation li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        //Dropdown Button
        $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }

    //Submenu Dropdown Toggle
    if ($('.main-header .main-menu').length) {
        $('.main-header .main-menu .navbar-toggle').click(function () {
            $(this).prev().prev().next().next().children('li.dropdown').hide();
        });

    }


    /* Fact Counter + Text Count - Our Success */
    if ($('.success-item').length) {
        $('.success-item').appear(function () {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }


    /* Project Slider */
   if ($('.project-wrap').length) {
       $('.project-wrap').slick({
           infinite: true,
           autoplay: false,
           arrows: true,
           prevArrow: '<button class="partner-prev"><i class="flaticon-left-arrow-1"></i></button>',
           nextArrow: '<button class="partner-next"><i class="flaticon-right-arrow"></i></button>',
           pauseOnHover: false,
           autoplaySpeed: 2000,
           slidesToShow: 4,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 1200,
                   settings: {
                       slidesToShow: 3
                   }
               },
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 2
                   }
               },
               {
                   breakpoint: 500,
                   settings: {
                       slidesToShow: 1
                   }
               }
           ]
       });
   }

    /* team Slider */
   if ($('.team-wrap').length) {
       $('.team-wrap').slick({
           infinite: true,
           autoplay: false,
           arrows: true,
           prevArrow: '<button class="partner-prev"><i class="flaticon-left-arrow-1"></i></button>',
           nextArrow: '<button class="partner-next"><i class="flaticon-right-arrow"></i></button>',
           pauseOnHover: false,
           autoplaySpeed: 2000,
           slidesToShow: 4,
           slidesToScroll: 1,
           responsive: [
               {
                   breakpoint: 1200,
                   settings: {
                       slidesToShow: 3
                   }
               },
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: 2
                   }
               },
               {
                   breakpoint: 500,
                   settings: {
                       slidesToShow: 1
                   }
               }
           ]
       });
   }


    /* Testimonials text */
   if ($('.testimonials').length) {
       $('.testimonials').slick({
           infinite: false,
           autoplay: false,
           arrows: false,
           pauseOnHover: false,
           autoplaySpeed: 2000,
           slidesToShow: 1,
           slidesToScroll: 1,
           fade: true,
           cssEase: 'linear',
           asNavFor: '.testi-authors',
       });
   }
    
    /* testimonial author */
   if ($('.testi-authors').length) {
       $('.testi-authors').slick({
           infinite: false,
           autoplay: false,
           arrows: false,
           pauseOnHover: false,
           autoplaySpeed: 2000,
           slidesToShow: 3,
           slidesToScroll: 1,
           asNavFor: '.testimonials',
           focusOnSelect: true,
       });
   }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 2000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }


    // Footer Map 
    if ($("#map").length !== 0) {
        var map = L.map("map", {
          center: [40.712776, -74.005974],
          zoom: 12,
          zoomControl: false,
          scrollWheelZoom: true
        });

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {}).addTo(map);
    }

    // Contact Map 
    if ($("#banner").length !== 0) {
        var map = L.map("banner", {
          center: [40.712776, -74.005974],
          zoom: 12,
          zoomControl: false,
          scrollWheelZoom: true
        });

        L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {}).addTo(map);
    }

        
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });


})(window.jQuery);
