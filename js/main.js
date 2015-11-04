$(document).ready(function() {
	console.log("This is the file main.js speaking.");

	$("body").on('click','#navToggle',function() {
		navToggle();
	});

});

function navToggle() {
	console.log("This is the function navToggle() speaking.");
	$("#topNav").slideToggle();
}