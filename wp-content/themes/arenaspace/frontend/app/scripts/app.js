import $ from 'jquery';

import FixedMenu from './../blocks/fixed-menu/FixedMenu';
import Slider from './../blocks/slider/Slider';
import SectionSecurity from './../blocks/section-security/SectionSecurity';


$(document).ready(function () {
    FixedMenu.init();
    Slider.init();
    SectionSecurity.init();

    //расскомментировать, когда появится видео.

    // var video = document.getElementById("video");
    // video.addEventListener("canplay", function () {
    //     console.log('start video');
    //     $('.loader-wrapper').animate({opacity: 0}, 1500, function () {
    //         $(this).hide();
    //     });
    // }, false);


    $(document).scroll(function () {
        //console.log(2);
        var s_top = $(window).scrollTop();
        var yes = $("#section-form").offset().top - 200;
        if(s_top > yes){
            //console.log("Yes");
            $('.section-form .center').animate({width: "1030px"}, 700);
            $('.section-form__form').animate({opacity: "1"}, 2000);
            $('.section-form__title').animate({opacity: "1"}, 2000);

        }
    });



    $(document).scroll(function () {
        var s_top = $(window).scrollTop();
        var yes = $("#section-inside").offset().top - 200;
        var no = $("#section-inside").offset().top + 200;
        if(s_top > yes && s_top < no){
            $('.feature__title').addClass('animate');

        }
        else {
            $('.feature__title').removeClass('animate');

        }

    });
});

