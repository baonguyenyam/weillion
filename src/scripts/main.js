// APP
var WEILION_APP = {
	// Init App
	loadingAnimation: () => {
		$('#weilion_loading').addClass('loading');
		setTimeout(() => {
			$('body').addClass('loaded');
			$('#weilion_loading').removeClass('loading').addClass('loaded');
			$('#weilion_loading').fadeOut(500);
		}, 2000);
	},
	playAudio: () => {
		if ($(window).width() > 991) {
			var getaudio = $('#weilion_space__audio')[0],
				mouseovertimer, audiostatus = 'off',
				playerControls = ".player-controls";
			setTimeout(() => {
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
		$('.weilion-home-btn').on('mouseenter mouseleave', () => {
			$('#weilion_intro__audio').get(0).load();
			$('#weilion_intro__audio').get(0).play();
		});
		$('.weilion-home-btn').on('click', () => {
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
	},
	runNumber: () => {
		var odometer_1 = new Odometer({
			el: $('#odometer-1')[0],
			duration: 4000,
		});
		// odometer_1.update(0);
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
		$('#odometer-1').text(2500000);
		// $('#odometer-2').text(1000310427);
		// $('#odometer-3').text(10000000);
		// $('#odometer-4').text(730244000014);
	},
	slotMachine: () => {
		setTimeout(function () {
			WEILION_APP.runNumber();
		}, 3000);
		setInterval(function () {
			// WEILION_APP.runNumber();
		}, 50000);
	},
	weilion: () => {
		console.log('%cWEILION', 'font-size:100px;color:#04b8ff;text-shadow:0 1px 0 #1968b3,0 2px 0 #1968b3 ,0 3px 0 #1968b3 ,0 4px 0 #1968b3 ,0 5px 0 #1968b3 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')
		console.log('%c WEILION ' + '%c - Weimong to the moon', 'border-radius: 2px; padding: 3px; background: #04b8ff; color: #000', 'color: #04b8ff')
	},
	marquee: () =>{
		$('.marquee').marquee({
			direction: 'left',
			duration: 30000,
			// gap: 50,
			pauseOnHover: true,
			// duplicated: true,
			delayBeforeStart: 0,
		});
	},
	init: () => {
		WEILION_APP.loadingAnimation();
		WEILION_APP.playAudio();
		WEILION_APP.fixedHeader();
		WEILION_APP.toggleMenu();
		WEILION_APP.indexText();
		WEILION_APP.slotMachine();
		WEILION_APP.marquee();
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
});
