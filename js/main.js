$(document).ready(function(){

	var w = $(window).width()/2;

	$('.play').mousemove(function(e){
		$('.building').css('left', (w - e.clientX)/75 + 'px');
		$('.foreground').css('left', (w - e.clientX)/40 + 'px');
	});

});