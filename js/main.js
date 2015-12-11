var windowState;
var descVisible = false;
var sliderWidth;
var slideCount;

$(document).ready(function() {
	//console.log("This is the file main.js speaking.");

	getWindowState();

	$("body").on('click','#navToggle',function() {
		navToggle();
	});

	$("body").on('click', '.jobs > article', function() {
		jobToggle($(this).data('job'));
	});

	$("body").on('click', '.slider img', function() {
		sliderEngine();
	});

	if ($(".slider").length) {
		slideCount = $(".slider img").length;
		sliderSetUp(true);
	}

	
	jobSort(windowState);

});

$(window).resize(function() {
	//console.log("RESIZE!");
	if ($(window).width() >= 640 ) {
		//console.log("GREATER!");
		$("#topNav").css("display","block");
	} else {
		$("#topNav").css("display","none");
	}

	var currentWindowState = windowState;
	getWindowState();
	if (currentWindowState != windowState) {
		//console.log("CHANGE!");
		jobSort(windowState);
		sliderSetUp(false);
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
	//console.log(windowState);
}

function navToggle() {
	//console.log("This is the function navToggle() speaking.");
	$("#topNav").stop().slideToggle();
}

function jobToggle(jobToToggle) {
	//console.log("This is the function jobToggle() speaking.");
	//console.log(jobToToggle);

	if ($('.jobDesc[data-job="' + jobToToggle + '"]').hasClass("descVisible")) {
		$('.jobDesc[data-job="' + jobToToggle + '"]').stop().slideToggle().removeClass("descVisible");
		descVisible = false;
	} else {

		if (!descVisible) {
			$('.jobDesc[data-job="' + jobToToggle + '"]').stop().slideToggle().addClass("descVisible");
			descVisible = !descVisible;
		} else {
			$(".descVisible").stop().slideToggle().removeClass("descVisible");
			$('.jobDesc[data-job="' + jobToToggle + '"]').stop().slideToggle().addClass("descVisible");
		}

	}
}

function jobSort(sortState) {
	console.log("============");
	$.each($(".buffer"), function() {
		// console.log("TEST");
		$(this).remove();
	});
	if (sortState == "mobile") {
		$.each($(".jobDesc"), function() {
			//console.log($(this).data("job"));
			console.log($(this).data("job"),descCount,columnCount);
			$(this).insertAfter('article[data-job="' + $(this).data("job") + '"]');
			$(this).before("<div class='buffer clearfix'></div>");
		});
	}
	else if (sortState == "tablet") {

		var columnCount = 2;
		var descCount = 0;
		$.each($(".jobDesc"), function() {
			descCount++;
			console.log($(this).data("job"),descCount,columnCount);
			if (columnCount == 2 || columnCount == 4) {
				$(this).insertBefore('article:nth-of-type('+ (columnCount + 1) +')');
			} else {
				$('section.jobs').append($(this));
			}
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
			console.log($(this).data("job"),descCount,columnCount);
			if (columnCount == 3) {
				$(this).insertBefore('article:nth-of-type('+ (columnCount + 1) +')');
			} else {
				$('section.jobs').append($(this));
			}
			$(this).before("<div class='buffer clearfix'></div>");
			if (descCount == columnCount) {
				columnCount = columnCount + 3;
			}
		});

	}
}

function sliderSetUp(init) {
	// console.log("SLIDER!", $(".slider").width() );
	sliderWidth = $(".slider").width();
	if (windowState != "mobile") {
		
		var imgLeft = 0;
		// console.log(slideCount,sliderWidth);

		if(init) {
			$.each($(".slider img"), function() {
				console.log(imgLeft);
				$(this).css("left",imgLeft);
				imgLeft += sliderWidth;
			});
			$(".slider img:first-child").addClass("currentSlide");
			$(".slider img:last-child").addClass("lastSlide");
		} else {
			// console.log("NO INIT", slideCount, imgLeft, sliderWidth);
			var slideToTarget = $(".currentSlide");
			slideToTarget.addClass("fixerTarget");
			for (var i = 0; i < slideCount; i++) {
				
				$(".fixerTarget").css("left",imgLeft);

				if ($(".fixerTarget").is(".slider img:last-child")) {
					$(".fixerTarget").removeClass("fixerTarget");
					$(".slider img:first-child").addClass("fixerTarget");
				} else {
					$(".fixerTarget").removeClass("fixerTarget").next().addClass("fixerTarget");
				}

				imgLeft += sliderWidth;

			};

			$(".fixerTarget").removeClass("fixerTarget");

		}
	} else {
		$(".slider img").removeAttr("style");
	}

}

function sliderEngine() {
	if (windowState != "mobile") {
		console.log("MOVE!");
		var slidesAnimated = 0;
		$("body").off("click",".slider img");
		$(".slider img").stop(true,false).animate({
			left: "-=" + sliderWidth
		}, 1000, function() {
			slidesAnimated++;
			console.log("DONE", slidesAnimated, slideCount);
			if (slidesAnimated == slideCount) {
				shiftFirstSlide();
			}
		});
	}
}

function shiftFirstSlide() {
	console.log("SHIFT!");
	var newSlide = $(".slider img.currentSlide");
	var lastSlide = $(".slider img.lastSlide");

	var newLeft = parseInt(lastSlide.css("left")) + sliderWidth;

	if (newSlide.is(':last-child')) {
		$(".slider img:first-child").addClass("currentSlide");
	} else {
		newSlide.next().addClass("currentSlide");
	}

	
	newSlide.removeClass("currentSlide");
	newSlide.addClass("lastSlide");
	lastSlide.removeClass("lastSlide");

	newSlide.css("left", newLeft);

	$("body").on('click', '.slider img', function() {
		sliderEngine();
	});

	// console.log(newLeft);
	// $(newSlide).css("left",newLeft);
	
	// $(".slider").append(newSlide);
	// $(".slider img:last-child").css("left", (newLeft + sliderWidth) + "px");
	// $(".slider img:first-child").remove;
}
