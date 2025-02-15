$(window).load(function(){
	$("footer p a").click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
			return false;
	});
	$(window).bind("scroll", function() {
		if ($(this).scrollTop() > 10) {
			$("#pagetop").stop().fadeIn();
		} else {
			$("#pagetop").stop().fadeOut();
		}
	});
});
