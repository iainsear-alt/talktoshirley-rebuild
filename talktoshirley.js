jQuery(document).ready(function($) {
	var toggleMenu = function(event) {
		event.preventDefault();
		event.stopPropagation();
		var expanded = $('#menu-toggle').attr('aria-expanded') === 'true';
		$('#menu-toggle').attr('aria-expanded', expanded ? 'false' : 'true');
		$('#main-nav').toggleClass('open');
	};

	if ('ontouchstart' in window || navigator.maxTouchPoints) {
		$('#menu-toggle').on('touchend', toggleMenu);
	} else {
		$('#menu-toggle').on('click', toggleMenu);
	}

	$('.scroll').click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top-60}, 500);
		if ($('#main-nav').hasClass('open')) {
			$('#main-nav').removeClass('open');
			$('#menu-toggle').attr('aria-expanded', 'false');
		}
	});
});
