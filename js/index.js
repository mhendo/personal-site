//click on an icon
$('.hp-icons a').on('click', function(e){
	e.preventDefault();
	//grab the icon's url
	var pickedIcon = $(this).attr('href');
	//show slowly
	$(pickedIcon).slideToggle('slow');
	$(this).siblings(article).addClass('hidden');
});