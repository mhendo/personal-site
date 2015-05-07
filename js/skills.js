$('.icons').on('mouseover', function(){
	console.log('hover')
	$(this).children('.content').slideToggle();
}, function(){
	$(this).children('.content').slideToggle();
});