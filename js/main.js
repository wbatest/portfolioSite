var windowState;

$(document).ready(function() {
	console.log("This is the file main.js speaking.");

	$("body").on('click','#navToggle',function() {
		navToggle();
	});

	$("body").on('click', '.jobs > article', function() {
		jobToggle($(this).data('job'));
	});

	getWindowState();
	jobSort(windowState);

});

$(window).resize(function() {
	console.log("RESIZE!");
	if ($(window).width() >= 640 ) {
		console.log("GREATER!");
		$("#topNav").css("display","block");
	} else {
		$("#topNav").css("display","none");
	}

	var currentWindowState = windowState;
	getWindowState();
	if (currentWindowState != windowState) {
		console.log("CHANGE!");
		jobSort(windowState);
	}

});

function getWindowState() {
	if ($(window).width() <= 639) {
		windowState = "mobile";
	} else if ($(window).width() <= 959) {
		windowState = "tablet";
	} else {
		windowState = "desktop";
	}
	console.log(windowState);
}

function navToggle() {
	console.log("This is the function navToggle() speaking.");
	$("#topNav").stop().slideToggle();
}

function jobToggle(jobToToggle) {
	console.log("This is the function jobToggle() speaking.");
	console.log(jobToToggle);
	$('.jobDesc[data-job="' + jobToToggle + '"]').stop().slideToggle();
}

function jobSort(sortState) {
	// if($(".buffer").length) {
	// 	$.each($(".buffer")).remove();
	// }
	if (sortState == "mobile") {
		$.each($(".jobDesc"), function() {
			console.log($(this).data("job"));
			$(this).insertAfter('article[data-job="' + $(this).data("job") + '"]');
			$(this).before("<div class='buffer clearfix'></div>");
		});
	}
	else if (sortState == "tablet") {

		var columnCount = 2;
		var descCount = 0;
		$.each($(".jobDesc"), function() {
			descCount++;
			console.log($(this).data("job"));
			$(this).insertAfter('article:nth-of-type('+ columnCount +')');
			$(this).before("<div class='buffer clearfix'></div>");
			if (descCount == columnCount) {
				columnCount = columnCount + 2;
			}
		});

	}
	else {

		var columnCount = 3;
		var descCount = 0;
		$.each($(".jobDesc"), function() {
			descCount++;
			console.log($(this).data("job"));
			$(this).insertAfter('article:nth-of-type('+ columnCount +')');
			$(this).before("<div class='buffer clearfix'></div>");
			if (descCount == columnCount) {
				columnCount = columnCount + 3;
			}
		});

	}
}


