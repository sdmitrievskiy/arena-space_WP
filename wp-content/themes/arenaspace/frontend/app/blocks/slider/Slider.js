require('./../../scripts/vendor/jquery.gallery.js');
import $ from 'jquery';

var Slider = {
    init: function() {
        this.cacheDom();
        this.makeSlider();

        console.log('slider init...');
    },
    cacheDom: function() {
        this.$el = $('.dg-container');
    },
    makeSlider: function() {
        this.$el.gallery();
    }
};

export default Slider;
