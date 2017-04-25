$(document).ready(function(){

	$('.xtoggle').click(function(){
		var scroll = $(window).scrollTop();

		$(this).toggleClass('xtoggleOpen');
        $('.navbar').toggleClass('navbarActivated');

	});

	$(window).scroll(function() {    
    	var scroll = $(window).scrollTop();

    	if (scroll >= 100) {
        	$('.navbar').addClass('navbarOpen');
    	} else {
        	$('.navbar').removeClass('navbarOpen');
    	}

    	var upper_bound = 1100;
    	var lower_bound = 400;

    	if ($( window ).width() < 750) {
    		upper_bound = 1300;
    	}

    	if (scroll >= lower_bound && scroll <= upper_bound) {
        	$('.quote-span').addClass('expanded-span');
        	$('.quote-text').addClass('expanded-border');
    	}

	});

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

});

