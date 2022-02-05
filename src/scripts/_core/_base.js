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


    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});
jQuery(function ($) {

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
            if (($animatablesCSS.offset().top + $animatablesCSS.height() - 20) < offsetT) {
				$animatablesCSS.addClass('animate__animated');
			} else {
                $animatablesCSS.removeClass('animate__animated');
            }
        });

    };


    // Hook doAnimations on scroll, and trigger a scroll
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