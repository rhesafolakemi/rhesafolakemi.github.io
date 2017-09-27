jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});

  $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: (target.offset().top - 40)
              }, 1000);
              if ($('.navbar-toggle').css('display') != 'none') {
                  $(this).parents('.container').find(".navbar-toggle").trigger("click");
              }
              return false;
          }
      }
  });
