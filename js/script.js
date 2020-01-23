// preloader
$(window).on("load", function(){

	// icon fade out
	$(".loader .inner").fadeOut(750, function(){

		// background fade out
		$(".loader").fadeOut(750);
	});

	// filtering pictures
    $(".items").isotope({

    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });
});

$(document).ready(function(){

	// 3 background pictures
	$('#slides').superslides({

		animation: 'fade',
		play: 5000,
		pagination: false
	});

	// name and profession typing
	var typed = new Typed(".typed", {

		strings: ["Junior Developer", "Junior Developer", "Junior Developer"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	// skill percentage
	$('.owl-carousel').owlCarousel({

	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});


    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    // start counting at certain scroll position
    $(window).scroll(function(){

    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

    		$('.chart').easyPieChart({

	            easing: 'easeInOut',
	            barColor: '#fff',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from, to, percent) {

	            	$(this.el).find('.percent').text(Math.round(percent));
	            }

    		});

    	}

    	if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

    		$(".counter").each(function(){
		    	var element = $(this);
		    	var endVal = parseInt(element.text());

		    	element.countup(endVal);
		    })

		    countUpFinished = true;
    	}

    });

    // background for images on fullscreen
    $("[data-fancybox]").fancybox();

    // filtering images
    $("#filters a").click(function(){

    	// removing current class
    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	// storing new filter class
    	var selector = $(this).attr("data-filter");

    	// applying new class for filter
    	$(".items").isotope({

	    	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });

    	// inside click handler return false means dont do anything else.
	    return false;

    });

    // smooth scrolling on  click in the menü
    $("#navigation li a").click(function(e){

    	// prevent jumping on click
    	e.preventDefault();

    	// get element go to
    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;
    	$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");


    });


    // making navbar sticky
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

    	var body = $("body");

    	if($(window).scrollTop() >= navTop) {

    		// adding space for navbar to make smooth transition
    		body.css("paddig-top", nav.outerHeight() + "px");

    		// fixing
    		body.addClass("fixedNav");

    	} else {

    		// removing fix
    		body.css("paddig-top", 0);
    		body.removeClass("fixedNav");
    	}

    }


    

});