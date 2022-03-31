
//https://github.com/alexfoxy/lax.js



// let controller = new ScrollMagic.Controller();

// //https://scrollmagic.io/examples/basic/responsive_duration.html

// $(function () {

//   new ScrollMagic.Scene({ triggerElement: "#pin1", duration: 0, offset: 60, triggerHook: 0.1, })
//     .setPin("#current-city")
//     .setClassToggle("#current-city", "sticky")
//     .addIndicators()
//     .addTo(controller);

//   new ScrollMagic.Scene({ triggerElement: "#pin2", duration: 0, offset: 70, triggerHook: 0.3, })
//     .setPin("#card")
//     .setClassToggle("#current-city", "sticky")
//     .addIndicators()
//     .addTo(controller);
// });



$(window).scroll(function(){
    let scrollPage = $(window).scrollTop();
    let rangeDetails = 300
    //let rangeWeatherResume = 300

    if(scrollPage >= 57){
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    // if(scrollPage >= 183){
    //     $('.weather-resume').addClass('fixed-resume');
    // } else {
    //     $('.weather-resume').removeClass('fixed-resume');
    // }

    $('.header-details').css("opacity", 1- scrollPage / rangeDetails * 3);
    // $('.weather-resume').css("margin-top", 1- scrollPage / rangeWeatherResume * 200);

    console.log(scrollPage)
  });

