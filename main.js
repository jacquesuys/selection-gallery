document.addEventListener("DOMContentLoaded", function(){
	var selected = [];

	var $ = function(element) {
		return document.querySelectorAll(element);
	};

	var $divs = $('div');

	for (var i = 0; i < $divs.length; i++) {
		$divs[i].dataset.i = i;
		$divs[i].addEventListener('click', function(){
			var $i = this.dataset.i;
			if ( selected.indexOf($i) < 0 && selected.length < 10 ) {
				selected.push($i);
				console.log(selected);
			} else {
				selected.splice($i, 1);
				console.log(selected);
			}
		});
	}
});