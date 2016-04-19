document.addEventListener("DOMContentLoaded", function(){
	var selected = [];

	var $ = function(element) {
		return document.querySelectorAll(element);
	};

	var $menu = $('header > a')[0];

	$menu.addEventListener('click', function(){
		console.log('clicked');
	})

	var $divs = $('section > div');

	for (var i = 0; i < $divs.length; i++) {
		$divs[i].dataset.i = i;

		var $cover = $divs[i].querySelector('.cover');
		var $img = $cover.querySelector('img');

		$cover.style.backgroundImage = 'url(' + $img.src + ')';

		$divs[i].addEventListener('click', function(){
			var $i = this.dataset.i;
			if ( selected.length < 10 ) {
				var $indexOf = selected.indexOf($i);
				if ( $indexOf < 0 ) {
					selected.push($i);
					console.log(selected);
				} else {
					selected.splice($indexOf, 1);
					console.log(selected);
				}
				$divs[$i].classList.toggle('selected');
			}
		});
	}
});