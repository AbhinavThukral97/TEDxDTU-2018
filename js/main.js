$(document).ready(function(){
	var w = $(window).width()/2;	
	var w1 = w/75;
	var w2 = w/40;
	$('.play').mousemove(function(e){
		$('.building').css('left', w1 - e.clientX/75 + 'px');
		$('.foreground').css('left', w2 - e.clientX/40 + 'px');
	});
});
