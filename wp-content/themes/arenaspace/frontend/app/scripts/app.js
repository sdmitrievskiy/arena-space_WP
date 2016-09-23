import $ from 'jquery';

import Video from './../blocks/header/Video';
import FixedMenu from './../blocks/fixed-menu/FixedMenu';
import Slider from './../blocks/slider/Slider';
import SectionSecurity from './../blocks/section-security/SectionSecurity';
import SectionForm from './../blocks/section-form/SectionForm';
import SectionInside from './../blocks/section-inside/SectionInside';

require('./vendor/animatedModal.js');

$(document).ready(function () {

    //когда появится видео, расскомментить (также нужно расскомментить в header.jade
    //Video.init();

    FixedMenu.init();
    Slider.init();
    
    SectionSecurity.init();
    SectionForm.init();
    SectionInside.init();

    $('#demo1').animatedModal({modalTarget: 'animatedModalFran'});
    $('#demo2').animatedModal({modalTarget: 'animatedModalFaq'});

    $('#demo3').animatedModal({modalTarget: 'animatedModalFran1'});
    $('#demo4').animatedModal({modalTarget: 'animatedModalFaq1'});

    
});

