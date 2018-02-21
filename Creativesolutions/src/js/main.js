;(function($){
	"use strict";

//-------------slider works----------------

	$(function(){
		$('.works__slider').slick({
			slide: "img",
			slidesToShow: 1,
			prevArrow: ".prevArrow",
			nextArrow: ".nextArrow",
			dots: true,
			responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }]
		});
	});

//--------------slider team------------------

	$(function(){
		$('.team__slider').slick({
			infinite: true,
       		slidesToShow: 3,
        	slidesToScroll: 3,
        	responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            }]
		});
	});

	$( window ).scroll(function() {
		var body = $(document).scrollTop();
		console.dir(body);
  		if(body == 0) {
  		$( ".menu" ).css( 'background', 'transparent' );
  	} else { $( ".menu" ).css( 'background', 'rgba(200, 200, 200, .6)');}
});
	

//-----------window scroll--------------

	$('#nav').on('click', (function(e){
	    e.preventDefault();
	     var id = e.target.getAttribute('href');
	  console.log(id);
	      $('html, body').animate({scrollTop:$(id).position().top}, 1000);
		})
	);

	$('.to-top-btn').on('click', (function(e){
	    e.preventDefault();
	    console.log(e.target);
	    var data = e.target.getAttribute('data');
	    $('html, body').animate({scrollTop:$(data).position().top}, 1000);
		})
	);

// ------------BURGER MENU--------------

	$('#burger').on('click', function(){
		$('.menu__link').toggleClass('menu__link_visible');
		$(this).toggleClass('burger__hover');
	});

})(jQuery);

//-----------------init MAP----------------------

(function () {
    window.onload = function () {
        var map,
            point = {lat: 48.7268145, lng: 37.6019125};

        function initMap() {
            map = new google.maps.Map(document.querySelector("#map"), {
                center: point,
                zoom: 17,
                scrollwheel: false,
                disableDefaultUI: true
            });

            var image = "marker.png";
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: image
            });
        }

        initMap();
    };
})();
