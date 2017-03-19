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
    	} else {
        	$('.quote-span').removeClass('expanded-span');
        	$('.quote-text').removeClass('expanded-border');
    	}

	});

    window.sr = ScrollReveal().reveal('.program-container', {
        reset:true,
        viewFactor: 0.7
    });

});

