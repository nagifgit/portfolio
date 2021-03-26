//header footer parts
$(function() {
    $("#header").load("./common/header.html");
    $("#footer").load("./common/footer.html");
});


//return pagetop
$(function () {
	var pageTop = $('.page-top');
	pageTop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			pageTop.fadeIn();
		} else {
			pageTop.fadeOut();
		}
	});
	pageTop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500, 'swing');
		return false;
	});
});


//header scroll 背景(.black付与)
$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.change').addClass('black');
	} else {
		$('.change').removeClass('black');
	}
});
