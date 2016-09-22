import $ from 'jquery';

var SectionInside = {

    init: function() {
        this.cacheDom();
        this.bindEvents();

        console.log('section-inside init...');
    },
    cacheDom: function() {
        this.$el           = $('#section-inside');
        this.$featureTitle = $('.feature__title');

    },
    bindEvents: function() {
        $(document).scroll(this.rotateFeatures.bind(this));
    },
    rotateFeatures: function() {
        var currentScrollPosition    = $(window).scrollTop(),
            rotateFeaturesPosition   = this.$el.offset().top - 200,
            noRotateFeaturesPosition = this.$el.offset().top + 200;

        if(currentScrollPosition > rotateFeaturesPosition && currentScrollPosition < noRotateFeaturesPosition){
            this.$featureTitle.addClass('animate');
        }
        else {
            this.$featureTitle.removeClass('animate');
        }
    }
};

export default SectionInside;
