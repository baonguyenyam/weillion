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
	init: () => {
		WEILION_APP.loadingAnimation();
		WEILION_APP.playAudio();
		WEILION_APP.fixedHeader();
	},
}

jQuery(() => {
	WEILION_APP.init();
});
jQuery(window).on('scroll', function () {
	WEILION_APP.fixedHeader();
});
