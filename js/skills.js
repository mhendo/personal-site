$('.icons').on('mouseenter', function(){
	console.log('hover')
	$(this).children('img').addClass('faded');
	$(this).children('.content1, .content2').fadeIn('fast');
});

$('.icons').on('mouseleave', function(){
	console.log('hover')
	$(this).children('img').removeClass('faded');
	$(this).children('.content1, .content2').fadeOut('fast');
});