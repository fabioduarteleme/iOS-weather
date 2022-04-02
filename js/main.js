
//https://github.com/alexfoxy/lax.js



  $('.carousel-bg-video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.carousel-content'
  });


$('.carousel-content').slick({
    asNavFor: '.carousel-bg-video',
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    edgeFriction: 0.15,
    touchThreshold: 5,
  });



$(window).scroll(function(){
    let scrollPage = $(window).scrollTop();
    let rangeDetails = 300

    if(scrollPage >= 30){
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    if(scrollPage >= 20){
        $('.weather-resume').addClass('fixed-resume');
    } else {
        $('.weather-resume').removeClass('fixed-resume');
    }

    $('.header-details').css("opacity", 1- scrollPage / rangeDetails * 10);

    console.log(scrollPage)
  });

