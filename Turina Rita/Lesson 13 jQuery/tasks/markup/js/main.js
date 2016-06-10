$(document).ready(function(){

	// find the highest .box element
	y = 0;
	$(".box").each(function() {
		x = $(this).height();
		if (x > y) {y = x;}
	})
	// set the same height for all .box elements
	$(".box").each(function() {
		$(this).height(y);
	})

	// find the highest .block element
	y = 0;
	$(".block").each(function() {
		x = $(this).height();
		if (x > y) {y = x;}
	})
	// set the same height for all .block elements
	$(".block").each(function() {
		$(this).height(y);
	})

	// mark 1st element in each list red
	$(".list li:first-child").css("color", "red");

	// for even elements of the lists: add index before text
	$(".list li:even").each(function(){
		$(this).prepend($(this).index() + " ");
	})

	// clean the form by click on "Clean" button
	$(".btn-clean").attr("type", "reset");

	// On click on the item mark it with class "active" (unique within each list)
	$(".list").each(function(){
		$("li").click(function(){
			$(this).parent().children().removeClass("active").css('background', '');
			$(this).attr("class", "active").css("background", "yellow");		
		})
	})
})