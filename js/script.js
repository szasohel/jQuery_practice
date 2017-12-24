$(function() {
	// ************** Fading *************************//

	// $(".class-name").fadeOut(time in ms to fadeOut);
	$(".red-box").fadeOut(500);

	// $(".class-name").fadeOut(time in ms to fadeIn);
	$(".blue-box").fadeIn(500);

	// fadeTo: to fade an element to a certain opacity
	//$(".class-name").fadeTo(time in ms to fadeIn,opacity);
	$(".green-box").fadeTo(500,.5);

	// fadeToggle: to fadeIn or fadeOut an element from their
	// previous state
	//$(".class-name").fadeToggle();
	$(".green-box").fadeToggle();

	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
	// never use fadeTo after using fadeOut on an element
	// because fadeOut makes the element attribute 
	// display: hidden. in this case fadeTo can't show the
	// element back again
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

	// ************** Show and Hide *******************//

	// here time is optional. if we want some effect while
	// showing, hiding elements we can use time

	// $(".class-name").show();
	// $(".class-name").show(time in ms to show);
	$(".red-box").show();

	// $(".class-name").hide();
	// $(".class-name").show(time in ms to show);
	$(".red-box").hide();

	// $(".class-name").toggle();
	// $(".class-name").show(time in ms to show);
	$(".red-box").toggle();

	// ************** Sliding ************************//
	// $(".class-name").slideDown(time in ms to slideDown);
	$(".red-box").slideDown(2000);

	// $(".class-name").slideUp(time in ms to slideUp);
	$(".red-box").slideUp(2000);

	// $(".class-name").slideToggle(time in ms to slideToggle);
	$(".red-box").slideToggle(2000);

	// ************** Moving *************************//

	// ************** Custom animation ***************//

});