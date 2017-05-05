$(document).ready(function(){

	$('.xtoggle').click(function(){
		var scroll = $(window).scrollTop();

		$(this).toggleClass('xtoggleOpen');
        $('.navbar').toggleClass('navbarActivated');

	});

    $('.info').click(function(){
        $(this).closest('.program-container').toggleClass('container-long');
    });

	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

    	if (scroll >= 100) {
        	$('.navbar').addClass('navbarOpen');
    	} else {
        	$('.navbar').removeClass('navbarOpen');
    	}

	});

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

});

