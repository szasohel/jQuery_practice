```$(function() {
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
	// ************************************************//

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
	// ************************************************//

	// $(".class-name").slideDown(time in ms to slideDown);
	$(".red-box").slideDown(2000);

	// $(".class-name").slideUp(time in ms to slideUp);
	$(".red-box").slideUp(2000);

	// $(".class-name").slideToggle(time in ms to slideToggle);
	$(".red-box").slideToggle(2000);

	// ************** Moving *************************//
	// ************************************************//

	// $(".class-name").animate({
	//  	"css-property": "+=value"
	//  }, time in ms to animate, how the value change over the time);
	// here += used because sometime we dont know what
	// margin is already the element has
	// not all properties can be animated by this method
	 $(".blue-box").animate({
	 	"margin-left": "+=200px"
	 }, 2000, "linear");

	// ************** Custom animation ***************//
	// ************************************************//

	// we can use multiple css properties in a single animate function
	// below example the .blue-box changes its position and opacity
	// over time of 2000ms or 2sec

	 $(".blue-box").animate({
	 	"margin-left": "+=200px",
	 	"opacity" : "0"
	 }, 2000);

	 // ********* Delay and Chaining animation **********//
	// *************************************************//

	 // delay(time in ms to delay) it delays the function to
	 // execute. delay() has already created the chaining.
	 $(".green-box").delay(1000).fadeTo(500,.5);

	 // we can use several method chained together like this
	 // which is really effective until we overdo it.
	 $(".blue-box").delay(2000).fadeTo(500,.5).fadeOut().delay(500).fadeIn();

	 // ********* Timing animation with callback **********//

	 // as a parameter of the fading methods we can add another
	 // method which will be called as soon as the fading method
	 // is finished executing.
	 $(".green-box").fadeTo(500,.5, function(){
	 	$(".blue-box").fadeTo(500,.5);
	 });

	 // ********* Traverse through elements ************//
	// ************************************************//

	 // find all the list items in a list and apply
	 // a css style
	 // $("#id-name").find("elememt-name")
	 // find selects all chiclder and children of the children
	 $("#list").find("li").css("background-color","rgba(180,180,30,.8)");

	 // if we want to select only the direct children
	 $("#list").children("li").css("background-color","rgba(180,180,30,.8)")

	 // if we want to select all parents of an element
	 // if we want to select only certain elements just 
	 // filter it by placing that element inside parents method
	 $("#list").parents().css("background-color","rgba(180,180,30,.8)")

	 // if we want to select only direct parent
	 $("#list").parent().css("background-color","rgba(180,180,30,.8)")

	 // if we want to select siblings
	 $("#list").siblings().css("background-color","rgba(180,180,30,.8)")

	 // if we want to next element
	 $("#list").next().css("background-color","rgba(180,180,30,.8)")

	 // if we want to previous siblings
	 $("#list").prev().css("background-color","rgba(180,180,30,.8)")

	 // ********* filter from the selected elements ************//
	// ********************************************************//
	
	 // after selecting elements fi we want to filter certain
	 // elements we can use filter()
	 // after finding all the list item from a list if we want 
	 // to filter only even items
	 $("#list").find("li").filter(":even").css("background-color","rgba(180,180,30,.8)");

	 // we can use add a function inside filter()
	 // here index is the index of selected elements
	 // if function returns true for an element than
	 // it will be selected. for an element if function returns
	 // false than it will filter out that element
	 $("#list").find("li").filter(function(index){
	 	// it will return true for the elemnts who are
	 	// divisible by 3. like 0, 3, 6, 9 .....
	 	return index % 3 === 0;
	 })css("background-color","rgba(180,180,30,.8)");

	 // if we want to select only first element
	 $("li").first().css("background-color","rgba(180,180,30,.8)");

	 // if we want to select only last element
	 $("li").last().css("background-color","rgba(180,180,30,.8)");

	 // if we want to select certain element by index
	 // use positive number for ascending and 
	 //negetive for descending
	 $("li").eq(2).css("background-color","rgba(180,180,30,.8)");

	 // not is used to filter out certain element and select
	 // all other. below we have selected all list item except
	 // the first one
	 $("li").not(":first").css("background-color","rgba(180,180,30,.8)");

	 // ********* Adding New element to the DOM ***************//
	// ********************************************************//

	 // append() add a new item as a last item to the selected
	 // element. 
	 $("ul ui:first").append("<li>I am the last child</li>");

	 // or we can write

	 $("<li>I am the last child</li>").appendTo($("ul ui:first"));

	 // append() add a new item as a first item to the selected
	 // element. 
	 $("ul ui:first").preppend("<li>I am the last child</li>");

	 // or we can write

	 $("<li>I am the last child</li>").preppendTo($("ul ui:first"));

	 // add new element after selected element

	 $(".red-box").after('<div class="red-box">red-box</div>');

	 // add new element before selected element

	 $(".red-box").before('<div class="red-box">red-box</div>');

	 // or we can pass a function

	 $(".red-box").before(function(){
	 	return '<div class="red-box">red-box</div>';
	 });

	 // or we can pass a function
	 // instead of writing the whole tag we can pass
	 // class name also

	 $(".red-box").before(function(){
	 	return '.red-box';
	 });

	 // *************** Replacing element DOM *****************//
	// ********************************************************//

	// replace one element with another element

	$(".red-box").replaceWith(function(){
	 	return '.red-box';
	 });

	// or
	// in this case blue-box will move to 
	// the position of red-box
	$(".red-box").replaceWith(".blue-box");

	// or

	$(".red-box").replaceWith("<div class=\"red-box\">red-box</div>");


	// ****************** removing element DOM ****************//
	// ********************************************************//

	// removes all list item from the DOM
	$("li").remove();

	// if we assign a removed element to a variable then
	// we can append the element later in the DOM

	var removedItem = $("li").remove();
	$("p").append(removedItem);

	// but the problem is all the event handler associate
	// with the element will be lost. we have another 
	// function for removing elements from the DOM which 
	// can solve the problem

	var detachedItem = $("li").detach();
	$("p").append(detachedItem);

	// there is another function called empty()
	// it removes the child elements as well contents 
	// of the selected tag

	$("p").empty();

	// ****************** removing element DOM ****************//
	// ********************************************************//

	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
	//attribute: it exist in html
	// property: it exist in DOM. once dom is created after parsing
	// HTML code. the html elements become object of the dom and
	// attribute becomes properties. properties can be changed but 
	// not attribute. if we write checked in a checkbox input
	// the attr() will give the value of checked whether is checked
	// or unchecked in the webpage as its only exist in HTML not in
	// the DOM. but the prop() will show the value true if it's checked 
	// and will show false if its unchecked in the webpage
	//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

	// If we want to access the attribute like
	// name, href, height, width etc. we can use below 
	// function attr(). with this we can dynamically
	// change the value of the attribute

	$("a#special-link").attr("href");

	// if we want to change the current value of the
	// href attribute

	$("a#special-link").attr("href", "http://sayedsohel.com");

	// we can use prop() if we want to access the value of dom
	// properties. below example is used to check if the checkbox
	// is checked or not

	var checkbox = $("input:checkbox");
	checkbox.prop("checked");

	// we can use val() to read the value of input elements
	// if we want to grab the user input in a form

	var textInput = $("input:text");
	textInput.val();

	var rangeInput = $("input[type='range']");
	rangeInput.val();


});
