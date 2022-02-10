
// APP
var WEILION_APP = {
	// Init App
	loadingAnimation: () => {
		// $('#weilion_loading').addClass('loading');
		// setTimeout(() => {
		// 	$('body').addClass('loaded');
		// 	$('#weilion_loading').removeClass('loading').addClass('loaded');
		// 	$('#weilion_loading').fadeOut(500);
		// }, 2000);
	},
	playAudio: () => {
		if ($(window).width() > 991) {
			var getaudio = $('#weilion_space__audio')[0],
				mouseovertimer, audiostatus = 'off',
				playerControls = ".player-controls";
			// setTimeout(() => {
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
		if ($('#weilion_loading')) {
			$('#weilion_loading__audio').get(0).load();
			$('#weilion_loading__audio').get(0).play();
		}
		$('.weilion-home-btn, .weilion-mong-btn').on('mouseenter mouseleave', () => {
			$('#weilion_intro__audio').get(0).load();
			$('#weilion_intro__audio').get(0).play();
		});
		$('.weilion-home-btn, .weilion-mong-btn').on('click', () => {
			$('#weilion_intro_click__audio').get(0).load();
			$('#weilion_intro_click__audio').get(0).play();
		});
		$('#welionMenu').on('click', () => {
			$('#weilion_laser__audio').get(0).load();
			$('#weilion_laser__audio').get(0).play();
		});
		$('#welionToggleMenu .nav-item').each(function () {
			$(this).on('mouseenter', () => {
				$('#weilion_background__audio').get(0).play();
			});
			$(this).on('mouseleave', () => {
				$('#weilion_background__audio').get(0).load();
			});
		});
		setTimeout(() => {
			$('.owl-carousel button, #weilionTab a, #weilionTechTab a').each(function () {
				$(this).on('mouseenter', () => {
					$('#weilion_background__audio').get(0).play();
				});
				$(this).on('mouseleave', () => {
					$('#weilion_background__audio').get(0).load();
				});
				$(this).on('click', () => {
					$('#weilion_intro__audio').get(0).load();
					$('#weilion_intro__audio').get(0).play();
				});
			});
		}, 3000);
	},
	itemHover: () => {
		$('.group-team .item, #weilion-copyright a, #weilion-resources a').each(function () {
			$(this).on('mouseenter', () => {
				$('#weilion_background__audio').get(0).play();
			});
			$(this).on('mouseleave', () => {
				$('#weilion_background__audio').get(0).load();
			});
		});
	},
	fixedHeader: () => {
		var header = $('#weilion-header');
		var headerHeight = header.outerHeight();
		var scrollTop = $(window).scrollTop();
		if (scrollTop > headerHeight) {
			header.addClass('active');
		} else {
			header.removeClass('active');
		}
	},
	toggleMenu: () => {
		let welionMenu = $('#welionToggleMenu').width();
		$('#welionMenu').on('click', function () {
			$('#welionMenu, #welionToggleMenu').toggleClass('open');
			if ($(this).attr('data-click-state') == 1) {
				$(this).attr('data-click-state', 0);
				if ($(window).width() > 991) {
					$('#welionToggleMenu').css({
						"width": "0px",
					});
				}
			}
			else {
				$(this).attr('data-click-state', 1);
				if ($(window).width() > 991) {
					$('#welionToggleMenu').css({
						"width": welionMenu + "px",
					});
				}
			}
		});
		setTimeout(() => {
			if ($(window).width() > 991) {
				$('#welionToggleMenu').css({
					"width": "0px",
				});
			}
		}, 500);
	},
	indexText: () => {
		var typed = new Typed('#text-replace', {
			strings: ["<span>First stage – S-IC</span><br><span>Length 138.0 ft (42.1 m) </span><br><span>Diameter 33.0 ft (10.1 m) </span><br><span>Empty mass 287,000 lb (130,000 kg) </span><br><span>Gross mass 5,040,000 lb (2,290,000 kg) </span><br><span>Engines 5 Rocketdyne F-1 </span><br><span>Thrust 7,891,000 lbf (35,100 kN) sea level </span><br><span>Specific impulse 263 seconds (2.58 km/s) sea level</span>"],
			typeSpeed: 20,
			startDelay: 4000,
			backDelay: 10000,
			loop: true,
			contentType: 'html',
			fadeOut: true,
			fadeOutClass: 'typed-fade-out',
			fadeOutDelay: 500,
		});
		var typedTech = new Typed('#text-weitech', {
			strings: ["wei tech"],
			typeSpeed: 30,
			cursorChar: '_',
			backSpeed: 30,
			backDelay: 5000,
			startDelay: 1000,
			loop: true
		});
		var typedLoading = new Typed('#text-loading', {
			strings: ["<span>Loading... <span class='done'>[DONE]</span></span><br><span>Starting WEILION system... <span class='done'>[DONE]</span></span><br><span>Loading animation... <span class='done'>[DONE]</span></span><br><span>Loading sound... <span class='done'>[DONE]</span></span><br><span>System initializing... <span class='done'>[DONE]</span></span>"],
			typeSpeed: 2,
			contentType: 'html',
			loop: false,
			cursorChar: '_'
		});
	},
	runNumber: () => {

		var odometerParams = [
			{
				id: 1,
				startVal: 11,
				duration: 4000,
				delay: 3000
			},
			{
				id: 2,
				startVal: 90000000,
				duration: 7000,
				delay: 4000
			},
			{
				id: 3,
				startVal: 15000000,
				duration: 5500,
				delay: 5000
			},
			{
				id: 4,
				startVal: 75000000,
				duration: 10000,
				delay: 6000
			}
		]

		for (var i = 0; odometerParams.length > i; i++) {
			createOdometer(odometerParams[i]);
		}

	},
	slotMachine: () => {
		WEILION_APP.runNumber();
	},
	weilion: () => {
		console.log('%cWEILION', 'font-size:100px;color:#04b8ff;text-shadow:0 1px 0 #1968b3,0 2px 0 #1968b3 ,0 3px 0 #1968b3 ,0 4px 0 #1968b3 ,0 5px 0 #1968b3 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
		console.log('%c WEILION ' + '%c - Weimong to the moon', 'border-radius: 2px; padding: 3px; background: #04b8ff; color: #000', 'color: #04b8ff')
	},
	timeLine: () => {
		$("#roadmap").owlCarousel({
			items: 1,
			autoHeight: true,
			margin: 30,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive: {
				0: {
					dots: false,
					nav: true,
				},
				992: {
					dots: true,
					nav: false
				}
			}
		})
			.find('.owl-item')
			.each(function (i) {
				var attr = $(this).children().attr('data-year');
				var element = $('<span>' + attr + '</span>');
				$('#roadmap .owl-dot').eq(i).append(element);
			});
	},
	techCarousel: () => {
		$("#tech-01").owlCarousel({
			items: 1,
			autoHeight: true,
			margin: 30,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			nav: true,
			dots: false
		})
	},
	marquee: () => {
		$('.marquee').marquee({
			direction: 'left',
			duration: 30000,
			// gap: 50,
			pauseOnHover: true,
			// duplicated: true,
			delayBeforeStart: 0,
		});
	},
	fixediOS: () => {
		if (navigator.userAgent.match(/(iPad|iPhone|iPod|webOS)/gi)) {
			$('head').append('<style>weilion-weimong#weilion-weimong:after,weilion-contact#weilion-contact:before,weilion-resources#weilion-resources:after{background-attachment: scroll !important;}</style>');
		}
	},
	keyboardEvent: () => {
		document.onkeyup = function (e) {
			if (e.shiftKey && e.which == 77) {
				$('#welionMenu').trigger('click');
			}
			if (e.shiftKey && e.which == 83) {
				$('.player-controls').trigger('click');
			}
			if (e.shiftKey && e.which == 87) {
				location.href = "#weilion-weispace";
			}
			if (e.shiftKey && e.which == 71) {
				location.href = "#weilion-generation";
			}
			if (e.shiftKey && e.which == 72) {
				location.href = "#weilion-tech";
			}
			if (e.shiftKey && e.which == 73) {
				location.href = "#weilion-weimong";
			}
			if (e.shiftKey && e.which == 84) {
				location.href = "#weilion-team";
			}
			if (e.shiftKey && e.which == 67) {
				location.href = "#weilion-contact";
			}
			if (e.shiftKey && e.which == 82) {
				location.href = "#weilion-roadmap";
			}
			if (e.shiftKey && e.which == 79) {
				location.href = "#weilion-resources";
			}
			if (e.shiftKey && e.which == 80) {
				location.href = "#weilion-home";
			}
			if (e.shiftKey && e.altKey && e.ctrlKey && e.which == 13) {
				$('#weilionCredits').modal('show')
				$('#weilion_space__yahoo').get(0).load();
				$('#weilion_space__yahoo').get(0).play();
			}
			if (e.altKey && e.which == 77) {
				$('#welionToggleMenu .nav-item').toggleClass('showkey');
			}
			// https://codepen.io/canis/pen/noGwPL
		};
		$('#weilionCredits').on('hidden.bs.modal', function (event) {
			$('#weilion_space__yahoo').get(0).load();
		})
	},
	videoJS: () => {
		// videojs('wei-player', {
		// 	controls: false,
		// 	autoplay: true,
		// 	loop: true,
		// 	muted: true,
		// 	height: 161,
		// 	width: 286,
		// 	pictureInPictureToggle: false,
		// 	disablePictureInPicture: true,
		// 	controlBar: {
		// 		pictureInPictureToggle: false,
		// 	},
		// 	preload: 'auto'
		// });
		// var pipButton = document.getElementById('wei-player');
		// pipButton.disablePictureInPicture = true;
	},
	init: () => {
		// WEILION_APP.loadingAnimation();
		WEILION_APP.playAudio();
		WEILION_APP.fixedHeader();
		WEILION_APP.toggleMenu();
		WEILION_APP.indexText();
		WEILION_APP.slotMachine();
		WEILION_APP.itemHover();
		WEILION_APP.marquee();
		WEILION_APP.techCarousel();
		WEILION_APP.timeLine();
		WEILION_APP.videoJS();
		WEILION_APP.keyboardEvent();
		WEILION_APP.fixediOS();
		WEILION_APP.weilion();
	},
}

jQuery(() => {
	WEILION_APP.init();
});
jQuery(window).on('scroll', () => {
	WEILION_APP.fixedHeader();
});
jQuery(window).on('resize', () => {
	WEILION_APP.fixedHeader();
	// WEILION_APP.timeLine();
});

// INIT SYSTEM 
window.paceOptions = {
    ajax: false, // disabled
    document: true, // disabled
    eventLag: false, // disabled
    // elements: {
    //     selectors: ['.weipace-loading']
    // }
};
Pace.on('done',function() {
	document.getElementById('weilion_loading_done').classList.add('done');
	setTimeout(() => {
		document.getElementById('top-page').classList.add('loaded');
	}, 1000);
});
