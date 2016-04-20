function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

var main = function(){

	var $ = function(el) {
		return document.querySelectorAll(el);
	};

	var addEventListener = function(el, eventName, handler) {
	  if (el.addEventListener) {
	    el.addEventListener(eventName, handler);
	  } else {
	    el.attachEvent('on' + eventName, function(){
	      handler.call(el);
	    });
	  }
	};

	var toggleClass = function(el, className) {
		if (el.classList) {
		  el.classList.toggle(className);
		} else {
			var classes = el.className.split(' ');
			var existingIndex = -1;
			for (var i = classes.length; i--;) {
				if (classes[i] === className) {
					existingIndex = i;
				}
			}

			if (existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			} else {
				classes.push(className);
			}

		  el.className = classes.join(' ');
		}
	};

	var $menu = $('header > a')[0];
	var $header = $('header')[0];

	addEventListener($menu, 'click', function(){
		toggleClass($header, 'menu-open');
	});

	var $divs = $('section > div');
	var selected = [];

	for (var i = 0; i < $divs.length; i++) {
		$divs[i].dataset.i = i;

		var $cover = $divs[i].querySelector('.cover');
		var $img = $cover.querySelector('img');

		$cover.style.backgroundImage = 'url(' + $img.src + ')';

		addEventListener($divs[i], 'click', function(){
			var $i = this.dataset.i;
			var $indexOf = selected.indexOf($i);

			if ( selected.length < 10 ) {
				if ( $indexOf < 0 ) {
					selected.push($i);
				} else {
					selected.splice($indexOf, 1);
				}
				toggleClass($divs[$i], 'selected');
			} else if (selected.length === 10 && $indexOf > 0) {
				selected.splice($indexOf, 1);
				toggleClass($divs[$i], 'selected');
			}
		});
	}
};

ready(main);