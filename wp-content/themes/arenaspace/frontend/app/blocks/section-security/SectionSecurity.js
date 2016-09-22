require('jquery-columnizer');
import $ from 'jquery';

var SectionSecurity = {
    config: {
      columnize: {
          columns: 2
      }
    },
    init: function() {
        this.cacheDom();
        this.columnizeList();

        console.log('section-security init...');
    },
    cacheDom: function() {
        this.$list = $('.feature-list-columnize-js');
    },
    columnizeList: function() {
        this.$list.columnize(this.config.columnize);
    }
};

export default SectionSecurity;
