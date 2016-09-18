webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	
	(0, _jquery2.default)(document).ready(function () {
	
	    var video = document.getElementById("video");
	    video.addEventListener("canplay", function () {
	        console.log('start video');
	        (0, _jquery2.default)('.loader-wrapper').animate({});
	    }, false);
	
	    // $('.header').tubular({videoId: 's9e9p_nTNMc'});
	
	    (0, _jquery2.default)('.dg-container').gallery();
	    (0, _jquery2.default)('.columnize-js').columnize({
	        columns: 2
	    });
	
	    (0, _jquery2.default)(".nav a").click(function () {
	        var elementClick = (0, _jquery2.default)(this).attr("href");
	        var destination = (0, _jquery2.default)(elementClick).offset().top - 100;
	        (0, _jquery2.default)('html,body').animate({ scrollTop: destination }, 1100);
	        return false;
	    });
	
	    (0, _jquery2.default)(document).scroll(function () {
	        //console.log(2);
	        var s_top = (0, _jquery2.default)(window).scrollTop();
	        var yes = (0, _jquery2.default)("#section-form").offset().top - 200;
	        if (s_top > yes) {
	            //console.log("Yes");
	            (0, _jquery2.default)('.section-form .center').animate({ width: "1030px" }, 700);
	            (0, _jquery2.default)('.section-form__form').animate({ opacity: "1" }, 2000);
	            (0, _jquery2.default)('.section-form__title').animate({ opacity: "1" }, 2000);
	        }
	    });
	
	    (0, _jquery2.default)(document).scroll(function () {
	        // console.log(3);
	        //console.log(1);
	        var s_top = (0, _jquery2.default)(window).scrollTop();
	        console.log(s_top);
	        var yes = 50;
	        //console.log($('.fixed-menu'));
	        if (s_top > yes) {
	            (0, _jquery2.default)('.fixed-menu').addClass('white');
	
	            console.log(4);
	        } else {
	            (0, _jquery2.default)('.fixed-menu').removeClass('white');
	        }
	    });
	
	    (0, _jquery2.default)(document).scroll(function () {
	        var s_top = (0, _jquery2.default)(window).scrollTop();
	        var yes = (0, _jquery2.default)("#section-inside").offset().top - 200;
	        var no = (0, _jquery2.default)("#section-inside").offset().top + 200;
	        if (s_top > yes && s_top < no) {
	            (0, _jquery2.default)('.feature__title').addClass('animate');
	            // console.log('animate');
	        } else {
	            (0, _jquery2.default)('.feature__title').removeClass('animate');
	            // console.log('no animate');
	        }
	    });
	});

/***/ }
])
//# sourceMappingURL=0.61184b7a468bd974282c.hot-update.js.map