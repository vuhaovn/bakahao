;(function($){
"use strict";

	var
		$this = null,
		$listWork = null,
		$itemWork = null,
		$btnWork = null,
		$bgHover = null,
		$btnMore = null,
		$btnNav = null,
		$nav = null,
		
		windowPC = 975, // 992 - 17
		winWidth = 0;

	function init(){
		$listWork = $("#work .list_work");
		$btnWork = $("#work .list_button a");
		$bgHover = $("#work .hover");
		$itemWork = $("#work .work_item");
		$btnNav = $(".btn_menu");
		$nav = $("nav");
		$btnMore = $(".show_more a");

		work();
		smooth();
		$(window).on("scroll", nav);

	}

	function nav(){

		var
			workPosition = $("#work").offset().top,
			aboutPosition = $("#about_us").offset().top,
			contactPosition = $("#contact").offset().top,
			scrollPosition = $(window).scrollTop();

		$("nav a").each(function(index) {
			var
				$hrefElement = $( $(this).attr("href") ),
				len = $hrefElement.length;
			if( len ) {
				var position = $hrefElement.position();
				if( position.top <= scrollPosition && position.top + $hrefElement.outerHeight() > scrollPosition ) {
					$("nav ul li a").removeClass("active");
					$(this).addClass("active");
				} else {
					$(this).removeClass("active");
				}
				
			}

		});

		if( scrollPosition >= workPosition && scrollPosition < aboutPosition ) {
			$nav.removeClass("green");
			$nav.addClass("blue");
		} else if( scrollPosition >= aboutPosition && scrollPosition < contactPosition ) {
			$nav.removeClass("blue");
			$nav.addClass("green");
		} else if( scrollPosition >= contactPosition ) {
			$nav.removeClass("blue green");
			$(".social li").addClass("run");
		} else {
			$nav.removeClass("blue green");
			$(".social li").removeClass("run");
		}

	}

	function work(){

		$listWork.isotope({
			itemSelector: ".work_item",
			layoutMode: "fitRows",
			getSortData: {
				all: ".all",
				website: ".website",
				logo: ".logo",
				advertising: ".advertising"
			}
		});

		$btnWork.on("click", function(event){
			event.preventDefault();
			var filterName = $(this).attr("data-filter");
			$listWork.isotope({
				filter: filterName
			});

			$btnWork.removeClass("active");
			$(this).addClass("active");
		});

	}

	function smooth(){

    $(".btn_menu")
		.off()
		.on("click", function(event) {
			event.preventDefault();
			var $ele  = $nav.find("ul");
			if( $ele.hasClass("open") ) {
				$ele.removeClass("open");
				$ele.stop().animate({
					"left": "-50%"
				}, 500);
			} else {
				$ele.addClass("open");
				$ele.stop().animate({
					"left": 0
				}, 500);
			}

		});

		var
      $scroller = $( (/safari/i.test(navigator.userAgent))? "body" : "html" ),
      $pageTop = $('a[href^="#"]'),
      i = -1,
      len = $pageTop.length;

    for( ; ++ i < len; ){
      $pageTop.eq(i)
      .click(function(){
        var
          href = $(this).attr("href"),
          $target = $(href);

        if(!$target.offset()) return;
        var position = $target.offset().top;
        $scroller.animate({
          "scrollTop" : position
        }, 1500);
        return false;
      });
    }
    return $pageTop;


	}


	$(function(){
		init();
	});

})(jQuery);