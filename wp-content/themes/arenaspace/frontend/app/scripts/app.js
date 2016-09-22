import $ from 'jquery';
import FixedMenu from './../blocks/fixed-menu/FixedMenu';

require('./vendor/jquery.gallery.js');
require('jquery-columnizer');
require('./vendor/jquery.tubular.js');



$(document).ready(function () {
    FixedMenu.init();

    //расскомментировать, когда появится видео.

    // var video = document.getElementById("video");
    // video.addEventListener("canplay", function () {
    //     console.log('start video');
    //     $('.loader-wrapper').animate({opacity: 0}, 1500, function () {
    //         $(this).hide();
    //     });
    // }, false);



    $('.dg-container').gallery();
    $('.columnize-js').columnize({
        columns: 2
    });


    $(".nav a").click(function () {

        console.log($(this).data('modal'));
        if (!$(this).data('modal')) {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top - 100;
            $('html,body').animate( { scrollTop: destination }, 1100 );
        } else {
            //do modal
        }

        return false;
    });

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

