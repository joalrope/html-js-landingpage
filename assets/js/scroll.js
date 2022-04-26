$(function () {
	$("main").on("scroll", function (e) {
		var scroll = $("main").scrollTop();

		//>=, not <=
		if (scroll >= 60) {
			//clearHeader, not clearheader - caps H
			$(".navbar").addClass("bg-primary text-white");
			$(".nav-link").addClass("text-white");
			$(".navbar").removeClass("container");
		} else {
			$(".navbar").removeClass("bg-primary text-white");
			$(".nav-link").removeClass("text-white");
		}
	});

	// document ready
});
