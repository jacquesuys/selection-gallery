$(document).ready(function(){

	var $menu = $('header > a');
	var $header = $('header');

	$menu.on('click', function(){
		$header.toggleClass('menu-open');
	});

	var $divs = $('section > div');
	var selected = [];

	$divs.each(function(i){
		$(this).data('i', i);
		
		var $cover = $(this).find('.cover');
		var $src = $cover.find('img').attr('src');

		$cover.css('background-image', 'url(' + $src + ')');
		$(this).on('click', function(){
			var $i = $(this).data('i');
			var $indexOf = selected.indexOf($i);
			if ( selected.length < 10 ) {
				if ( $indexOf < 0 ) {
					selected.push($i);
				} else {
					selected.splice($indexOf, 1);
				}
				$(this).toggleClass('selected');
			} else if (selected.length === 10 && $indexOf > 0) {
				selected.splice($indexOf, 1);
				$(this).toggleClass('selected');
			}
		});
	});

});