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
		if ($('#weilion_loading__audio')) {
			$('#weilion_loading__audio').get(0).pause();
			$('#weilion_loading__audio').get(0).play();
		}
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
				$('#welionToggleMenu').css({
					"width": "0px",
				});
			}
			else {
				$(this).attr('data-click-state', 1);
				$('#welionToggleMenu').css({
					"width": welionMenu+"px",
				});
			}
		});
		setTimeout(() => {
			$('#welionToggleMenu').css({
				"width": "0px",
			});
		}, 500);
	},
	indexText: () => {
		var typed = new Typed('#text-replace', {
			strings: ["<span>First stage – S-IC</span><span>Length 138.0 ft (42.1 m) </span><br><span>Diameter 33.0 ft (10.1 m) </span><br><span>Empty mass 287,000 lb (130,000 kg) </span><br><span>Gross mass 5,040,000 lb (2,290,000 kg) </span><br><span>Engines 5 Rocketdyne F-1 </span><br><span>Thrust 7,891,000 lbf (35,100 kN) sea level </span><br><span>Specific impulse 263 seconds (2.58 km/s) sea level</span>"],
			typeSpeed: 20,
			startDelay: 1000,
			backDelay: 10000,
			loop: true,
			contentType: 'html',
			fadeOut: true,
			fadeOutClass: 'typed-fade-out',
			fadeOutDelay: 500,
			onTypingResumed: (self) => {
				console.log('last string backspaced!');
			},
		});
	},
	init: () => {
		WEILION_APP.loadingAnimation();
		WEILION_APP.playAudio();
		WEILION_APP.fixedHeader();
		WEILION_APP.toggleMenu();
		WEILION_APP.indexText();
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
	// WEILION_APP.toggleMenu();
});
