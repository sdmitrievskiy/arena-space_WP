import $ from 'jquery';

require('./vendor/jquery.gallery.js');
require('jquery-columnizer');
require('./vendor/jquery.tubular.js');



$(document).ready(function () {


    var video = document.getElementById("video");
    video.addEventListener("canplay", function () {
        console.log('start video');
        $('.loader-wrapper').animate({opacity: 0}, 1500, function () {
            $(this).hide();
        });
    }, false);

    // $('.header').tubular({videoId: 's9e9p_nTNMc'});

    $('.dg-container').gallery();
    $('.columnize-js').columnize({
        columns: 2
    });


    $(".nav a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 100;
        $('html,body').animate( { scrollTop: destination }, 1100 );
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
        // console.log(3);
        //console.log(1);
        var s_top = $(window).scrollTop();
        //console.log(s_top);
        var yes = 50;
        //console.log($('.fixed-menu'));
        if(s_top > yes){
            $('.fixed-menu').addClass('white');
            //console.log(4);
        }
        else {
            $('.fixed-menu').removeClass('white');
        }
    });

    $(document).scroll(function () {
        var s_top = $(window).scrollTop();
        var yes = $("#section-inside").offset().top - 200;
        var no = $("#section-inside").offset().top + 200;
        if(s_top > yes && s_top < no){
            $('.feature__title').addClass('animate');
            // console.log('animate');
        }
        else {
            $('.feature__title').removeClass('animate');
            // console.log('no animate');
        }

    });
});

