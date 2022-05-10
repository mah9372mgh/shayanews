$(document).ready(function() {
    $(".slide_menu").click(function(){
        $(".nav").slideToggle();
    });
    if($(window).width() < 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $('.fixed').addClass("fix-header");
                $(".image").attr("src", "/image/logo.png");
            } else {
                $('.fixed').removeClass("fix-header");
                $(".image").attr("src", "/image/first_logo.png");
            }
        });
    }
    else if ($(window).width() > 769) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 70) {
                $('.second_header').addClass("fix-header");
                $(".image").attr("src", "/image/logo.png");
            } else {
                $('.second_header').removeClass("fix-header");
                $(".image").attr("src", "/image/first_logo.png");
            }
        });
    }
    if( $(window).width() < 768) {
        $('.part1_light_slider').lightSlider({
            item: 1,
            slideMove: 1, // slidemove will be 1 if loop is true
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
            auto: true,
            loop: true,
            slideEndAnimation: true,
            keyPress: false,
            controls: false,
            rtl:true,
        });
    }
    $('.part2_light_slider').lightSlider({
        item: 5,
        slideMove: 1, // slidemove will be 1 if loop is true
        mode: 'slide',
        slideMargin: 16,
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        auto: true,
        loop: true,
        speed: 600,
        slideEndAnimation: true,
        keyPress: false,
        controls: true,
        rtl:true,
        pager:false,
        enableDrag:false,
        prevHtml:'<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#726d4c" d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5zm9.707 13.293l-1.414 1.414L7.586 12l5.707-5.707l1.414 1.414L10.414 12l4.293 4.293z"/></svg>',
        nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#726d4c" d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm6.293 2.707l1.414-1.414L16.414 12l-5.707 5.707l-1.414-1.414L13.586 12L9.293 7.707z"/></svg>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                }
            }
        ]
    });
    $(function() {
        $("ul#tabs li").click(function(e) {
            var index = $(this).index();
            $("ul#tabs li").removeClass("active");
            $(this).addClass("active");
            // $("ul.list").addClass("back");
            $("ul.list").hide();
            $("ul.list:eq(" + index + ")").show();
            return false
        });
    });
});