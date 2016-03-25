$(document).ready();


$(".thumbnails").hover(function(){
    $("p").animate({opacity: '100'});
}); 



$('.filtericon img').click(function(){
	$('.left-bar').toggle({width: "0px"});

	$(".right-bar").toggleClass("right-bar-full")
});

