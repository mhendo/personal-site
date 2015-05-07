//when someone clicks an experience link
/*$('#job-titles a').on('click', function(e){
	e.preventDefault();
	//where we want to scroll to
	var pickedJob = $(this).attr('href');
	//get the job responsibilities top offset
	var targetOffset =
		$(pickedJob).offset().top;

	console.log(targetOffset)
	//responsibilities article scrollTop to targetOffset
	$('#responsibilities').animate({
		scrollTop: targetOffset
		}, 500);
});*/

$('#job-titles div').on('click', function(){
	$('.job').removeClass('purple-bg')
	$(this).addClass('purple-bg')
})