!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,s,i,f;for(var a in y)if(y.hasOwnProperty(a)){if(e=[],t=y[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],f=i.split("."),1===f.length?C[f[0]]=o:(!C[f[0]]||C[f[0]]instanceof Boolean||(C[f[0]]=new Boolean(C[f[0]])),C[f[0]][f[1]]=o),w.push((o?"":"no-")+f.join("-"))}}function s(e,t){return!!~(""+e).indexOf(t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function f(){var e=t.body;return e||(e=i(b?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var s,a,l,u,d="modernizr",p=i("div"),c=f();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:d+(r+1),p.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+d,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),a=n(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=u,_.offsetHeight):p.parentNode.removeChild(p),!!a}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+l(t[o])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,f){function a(){p&&(delete T.style,delete T.modElem)}if(f=!r(f,"undefined")&&f,!r(o,"undefined")){var l=u(e,o);if(!r(l,"undefined"))return l}for(var p,c,m,h,v,y=["modernizr","tspan"];!T.style;)p=!0,T.modElem=i(y.shift()),T.style=T.modElem.style;for(m=e.length,c=0;m>c;c++)if(h=e[c],v=T.style[h],s(h,"-")&&(h=d(h)),T.style[h]!==n){if(f||r(o,"undefined"))return a(),"pfx"!=t||h;try{T.style[h]=o}catch(e){}if(T.style[h]!=v)return a(),"pfx"!=t||h}return a(),!1}function c(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var s in e)if(e[s]in t)return n===!1?e[s]:(o=t[e[s]],r(o,"function")?c(o,n||t):o);return!1}function h(e,t,n,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),f=(e+" "+x.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?p(f,t,o,s):(f=(e+" "+z.join(i+" ")+i).split(" "),m(f,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},C=function(){};C.prototype=g,C=new C;var w=[],S="Moz O ms Webkit",x=g._config.usePrefixes?S.split(" "):[];g._cssomPrefixes=x;var _=t.documentElement,b="svg"===_.nodeName.toLowerCase(),P={elem:i("modernizr")};C._q.push(function(){delete P.elem});var T={style:P.elem.style};C._q.unshift(function(){delete T.style});var z=g._config.usePrefixes?S.toLowerCase().split(" "):[];g._domPrefixes=z,g.testAllProps=h,g.testAllProps=v,C.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)});var k=g.testStyles=a,A="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;C.addTest("supports",A||E),C.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=C._config.usePrefixes;if(e&&(!t||"webkitPerspective"in _.style)){var n,r="#modernizr{width:0;height:0}";C.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",k(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),C.addTest("csstransitions",v("transition","all",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var q=0;q<C._q.length;q++)C._q[q]();e.Modernizr=C}(window,document);