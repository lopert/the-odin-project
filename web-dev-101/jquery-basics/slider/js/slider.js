var currentSliderPos = 1;

$(document).ready(function() {
	$("#slider > img#1").fadeIn(300);

	startSlider();

	// Putting this at the end of file means it is loaded before dom is ready?
	// Works when placed in the on-load.
	// http://stackoverflow.com/a/15347133/4580715
	$("#slider > img").hover(
		function() {
			stopLoop();
		},
		function() {
			startSlider();
		}
	);


});

function startSlider() {

	count = $("#slider > img").size();
	$("#sliderStatus").html("<p> Slider ACTIVE </p>");

	loop = setInterval(function() {

		currentSliderPos++;

		if (currentSliderPos > count) {
			currentSliderPos = 1;
		}

		$("#slider > img").fadeOut(300);
		$("#slider > img#"+ currentSliderPos).fadeIn(300);
		console.log("Current img = " + currentSliderPos);

	}, 2000);

}

function prev() {
	showSlide(currentSliderPos - 1);
}

function next() {
	showSlide(currentSliderPos + 1);
}

function stopLoop(){
	window.clearInterval(loop);
	$("#sliderStatus").html("<p> Slider DISABLED </p>");
}

function showSlide(id) {

	stopLoop();

	if (id > count) {
		id = 1;
	}
	else if (id < 1) {
		id = count;
	}

	$("#slider > img").fadeOut(300);
	$("#slider > img#"+id).fadeIn(300);

	currentSliderPos = id;

	startSlider();
}