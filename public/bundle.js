!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){"#presentation"===location.hash&&(d.style.display="none",f.style.display="none",window.setTimeout(function(){e.classList.add("button_visible"),e.classList.remove("button_hidden")},2e3))}function a(){"#test1"===location.hash?(d.style.display="block",f.style.display="block",f.style.width="33.3%"):"#test2"===location.hash?(d.style.display="block",f.style.display="block",f.style.width="66.6%"):"#test3"===location.hash?(d.style.display="block",f.style.display="block",f.style.width="100%"):"#test-results"===location.hash&&(d.style.display="none",f.style.display="none")}function r(e){console.log(e);var n=new XMLHttpRequest;n.open("POST","/sendresult"),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(e))}var l=t(1),c=(o(l),t(2)),s=(o(c),t(3)),u=(o(s),[]),d=document.getElementById("progress"),f=document.getElementById("progress__bar"),v=(document.getElementsByClassName("background")[0],document.getElementsByClassName("screen__filter")[0],document.getElementById("start-button")),p=document.getElementById("end-button");initialize("#fullpage",{anchors:["start","presentation","test1","test2","test3"]});var h=document.getElementById("start-button");i(h),"onhashchange"in window?window.onhashchange=function(){i(h),a()}:window.onload=function(){i(h),a()},v.addEventListener("click",function(){d.style.display="block",f.style.display="block",window.location.href="#test1",fullpage.moveSectionDown()});for(var m=document.querySelectorAll(".test-screen .list-item"),g=0;g<m.length;g++)m[g].onclick=function(){var e=u.indexOf(parseInt(this.id));-1!==e?u.splice(e,1):u.push(parseInt(this.id)),u.length>=3?p.classList.remove("button_disabled"):p.classList.add("button_disabled"),this.classList.toggle("list-item_selected")};p.addEventListener("click",function(){p.classList.contains("button_disabled")||(r(u),window.location.href="#test-results",fullpage.moveSectionDown(),fullpage.destroy("all"))})},function(e,n){},function(e,n){},function(e,n,t){"use strict";function o(e){h(Ke,nn),Xe(),We.css3&&(We.css3=Ne()),null!==Ke?(c(Ke,{height:"100%",position:"relative"}),m(Ke,Qe),m(u("html"),tn)):qe("error","Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');"),O(!0),He(),Ie(),Pe();var n=d(We.sectionSelector);for(i=0;i<n.length;++i)m(n[i],ln);var t=d(We.slideSelector);for(i=0;i<t.length;++i)m(t[i],pn);We.navigation&&U();for(var o=d(cn),i=0;i<o.length;i++){var a=i,r=o[i],l=d(hn,r),f=l.length;if(a||null!==u(sn)||m(r,an),void 0!==We.anchors[a]&&(r.setAttribute("data-anchor",We.anchors[a]),p(r,an)&&me(We.anchors[a],a)),f>0){var v=100*f,g=100/f,w=r.innerHTML,y='<div class="'+gn+'"><div class="'+yn+'">'+w+"</div></div>";r.innerHTML=y,l=d(hn,r),s(u(bn,r),"width",v+"%"),We.controlArrows&&f>1&&F(r),We.slidesNavigation&&Ee(r,f);for(var b=0;b<l.length;b++){s(l[b],"width",g+"%")}var S=u(mn,r);null!==typeof S?m(l[0],an):_e(S)}}e()}function i(){for(var e=d(En),n=0;n<e.length;n++)T(e[n],"click onclick touchstart",le);I(We.autoScrolling,"internal");var t=u(sn),o=u(mn,t),i=f(u(sn));if(o&&(0!==i||0===i&&0!==f(o))&&_e(o),We.navigation){s($e,"margin-top","-"+$e.offsetHeight/2+"px");m(u("a",d("li",$e)[f(u(sn))]),an)}$();var a=window.location.hash.replace("#","").split("/"),r=a[0];if(r.length){var l=u('[data-anchor="'+r+'"]');if(!We.animateAnchor&&l.length){if(We.autoScrolling)De(l.offsetTop);else{De(0),Be(r);var c=ie(l.offsetTop);E(c.element,c.options,0)}me(r,null),L(We.afterLoad)&&We.afterLoad.call(l,r,f(l)+1),h(t,an),m(l,an)}}Be(),ze(document,re,"DOMContentLoaded","DOMContentLoaded","DOMContentLoaded")}function a(e,n){"object"!==(void 0===n?"undefined":Ge(n))&&(n={});for(var t in n)e.hasOwnProperty(t)&&(e[t]=n[t]);return e}function r(e){return document.getElementById(e)}function l(e){return document.getElementsByTagName(e)[0]}function c(e,n){var t;for(t in n)n.hasOwnProperty(t)&&null!==t&&(e.style[t]=n[t]);return e}function s(e,n,t){e.style[n]=t}function u(e,n){return n=n||document,n.querySelector(e)}function d(e,n){return n=n||document,n.querySelectorAll(e)}function f(e){for(var n=0;e=e.previousSibling;)3==e.nodeType&&/^\s*$/.test(e.data)||n++;return n}function v(e,n){return void 0!==n?e.style.display=n?"block":"none":"block"==e.style.display?e.style.display="none":e.style.display="block",e}function p(e,n){return!!e.className.match(new RegExp("(\\s|^)"+n+"(\\s|$)"))}function h(e,n){if(e&&p(e,n)){var t=new RegExp("(\\s|^)"+n+"(\\s|$)");e.className=e.className.replace(t,"")}}function m(e,n){e&&!p(e,n)&&(e.className+=" "+n)}function g(e,n){return e&&(n(e)?e:g(e.parentNode,n))}function w(){return"innerWidth"in window?window.innerWidth:document.documentElement.offsetWidth}function y(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}function b(e){if(null===e||"object"!==(void 0===e?"undefined":Ge(e)))return e;var n=e.constructor();for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function S(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function L(e){var n={};return e&&"[object Function]"===n.toString.call(e)}function T(e,n,t){for(var o=n.split(" "),i=0,a=o.length;i<a;i++)document.addEventListener?e.addEventListener(o[i],t,!1):e.attachEvent(o[i],t,!1)}function E(e,n,t,o){var i=A(e),a=n-i,r=0;Ve=!0;!function l(){if(Ve){var c=n;r+=20,c=Math.easeInOutCubic(r,i,a,t),C(e,c),r<t?setTimeout(l,20):void 0!==o&&o()}else r<t&&o()}()}function k(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function x(e,n){for(var t=[];e;e=e.nextSibling)1==e.nodeType&&e!=n&&t.push(e);return t}function M(e){return x(e.parentNode.firstChild,e)}function B(e){for(var n=e.nextSibling;n&&1!=n.nodeType;)n=n.nextSibling;return n}function N(e){for(var n=e.previousSibling;n&&1!=n.nodeType;)n=n.previousSibling;return n}function A(e){return e.self!=window&&p(e,gn)?e.scrollLeft:!We.autoScrolling||We.scrollBar?k():e.offsetTop}function C(e,n){!We.autoScrolling||We.scrollBar||e.self!=window&&p(e,gn)?e.self!=window&&p(e,gn)?e.scrollLeft=n:e.scrollTo(0,n):e.style.top=n+"px"}function I(e,n){je("autoScrolling",e,n);var t=u(sn);if(We.autoScrolling&&!We.scrollBar)c(document.body,{overflow:"hidden",height:"100%"}),c(l("html"),{overflow:"hidden",height:"100%"}),P(We.recordHistory,"internal"),c(Ke,{"-ms-touch-action":"none","touch-action":"none"}),t&&De(t.offsetTop);else{c(document.body,{overflow:"visible",height:"100%"}),c(l("html"),{overflow:"visible",height:"100%"}),P(!1,"internal"),c(Ke,{"-ms-touch-action":"","touch-action":""}),De(0);var o=ie(t.offsetTop);o.element.scrollTo(0,o.options)}}function P(e,n){je("recordHistory",e,n)}function z(e,n){je("scrollingSpeed",e,n)}function H(e,n){je("fitToSection",e,n)}function O(e){e?Ce():Ae()}function R(e){We.keyboardScrolling=e}function _(){var e=N(u(sn));e&&te(e,null,!0)}function D(){var e=B(u(sn));e&&te(e,null,!1)}function Y(e,n){z(0,"internal"),j(e,n),z(Je.scrollingSpeed,"internal")}function j(e,n){var t=be(e);void 0!==n?Le(e,n):t&&te(t)}function X(){ne("next")}function q(){ne("prev")}function W(e){if(!p(Ke,nn)){Hn=!0,zn=y();for(var n=d(cn),t=0;t<n.length;++t){var o=n[t],i=u(wn,o),a=d(hn,o);i&&a.length>1&&ue(i,u(mn,i))}var r=u(sn);f(r)&&De(r.offsetTop),Hn=!1,L(We.afterResize)&&e&&We.afterResize.call(Ke),L(We.afterReBuild)&&!e&&We.afterReBuild.call(Ke)}}function F(e){var n=document.createElement("div");n.className=Mn;var t=document.createElement("div");t.className=Nn;var o=u(wn,e);We.controlArrowColor,o.parentNode.appendChild(n),o.parentNode.appendChild(t),We.loopHorizontal||(u(Bn,e).style.display="none")}function U(){var e=document.createElement("div");e.setAttribute("id",un);var n=document.createElement("ul");e.appendChild(n),document.body.appendChild(e),$e=u(dn),s($e,"color",We.navigationColor),m($e,We.navigationPosition),We.showActiveTooltip&&m($e,vn);for(var t="",o=0;o<d(cn).length;o++){var i="";We.anchors.length&&(i=We.anchors[o]),t=t+'<li><a href="#'+i+'"><span></span></a>';var a=We.navigationTooltips[o];void 0!==(void 0===a?"undefined":Ge(a))&&""!==a&&(t+='<div class="'+fn+" "+We.navigationPosition+'">'+a+"</div>"),t+="</li>"}var r=u("ul",$e);r.innerHTML=r.innerHTML+t;for(var l=d(Tn),c=0;c<l.length;c++)T(l[c],"click onclick touchstart",function(e){e=window.event||e||e.originalEvent,S(e);var n=f(this.parentNode);te(d(cn)[n],null,!1)})}function $(){var e=u(sn);L(We.afterLoad)&&We.afterLoad.call(e,e.getAttribute("data-anchor"),f(e)+1),L(We.afterRender)&&We.afterRender.call(Ke)}function V(){var e;if(!We.autoScrolling||We.scrollBar){for(var n=k(),t=0,o=Math.abs(n-d(cn)[0].offsetTop),i=d(cn),a=0;a<i.length;++a){var r=i[a],l=Math.abs(n-r.offsetTop);l<o&&(t=a,o=l)}e=d(cn)[t]}if(!We.autoScrolling||We.scrollBar){if(!p(e,an)){Yn=!0;var c=u(sn),s=f(c)+1,v=ge(e),g=e.getAttribute("data-anchor"),w=f(e)+1,y=u(mn,e);if(y)var b=y.getAttribute("data-anchor"),S=f(y);On&&(h(c,an),m(e,an),L(We.onLeave)&&We.onLeave.call(c,s,w,v),L(We.afterLoad)&&We.afterLoad.call(e,g,w),me(g,0),We.anchors.length&&(Fe=g,ke(S,b,g,w))),clearTimeout(_n),_n=setTimeout(function(){Yn=!1},100)}We.fitToSection&&(clearTimeout(Dn),Dn=setTimeout(function(){(On&&!We.autoScrolling||We.scrollBar)&&(f(u(sn))==f(e)&&(Hn=!0),te(e),Hn=!1)},We.fitToSectionDelay))}}function J(e){"down"==e?D():_()}function K(e){var n=window.event||e||e.originalEvent;if(G(n)){We.autoScrolling&&S(e);var t=u(sn),o=d(wn,t);if(On&&!Cn){var i=Re(n);qn=i.y,Wn=i.x,o&&Math.abs(Xn-Wn)>Math.abs(jn-qn)?Math.abs(Xn-Wn)>w()/100*We.touchSensitivity&&(Xn>Wn?X():q()):We.autoScrolling&&Math.abs(jn-qn)>y()/100*We.touchSensitivity&&(jn>qn?J("down"):qn>jn&&J("up"))}}}function G(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Q(e){var n=window.event||e||e.originalEvent;if(We.fitToSection&&(Ve=!1),G(n)){var t=Re(n);jn=t.y,Xn=t.x}}function Z(e,n){for(var t=0,o=e.slice(Math.max(e.length-n,1)),i=0;i<o.length;i++)t+=o[i];return Math.ceil(t/n)}function ee(e){var n=(new Date).getTime();if(We.autoScrolling){e=window.event||e||e.originalEvent;var t=e.wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,t));Rn.length>149&&Rn.shift(),Rn.push(Math.abs(t)),We.scrollBar&&S(e);var i=n-Fn;if(Fn=n,i>200&&(Rn=[]),On){Z(Rn,10)>=Z(Rn,70)&&J(o<0?"down":"up")}return!1}We.fitToSection&&(Ve=!1)}function ne(e){var n=u(sn),t=u(wn,n);if(t&&!Cn){var o=u(mn,t),i=null;if(!(i="prev"===e?N(o):B(o))){if(!We.loopHorizontal)return;var a=M(o);i="prev"===e?a[a.length-1]:a[0]}Cn=!0,ue(t,i)}}function te(e,n,t){if(null!==e){var o={element:e,callback:n,isMovementUp:t,dtop:e.offsetTop,yMovement:ge(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:f(e),activeSlide:u(mn,e),activeSection:u(sn),leavingSection:f(u(sn))+1,localIsResizing:Hn};if(!(f(o.activeSection)==o.sectionIndex&&!Hn||We.scrollBar&&k()===o.dtop)){if(o.activeSlide)var i=o.activeSlide.getAttribute("data-anchor"),a=f(o.activeSlide);for(var r=d(cn),l=0;l<r.length;l++)h(r[l],an);m(e,an),On=!1,ke(a,i,o.anchorLink,o.sectionIndex),L(We.onLeave)&&!o.localIsResizing&&We.onLeave.call(o.activeSection,o.leavingSection,o.sectionIndex+1,o.yMovement),oe(o),Fe=o.anchorLink,me(o.anchorLink,o.sectionIndex)}}}function oe(e){if(We.css3&&We.autoScrolling&&!We.scrollBar){ye("translate3d(0px, -"+e.dtop+"px, 0px)",!0),We.scrollingSpeed?setTimeout(function(){ae(e)},We.scrollingSpeed):ae(e)}else{var n=ie(e.dtop);E(n.element,n.options,We.scrollingSpeed,function(){ae(e)})}}function ie(e){var n={};return We.autoScrolling&&!We.scrollBar?(n.options=-e,n.element=u("."+Qe)):(n.options=e,n.element=window),n}function ae(e){L(We.afterLoad)&&!e.localIsResizing&&We.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),On=!0,L(e.callback)&&e.callback.call(this)}function re(){var e=window.location.hash.replace("#","").split("/"),n=e[0],t=e[1];n&&Le(n,t)}function le(e){var n=this;n.self==window&&(n=e.target||e.srcElement),p(n,kn)?q():X()}function ce(){if(!Yn){var e=window.location.hash.replace("#","").split("/"),n=e[0],t=e[1];if(n.length){var o=void 0===Fe,i=void 0===Fe&&void 0===t&&!Cn;(n&&n!==Fe&&!o||i||!Cn&&Ue!=t)&&Le(n,t)}}}function se(e,n){switch(n){case 38:case 33:_();break;case 32:if(e){_();break}case 40:case 34:D();break;case 36:j(1);break;case 35:j(d(cn).length);break;case 37:q();break;case 39:X();break;default:return}}function ue(e,n){var t=f(n),o=g(e,function(e){return p(e,ln)}),i=f(o),a=o.getAttribute("data-anchor"),r=u(Ln,o),l=Me(n),c=Hn;if(We.onSlideLeave){var s=u(mn,o),w=f(s),y=we(w,t);c||"none"===y||L(We.onSlideLeave)&&We.onSlideLeave.call(s,a,i+1,w,y,t)}for(var b=d(hn,o),S=0;S<b.length;S++)h(b[S],an);m(n,an),!We.loopHorizontal&&We.controlArrows&&(v(u(Bn,o),0!==t),v(u(An,o),!n.is(":last-child"))),p(o,an)&&ke(t,l,a,i);var T=function(){c||L(We.afterSlideLoad)&&We.afterSlideLoad.call(n,a,i+1,l,t),Cn=!1};if(We.css3){var k="translate3d(-"+Math.round(n.offsetLeft)+"px, 0px, 0px)",x=u(bn,e);fe(x,We.scrollingSpeed>0),Ye(x,k),setTimeout(function(){T()},We.scrollingSpeed,We.easing)}else E(e,Math.round(n.offsetLeft),We.scrollingSpeed,function(){T()});if(We.slidesNavigation){h(u(rn,r),an);m(u("a",d("li",r)[t]),an)}}function de(){if(In){if("text"!==document.activeElement.getAttribute("type")){var e=y();Math.abs(e-Vn)>20*Math.max(Vn,e)/100&&(W(!0),Vn=e)}}else clearTimeout($n),$n=setTimeout(function(){W(!0)},350)}function fe(e){var n="all "+We.scrollingSpeed+"ms "+We.easingcss3;return h(e,en),c(e,{"-webkit-transition":n,transition:n}),e}function ve(e){return m(e,en)}function pe(e,n){if(We.navigation)if(h(u(rn,$e),an),e)m(u('a[href="#'+e+'"]',$e),an);else{var t=d("li",$e)[n];m(u("a",t),an)}}function he(e){if(We.menu){var n=u(We.menu);n&&(h(u(rn,n),an),m(u('[data-menuanchor="'+e+'"]',n),an))}}function me(e,n){he(e),pe(e,n)}function ge(e){var n=f(u(sn)),t=f(e);return n==t?"none":n>t?"up":"down"}function we(e,n){return e==n?"none":e>n?"left":"right"}function ye(e,n){n?fe(Ke):ve(Ke),Ye(Ke,e),setTimeout(function(){h(Ke,en)},10)}function be(e){var n=u(cn+'[data-anchor="'+e+'"]');return n||(n=d(cn)[e-1]),n}function Se(e,n){var t=u(wn,n),o=u(hn+'[data-anchor="'+e+'"]',t);return t&&!o&&(o=d(hn,t)[e]),o}function Le(e,n){var t=be(decodeURI(e));void 0===n&&(n=0),e===Fe||p(t,an)?Te(t,n):te(t,function(){Te(t,n)})}function Te(e,n){if(void 0!==n){var t=u(wn,e),o=Se(n,e);o&&ue(t,o)}}function Ee(e,n){var t=document.createElement("div");t.className=Sn;var o=document.createElement("ul");t.appendChild(o),e.appendChild(t);var i=u(Ln,e),a=u("ul",i);m(i,We.slidesNavPosition);for(var r="",l=0;l<n;l++)r+='<li><a href="#"><span></span></a></li>';a.innerHTML=a.innerHTML+r,s(i,"margin-left","-"+i.offsetWidth/2+"px"),m(u("a",d("li",i)[0]),an)}function ke(e,n,t,o){var i="";We.anchors.length&&(e?(void 0!==t&&(i=t),void 0===n&&(n=e),Ue=n,xe(i+"/"+n)):void 0!==e?(Ue=n,xe(t)):xe(t)),Be()}function xe(e){if(We.recordHistory)location.hash=e;else if(In||Pn)history.replaceState(void 0,void 0,"#"+e);else{var n=window.location.href.split("#")[0];window.location.replace(n+"#"+e)}}function Me(e){var n=e.getAttribute("data-anchor"),t=f(e);return n||(n=t),n}function Be(e){var n=u(sn),t=u(mn,n),o=n.getAttribute("data-anchor"),i=f(n),e=String(i);if(We.anchors.length&&(e=o),t){e=e+"-"+Me(t)}e=e.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+on+"-[^\\s]+\\b","g");document.body.className=document.body.className.replace(a,""),m(document.body,on+"-"+e)}function Ne(){var e,n=document.createElement("p"),t={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(n,null);for(var o in t)void 0!==n.style[o]&&(n.style[o]="translate3d(1px,1px,1px)",e=window.getComputedStyle(n).getPropertyValue(t[o]));return document.body.removeChild(n),void 0!==e&&e.length>0&&"none"!==e}function Ae(){var e=u(Ze);document.addEventListener?(e.removeEventListener("mousewheel",ee,!1),e.removeEventListener("wheel",ee,!1)):e.detachEvent("onmousewheel",ee)}function Ce(){ze(u(Ze),ee,"mousewheel","onmousewheel","wheel")}function Ie(){ze(window,de,"resize","onresize")}function Pe(){ze(window,V,"scroll","onscroll","onscroll")}function ze(e,n,t,o,i){e.addEventListener?(e.addEventListener(t,n,!1),void 0!==i&&e.addEventListener(i,n,!1)):e.attachEvent(o,n)}function He(){if(In||Pn){var e=u(Ze);if(document.addEventListener){var n=Oe();e.removeEventListener("touchstart",Q),e.removeEventListener(n.down,Q),e.removeEventListener("touchmove",K),e.removeEventListener(n.move,K),T(e,"touchstart "+n.down,Q),T(e,"touchmove "+n.move,K)}}}function Oe(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Re(e){var n=[];return n.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Pn&&G(e)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function _e(e,n){z(0,"internal"),void 0!==n&&(Hn=!0),ue(g(e,function(e){return p(e,gn)}),e),void 0!==n&&(Hn=!1),z(Je.scrollingSpeed,"internal")}function De(e){if(We.scrollBar){var n=ie(e);C(n.element,n.options,0)}else if(We.css3){var t="translate3d(0px, -"+e+"px, 0px)";ye(t,!1)}else s(Ke,"top",-e+"px")}function Ye(e,n){c(e,{"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n})}function je(e,n,t){We[e]=n,"internal"!==t&&(Je[e]=n)}function Xe(){for(var e=0;e<We.anchors.length;e++){var n=We.anchors[e];(r("#"+n)||d('[name="'+n+'"]').length)&&qe("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")}}function qe(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var We,Fe,Ue,$e,Ve,Je,Ke,Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe="fullpage-wrapper",Ze="."+Qe,en="fp-notransition",nn="fp-destroyed",tn="fp-enabled",on="fp-viewing",an="activeSection",rn="."+an,ln="fp-section",cn="."+ln,sn=cn+rn,un="fp-nav",dn="#"+un,fn="fp-tooltip",vn="fp-show-active",pn="fp-slide",hn="."+pn,mn=hn+rn,gn="fp-slides",wn="."+gn,yn="fp-slidesContainer",bn="."+yn,Sn="fp-slidesNav",Ln="."+Sn,Tn=Ln+" a",En=".fp-controlArrow",kn="fp-prev",xn="."+kn,Mn="fp-controlArrow "+kn,Bn=En+xn,Nn="fp-controlArrow fp-next",An=En+".fp-next",Cn=!1,In=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Pn="ontouchstart"in window||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,zn=y(),Hn=!1,On=!0,Rn=[];Math.easeInOutCubic=function(e,n,t,o){return(e/=o/2)<1?t/2*e*e*e+n:t/2*((e-=2)*e*e+2)+n},window.initialize=function(e,n){We=a({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easingcss3:"ease",loopHorizontal:!0,touchSensitivity:5,keyboardScrolling:!0,recordHistory:!0,controlArrows:!0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},n),Je=b(We),Ke=u(e),o(i)};var _n,Dn,Yn=!1,jn=0,Xn=0,qn=0,Wn=0,Fn=(new Date).getTime();document.addEventListener?window.addEventListener("hashchange",ce,!1):window.attachEvent("onhashchange",ce);var Un;document.onkeydown=function(e){clearTimeout(Un);var n=document.activeElement,t=n.tagName;if("SELECT"!==t&&"INPUT"!==t&&We.keyboardScrolling&&We.autoScrolling){e=window.event||e||e.originalEvent;for(var o=e.charCode||e.keyCode,i=[40,38,32,33,34],a=0;a<i.length;a++)i[a]==o&&S(e);var r=e.shiftKey;Un=setTimeout(function(){se(r,o)},150)}},null!==u(Tn)&&T(u(Tn),"click onclick touchstart",function(e){S(e);var n=g(this,function(e){return p(e1,ln)}),t=u(wn,n),o=g(this,function(e){return"li"===e.tagName}),i=f(o);ue(t,d(hn,t)[i])});var $n,Vn=zn;initialize}]);