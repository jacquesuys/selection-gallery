document.addEventListener("DOMContentLoaded", function(){
	var selected = [];

	var $ = function(element) {
		return document.querySelectorAll(element);
	};

	var $divs = $('section > div');

	for (var i = 0; i < $divs.length; i++) {
		$divs[i].dataset.i = i;

		var $cover = $divs[i].querySelector('.cover');
		var $img = $cover.querySelector('img');

		$cover.style.backgroundImage = 'url(' + $img.src + ')';

		$divs[i].addEventListener('click', function(){
			var $i = this.dataset.i;
			if ( selected.length < 10 ) {
				if ( selected.indexOf($i) < 0 ) {
					selected.push($i);
					console.log(selected);
				} else {
					selected.splice($i, 1);
					console.log(selected);
				}
				$divs[$i].classList.toggle('selected');
			}
		});
	}
});