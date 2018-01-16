$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

	$('.day--1 a').click(function(){
		$('.ticket--1').hide();
		$($(this).attr('href')).show();
	});

	$('.day a').click(function(){
		$('.ticket').hide();
		$($(this).attr('href')).show();
	});
});
