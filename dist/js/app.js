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
} // function debounce(func, wait, immediate) {
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
          playerControls = ".player-controls";
      setTimeout(function () {
        $('#weilion_space__audio').get(0).load();
        $('#weilion_space__audio').get(0).play();
        $('.player-controls').addClass('playing');
      }, 2000);
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

    $('.weilion-home-btn').on('mouseenter mouseleave', function () {
      $('#weilion_intro__audio').get(0).load();
      $('#weilion_intro__audio').get(0).play();
    });
    $('.weilion-home-btn').on('click', function () {
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
    var odometer_1 = new Odometer({
      el: $('#odometer-1')[0],
      duration: 4000
    }); // odometer_1.update(0);
    // odometer_1.render();
    // var odometer_2 = new Odometer({
    // 	el: $('#odometer-2')[0],
    // 	duration: 7000
    // });
    // odometer_2.update(0);
    // odometer_2.render();
    // var odometer_3 = new Odometer({
    // 	el: $('#odometer-3')[0],
    // 	duration: 5500
    // });
    // odometer_3.update(0);
    // odometer_3.render();
    // var odometer_4 = new Odometer({
    // 	el: $('#odometer-4')[0],
    // 	duration: 10000
    // });
    // odometer_4.update(0);
    // odometer_4.render();

    $('#odometer-1').text(2500000); // $('#odometer-2').text(1000310427);
    // $('#odometer-3').text(10000000);
    // $('#odometer-4').text(730244000014);
  },
  slotMachine: function slotMachine() {
    setTimeout(function () {
      WEILION_APP.runNumber();
    }, 3000);
    setInterval(function () {// WEILION_APP.runNumber();
    }, 50000);
  },
  weilion: function weilion() {
    console.log('%cWEILION', 'font-size:100px;color:#04b8ff;text-shadow:0 1px 0 #1968b3,0 2px 0 #1968b3 ,0 3px 0 #1968b3 ,0 4px 0 #1968b3 ,0 5px 0 #1968b3 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c WEILION ' + '%c - Weimong to the moon', 'border-radius: 2px; padding: 3px; background: #04b8ff; color: #000', 'color: #04b8ff');
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
  init: function init() {
    WEILION_APP.loadingAnimation();
    WEILION_APP.playAudio();
    WEILION_APP.fixedHeader();
    WEILION_APP.toggleMenu();
    WEILION_APP.indexText();
    WEILION_APP.slotMachine();
    WEILION_APP.marquee();
    WEILION_APP.weilion();
  }
};
jQuery(function () {
  WEILION_APP.init();
});
jQuery(window).on('scroll', function () {
  WEILION_APP.fixedHeader();
});
jQuery(window).on('resize', function () {
  WEILION_APP.fixedHeader();
});
//# sourceMappingURL=app.js.map
