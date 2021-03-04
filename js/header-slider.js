$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    }
    );
    $('.sertificates_slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="sertificates_slider-control"><img src="./images/sertificates/Arrow 2.png" alt="Стрелка"></button>',
        prevArrow: '<button class="sertificates_slider-control"><img src="./images/sertificates/Arrow 2.png" alt="Стрелка"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            }
        ]
    }
    );
    $('.partners_slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            }
        ]
    }
    );
});