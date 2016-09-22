import $ from 'jquery';

var Video = {
    config: {
        scrollAnimationDuration: 1000
    },
    init: function() {
        this.cacheDom();
        this.bindEvents();

        console.log('video init...');
    },
    cacheDom: function() {
        this.video          = document.getElementById("video");
        this.$loaderWrapper = $('.loader-wrapper');
    },
    bindEvents: function() {
        this.video.addEventListener('canplay', this.hidePreloader.bind(this))
    },
    hidePreloader: function() {
        this.$loaderWrapper.animate({opacity: 0}, 1500, function () {
            $(this).hide();
        })
    }
};

export default Video;