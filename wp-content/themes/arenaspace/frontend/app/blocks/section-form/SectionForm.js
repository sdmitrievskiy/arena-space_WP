import $ from 'jquery';

var SectionForm = {

    init: function() {
        this.cacheDom();
        this.bindEvents();

        console.log('section-form init...');
    },
    cacheDom: function() {
        this.$el     = $('#section-form');

        this.$center = $('.section-form .center');
        this.$form   = $('.section-form__form');
        this.$title  = $('.section-form__title');
    },
    bindEvents: function() {
        $(document).scroll(this.openGate.bind(this));
    },
    openGate: function() {
        var currentScrollPosition = $(window).scrollTop();
        var openGatePosition = this.$el.offset().top - 200;

        if(currentScrollPosition > openGatePosition){

            this.$center.animate({width: "1030px"}, 700);
            this.$form.animate  ({opacity: "1"},    2000);
            this.$title.animate ({opacity: "1"},    2000);
        }
    }
};

export default SectionForm;
