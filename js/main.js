$(document).ready(function() {
	console.log("This is the file main.js speaking.");

	$("body").on('click','#navToggle',function() {
		navToggle();
	});

});

$(window).resize(function() {
	console.log("RESIZE!");
	if ($(window).width() >= 640 ) {
		console.log("GREATER!");
		$("#topNav").css("display","block");
	} else {
		$("#topNav").css("display","none");
	}
});

function navToggle() {
	console.log("This is the function navToggle() speaking.");
	$("#topNav").slideToggle();
}

