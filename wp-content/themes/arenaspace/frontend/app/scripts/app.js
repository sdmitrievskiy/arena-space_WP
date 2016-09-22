import $ from 'jquery';

import FixedMenu from './../blocks/fixed-menu/FixedMenu';
import Slider from './../blocks/slider/Slider';
import SectionSecurity from './../blocks/section-security/SectionSecurity';
import SectionForm from './../blocks/section-form/SectionForm';


$(document).ready(function () {
    FixedMenu.init();
    Slider.init();
    
    SectionSecurity.init();
    SectionForm.init();

    //расскомментировать, когда появится видео.

    // var video = document.getElementById("video");
    // video.addEventListener("canplay", function () {
    //     console.log('start video');
    //     $('.loader-wrapper').animate({opacity: 0}, 1500, function () {
    //         $(this).hide();
    //     });
    // }, false);

    

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

