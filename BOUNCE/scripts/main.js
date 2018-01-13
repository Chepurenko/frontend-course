$(document).ready(function() {

    $('.team_cards--slider').bxSlider({
        controls: false,
        keyboardEnabled: true
    });

    $('.testimonials_cards--slider').bxSlider({
        controls: false,
        keyboardEnabled: true,
        auto: true
    });

    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 500,
        easing: 'ease',
        offset: 0
    });

    var grid = $('.portfolio_works').isotope({
        itemSelector: '.portfolio_works__item',
        layoutMode: 'masonry',
    });

    $('.portfolio_filter').click(function() {
        var filterValue = $( this ).attr('data-filter');
        grid.isotope({ filter: filterValue });

        $(".portfolio_filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });

    $('.nav_menu__item').on('mouseover' , (function() {
        $(".nav_menu__item").removeClass("active-menu_item");
        $(this).addClass("active-menu_item");
    }));
    $('.nav_menu__item').on('mouseout' , (function() {
        $(".nav_menu__item").removeClass("active-menu_item");
    }));
});

(function () {
    window.onload = function () {
        var map,
            point = {lat: 47.8160622, lng: 35.170142};

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17
            });
            var marker = new google.maps.Marker({
                position: point,
                map: map
            });
        }

        initMap();
    };
})();
