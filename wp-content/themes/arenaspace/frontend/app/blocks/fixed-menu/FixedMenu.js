import $ from 'jquery';

var FixedMenu = {
    config: {
      scrollPositionToFixedMenu: 50,
      classToFixedMenu: 'white'
    },
    init: function() {
        this.cacheDom();
        this.bindEvents();

        console.log('fixed menu init...');
    },
    cacheDom: function() {
        this.$el = $('.fixed-menu');
    },
    bindEvents: function() {
        $(document).scroll(this.fixedMenu.bind(this));
    },
    fixedMenu: function() {
        var currentScrollPosition = $(window).scrollTop();

        if(currentScrollPosition > this.config.scrollPositionToFixedMenu){
            this.$el.addClass(this.config.classToFixedMenu);
        } else {
            this.$el.removeClass(this.config.classToFixedMenu);
        }
    }
};

export default FixedMenu;