jQuery(document).ready(function($) {
	$('#menu-toggle').click(function(event) {
		event.preventDefault();
		var expanded = $(this).attr('aria-expanded') === 'true';
		$(this).attr('aria-expanded', expanded ? 'false' : 'true');
		$('#main-nav').toggleClass('open');
	});

	$('.scroll').click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top-60}, 500);
		if ($('#main-nav').hasClass('open')) {
			$('#main-nav').removeClass('open');
			$('#menu-toggle').attr('aria-expanded', 'false');
		}
	});
});
