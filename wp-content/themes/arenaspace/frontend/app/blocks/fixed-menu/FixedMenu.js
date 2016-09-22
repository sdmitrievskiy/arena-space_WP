import $ from 'jquery';
import Nav from './../nav/Nav'

var FixedMenu = {
    config: {
      scrollPositionToFixedMenu: 50,
      classToFixedMenu: 'white'
    },
    init: function() {
        Nav.init(); //также произойдет инициализация меню в футере

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