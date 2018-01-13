;(function($){
	"use strict";
	$(function(){
		$('.conteiner').slick({
			centerMode: true,
			slidesToShow: 3,
			slide: ".div",
			prevArrow: ".prevArrow",
			nextArrow: ".nextArrow",
			variableWidth: true,
			
		});
	})
})(jQuery);

