;(function($){
"use strict";

	var
		$title = null,
		$loading = null;


	function init() {
		$title = $("#aside h2");
		$loading = $("#loading ul");
		loading();

		var winHeight = $(window).height();

		$("#home").css({
			"height": winHeight + "px"
		});

		// $(".items").draggable();

		menuAside();
		smoothScroll()
	}

	function loading() {
		setTimeout(function() {
			$loading.removeClass("hidden");
		}, 500);

		$loading.find("li").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
			$loading.parent().fadeOut(1000);
		});

	}

	function menuAside() {

		$title.on("click", function() {
			var isOpen = $(this).hasClass("open");
			if ( isOpen ) {
				$(this).removeClass("open");
				$(this).next().stop().slideUp();
			} else {
				$(this).addClass("open");
				$(this).next().stop().slideDown();
			}

		});

	}

	function smoothScroll() {
		$(".back_top").on("click", function(event) {
			event.preventDefault();
			$("body, html").animate({
				"scrollTop": 0
			}, 500);
		});
	}

	$(function(){
		init();
	});

})(jQuery);
