import $ from 'jquery';

var Nav = {
    config: {
        scrollAnimationDuration: 1000
    },
    init: function() {
        this.cacheDom();
        this.bindEvents();

        console.log('nav init...');
    },
    cacheDom: function() {
        this.$navLinks = $('.nav a');
    },
    bindEvents: function() {
        this.$navLinks.click(this.linkClickAction);
    },
    linkClickAction: function() {
        var isLinkModal = $(this).data('modal');

        if (!isLinkModal) {
            var $target = $( $(this).attr('href') );
            var scrollPosition = $target.offset().top - 100;
            $('html,body').animate({scrollTop: scrollPosition}, Nav.config.scrollAnimationDuration);
        } else {
            console.log('it is modal');
        }

        return false;
    }
};

export default Nav;