;(function($) {
"use strict";

var
  $nav = null,
  spwidth = 768;

function init() {

  $nav = $(".header_menu");

  $(window).on("load resize", function() {
    var winWidth = $(window).width();
    if ( winWidth < spwidth ) {
      $nav.addClass("nav_sp");
    } else {
      $nav.removeClass("nav_sp");
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

  // call .....
  nav();
}

function nav() {

}


$(function() {
	init();
})


})(jQuery);
