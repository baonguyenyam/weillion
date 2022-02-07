"use strict";

function getParameterByName(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return '';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function capitalizeFirstLetter(string) {
  var str = string.charAt(0).toUpperCase() + string.slice(1);
  return str.replace('_', ' ');
}

function jsonLoad(path, success, error) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };

  xhr.open("GET", path, true);
  xhr.send();
}

function createOdometer(config) {
  var instance = new Odometer({
    el: document.querySelector('#odometer-' + config.id),
    duration: config.duration
  });
  setTimeout(function () {
    $('#odometer-' + config.id).text(config.startVal);
  }, config.delay);
}

jQuery(function ($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function doAnimations() {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.weispace-animated'); // Unbind scroll handler if we have no animatables

    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    } // Check all animatables and animate them if necessary


    $animatables.each(function (i) {
      var $animatable = $(this);

      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.addClass('weispace-animated-visible');
      } else {
        $animatable.removeClass('weispace-animated-visible');
      }
    });
  }; // Function which adds the 'animated' class to any '.animatable' in view


  var doAnimationsCSS3Animated = function doAnimationsCSS3Animated() {
    // Calc current offset and get all animatables
    var offsetT = $(window).scrollTop() + $(window).height(),
        $animatablesCSS = $('.animatable'); // Unbind scroll handler if we have no animatables

    if ($animatablesCSS.length == 0) {
      $(window).off('scroll', doAnimationsCSS3Animated);
    } // Check all animatables and animate them if necessary


    $animatablesCSS.each(function (i) {
      var $animatablesCSS = $(this);
      var $dataOffset = parseInt($animatablesCSS.attr('data-offset')) ? parseInt($animatablesCSS.attr('data-offset')) : 0; // if ((($animatablesCSS.offset().top + $dataOffset) - 40) < offsetT) {

      if ($animatablesCSS.offset().top + $dataOffset - 40 < offsetT) {
        $animatablesCSS.addClass('animate__animated ' + $animatablesCSS.attr('data-animate'));
      } else {
        $animatablesCSS.removeClass('animate__animated ' + $animatablesCSS.attr('data-animate'));
      }
    });
  }; // Hook doAnimations on scroll, and trigger a scroll


  $(window).on('scroll', doAnimations);
  $(window).on('scroll', doAnimationsCSS3Animated);
  $(window).trigger('scroll');
}); ///////////////////////////////////
// SMOOTHLY SCROLL
///////////////////////////////////

