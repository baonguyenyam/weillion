function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function capitalizeFirstLetter(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str.replace('_', ' ');
}
function jsonLoad(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.weispace-animated');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.addClass('weispace-animated-visible');
            } else {
                $animatable.removeClass('weispace-animated-visible');
            }
        });

    };

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimationsCSS3Animated = function () {

        // Calc current offset and get all animatables
        var offsetT = $(window).scrollTop() + $(window).height(),
            $animatablesCSS = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatablesCSS.length == 0) {
            $(window).off('scroll', doAnimationsCSS3Animated);
        }

        // Check all animatables and animate them if necessary
        $animatablesCSS.each(function (i) {
            var $animatablesCSS = $(this);
            var $dataOffset = parseInt($animatablesCSS.attr('data-offset')) ? parseInt($animatablesCSS.attr('data-offset')) : 0;
            // if ((($animatablesCSS.offset().top + $dataOffset) - 40) < offsetT) {
            if ((($animatablesCSS.offset().top + $dataOffset) - 40) < offsetT) {
                $animatablesCSS.addClass('animate__animated ' + $animatablesCSS.attr('data-animate'));
            } else {
                $animatablesCSS.removeClass('animate__animated ' + $animatablesCSS.attr('data-animate'));
            }
        });

    };


    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).on('scroll', doAnimationsCSS3Animated);
    $(window).trigger('scroll');


});

///////////////////////////////////
// SMOOTHLY SCROLL
///////////////////////////////////
if ($(window).width() < 768) {
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 110,
    });
} else {
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 0,
    });
}

// Mouse Animation

$('#weilion-home').on('mousemove', animateCircles);

// document.onmousemove = animateCircles; // circle follow mouse
var colors = ['#f9f9f9', '#04b8ff', , '#000', '#f26528']

function animateCircles(event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "weilion-mouse-circle");
    document.body.appendChild(circle); // adds function to body

    // adds motion
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    // randomize color
    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;

    // adds animation
    circle.style.transition = "all 0.5s linear 0s";

    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;
    setTimeout(() => {
        circle.remove()
    }, 500);
}