if ($(window).width() < 768) {
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 110
  });
} else {
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 0
  });
} // Mouse Animation
// $('#weilion-home').on('mousemove', animateCircles);
// // document.onmousemove = animateCircles; // circle follow mouse
// var colors = ['#f9f9f9', '#04b8ff', , '#000', '#f26528']
// function animateCircles(event) {
//     var circle = document.createElement("div");
//     circle.setAttribute("class", "weilion-mouse-circle");
//     document.body.appendChild(circle); // adds function to body
//     // adds motion
//     circle.style.left = event.clientX + 'px';
//     circle.style.top = event.clientY + 'px';
//     // randomize color
//     var color = colors[Math.floor(Math.random() * colors.length)];
//     circle.style.borderColor = color;
//     // adds animation
//     circle.style.transition = "all 0.5s linear 0s";
//     circle.style.left = circle.offsetLeft - 20 + 'px';
//     circle.style.top = circle.offsetTop - 20 + 'px';
//     circle.style.width = "50px";
//     circle.style.height = "50px";
//     circle.style.borderWidth = "5px";
//     circle.style.opacity = 0;
//     setTimeout(() => {
//         circle.remove()
//     }, 500);
// }
// fixed background size cover iphone 
// function debounce(func, wait, immediate) {
//     var timeout;
//     return function () {
//         var context = this,
//             args = arguments;
//         var later = function () {
//             timeout = null;
//             if (!immediate) {
//                 func.apply(context, args);
//             }
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) {
//             func.apply(context, args);
//         }
//     };
// }
// var htmlTag = document.getElementsByTagName('html')[0];
// var videoContainer = document.querySelector('#video-container');
// var videoElem = document.querySelector('#video-container video');
// var minW = 320; // Minimum video width allowed
// var vidWOrig; // Original video dimensions
// var vidHOrig;
// vidWOrig = videoElem.getAttribute('width');
// vidHOrig = videoElem.getAttribute('height');
// var videoCover = function () {
//     var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//     // Set the video viewport to the window size
//     videoContainer.style.width = winWidth + 'px';
//     videoContainer.style.height = winHeight + 'px';
//     // Use largest scale factor of horizontal/vertical
//     var scaleH = winWidth / vidWOrig;
//     var scaleV = winHeight / vidHOrig;
//     var scale = scaleH > scaleV ? scaleH : scaleV;
//     // Don't allow scaled width < minimum video width
//     if (scale * vidWOrig < minW) {
//         scale = minW / vidWOrig;
//     }
//     // Scale the video
//     var videoNewWidth = scale * vidWOrig;
//     var videoNewHeight = scale * vidHOrig;
//     videoElem.style.width = videoNewWidth + 'px';
//     videoElem.style.height = videoNewHeight + 'px';
//     // Center it by scrolling the video viewport
//     videoContainer.scrollLeft = (videoNewWidth - winWidth) / 2;
//     videoContainer.scrollTop = (videoNewHeight - winHeight) / 2;
// };
// if (htmlTag.classList.contains('no-touch')) {
//     videoCover();
//     // Adjust on resize
//     var updateVideo = debounce(function () {
//         videoCover();
//     }, 100);
//     window.addEventListener('resize', updateVideo);
// }
// APP


var WEILION_APP = {
  // Init App
  loadingAnimation: function loadingAnimation() {
    $('#weilion_loading').addClass('loading');
    setTimeout(function () {
      $('body').addClass('loaded');
      $('#weilion_loading').removeClass('loading').addClass('loaded');
      $('#weilion_loading').fadeOut(500);
    }, 2000);
  },
  playAudio: function playAudio() {
    if ($(window).width() > 991) {
      var getaudio = $('#weilion_space__audio')[0],
          mouseovertimer,
          audiostatus = 'off',
          playerControls = ".player-controls"; // setTimeout(() => {
      // 	$('#weilion_space__audio').get(0).load();
      // 	$('#weilion_space__audio').get(0).play();
      // 	$('.player-controls').addClass('playing');
      // }, 2000);

      $(document).on('mouseenter', playerControls, function () {
        if (!mouseovertimer) {
          mouseovertimer = window.setTimeout(function () {
            mouseovertimer = null;

            if (!$(playerControls).hasClass("playing")) {
              getaudio.load();
              getaudio.play();
              $(playerControls).addClass('playing');
              return false;
            }
          }, 2500);
        }
      });
      $(document).on('click touch', playerControls, function (e) {
        e.preventDefault();

        if (!$(playerControls).hasClass("playing")) {
          if (audiostatus == 'off') {
            $(playerControls).addClass('playing');
            getaudio.load();
            getaudio.play();
            window.clearTimeout(mouseovertimer);
            audiostatus = 'on';
            return false;
          } else if (audiostatus == 'on') {
            $(playerControls).addClass('playing');
            getaudio.play();
          }
        } else if ($(playerControls).hasClass("playing")) {
          getaudio.pause();
          $(playerControls).removeClass('playing');
          window.clearTimeout(mouseovertimer);
          audiostatus = 'on';
        }

        return false;
      });
    }

    $('#weilion_space__audio').on('ended', function () {
      $(playerControls).removeClass('playing');
      audiostatus = 'off';
    });

    if ($('#weilion_loading__audio')) {
      $('#weilion_loading__audio').get(0).load();
      $('#weilion_loading__audio').get(0).play();
    }

    $('.weilion-home-btn, .weilion-mong-btn').on('mouseenter mouseleave', function () {
      $('#weilion_intro__audio').get(0).load();
      $('#weilion_intro__audio').get(0).play();
    });
    $('.weilion-home-btn, .weilion-mong-btn').on('click', function () {
      $('#weilion_intro_click__audio').get(0).load();
      $('#weilion_intro_click__audio').get(0).play();
    });
    $('#welionMenu').on('click', function () {
      $('#weilion_laser__audio').get(0).load();
      $('#weilion_laser__audio').get(0).play();
    });
    $('#welionToggleMenu .nav-item').each(function () {
      $(this).on('mouseenter', function () {
        $('#weilion_background__audio').get(0).play();
      });
      $(this).on('mouseleave', function () {
        $('#weilion_background__audio').get(0).load();
      });
    });
  },
  itemHover: function itemHover() {
    $('.group-team .item, #weilion-copyright a').each(function () {
      $(this).on('mouseenter', function () {
        $('#weilion_background__audio').get(0).play();
      });
      $(this).on('mouseleave', function () {
        $('#weilion_background__audio').get(0).load();
      });
    });
  },
  fixedHeader: function fixedHeader() {
    var header = $('#weilion-header');
    var headerHeight = header.outerHeight();
    var scrollTop = $(window).scrollTop();

    if (scrollTop > headerHeight) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  },
  toggleMenu: function toggleMenu() {
    var welionMenu = $('#welionToggleMenu').width();
    $('#welionMenu').on('click', function () {
      $('#welionMenu, #welionToggleMenu').toggleClass('open');

      if ($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);

        if ($(window).width() > 991) {
          $('#welionToggleMenu').css({
            "width": "0px"
          });
        }
      } else {
        $(this).attr('data-click-state', 1);

        if ($(window).width() > 991) {
          $('#welionToggleMenu').css({
            "width": welionMenu + "px"
          });
        }
      }
    });
    setTimeout(function () {
      if ($(window).width() > 991) {
        $('#welionToggleMenu').css({
          "width": "0px"
        });
      }
    }, 500);
  },
  indexText: function indexText() {
    var typed = new Typed('#text-replace', {
      strings: ["<span>First stage – S-IC</span><br><span>Length 138.0 ft (42.1 m) </span><br><span>Diameter 33.0 ft (10.1 m) </span><br><span>Empty mass 287,000 lb (130,000 kg) </span><br><span>Gross mass 5,040,000 lb (2,290,000 kg) </span><br><span>Engines 5 Rocketdyne F-1 </span><br><span>Thrust 7,891,000 lbf (35,100 kN) sea level </span><br><span>Specific impulse 263 seconds (2.58 km/s) sea level</span>"],
      typeSpeed: 20,
      startDelay: 4000,
      backDelay: 10000,
      loop: true,
      contentType: 'html',
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500
    });
  },
  runNumber: function runNumber() {
    var odometerParams = [{
      id: 1,
      startVal: 11,
      duration: 4000,
      delay: 3000
    }, {
      id: 2,
      startVal: 90000000,
      duration: 7000,
      delay: 4000
    }, {
      id: 3,
      startVal: 15000000,
      duration: 5500,
      delay: 5000
    }, {
      id: 4,
      startVal: 75000000,
      duration: 10000,
      delay: 6000
    }];

    for (var i = 0; odometerParams.length > i; i++) {
      createOdometer(odometerParams[i]);
    }
  },
  slotMachine: function slotMachine() {
    WEILION_APP.runNumber();
  },
  weilion: function weilion() {
    console.log('%cWEILION', 'font-size:100px;color:#04b8ff;text-shadow:0 1px 0 #1968b3,0 2px 0 #1968b3 ,0 3px 0 #1968b3 ,0 4px 0 #1968b3 ,0 5px 0 #1968b3 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c WEILION ' + '%c - Weimong to the moon', 'border-radius: 2px; padding: 3px; background: #04b8ff; color: #000', 'color: #04b8ff');
  },
  timeLine: function timeLine() {
    $("#roadmap").owlCarousel({
      items: 1,
      autoHeight: true,
      margin: 30,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          dots: false,
          nav: true
        },
        992: {
          dots: true,
          nav: false
        }
      }
    }).find('.owl-item').each(function (i) {
      var attr = $(this).children().attr('data-year');
      var element = $('<span>' + attr + '</span>');
      $('#roadmap .owl-dot').eq(i).append(element);
    });
  },
  techCarousel: function techCarousel() {
    $("#tech-01").owlCarousel({
      items: 1,
      autoHeight: true,
      margin: 30,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      nav: true,
      dots: false
    });
  },
  marquee: function marquee() {
    $('.marquee').marquee({
      direction: 'left',
      duration: 30000,
      // gap: 50,
      pauseOnHover: true,
      // duplicated: true,
      delayBeforeStart: 0
    });
  },
  fixediOS: function fixediOS() {
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/gi)) {
      $('head').append('<style>weilion-weimong#weilion-weimong:after,weilion-contact#weilion-contact:before{background-attachment: scroll !important;}</style>');
    }
  },
  init: function init() {
    WEILION_APP.loadingAnimation();
    WEILION_APP.playAudio();
    WEILION_APP.fixedHeader();
    WEILION_APP.toggleMenu();
    WEILION_APP.indexText();
    WEILION_APP.slotMachine();
    WEILION_APP.itemHover();
    WEILION_APP.marquee();
    WEILION_APP.techCarousel();
    WEILION_APP.timeLine();
    WEILION_APP.weilion();
    WEILION_APP.fixediOS();
  }
};
jQuery(function () {
  WEILION_APP.init();
});
jQuery(window).on('scroll', function () {
  WEILION_APP.fixedHeader();
});
jQuery(window).on('resize', function () {
  WEILION_APP.fixedHeader(); // WEILION_APP.timeLine();
});
//# sourceMappingURL=app.js.map
