!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){"#presentation"!==location.hash&&m||(f.style.display="none",v.style.display="none",window.setTimeout(function(){e.classList.add("button_visible"),e.classList.remove("button_hidden")},2e3))}function a(){"#test1"===location.hash&&m?(f.style.display="block",v.style.display="block",v.style.width="33.3%"):"#test2"===location.hash&&m?(f.style.display="block",v.style.display="block",v.style.width="66.6%"):"#test3"===location.hash&&m?(f.style.display="block",v.style.display="block",v.style.width="100%"):"#test-results"===location.hash&&(f.style.display="none",v.style.display="none")}function r(){document.getElementsByClassName("ya-share2")[0];document.getElementById("results-header").innerHTML='"К северу через северо-запад", Альфред Хичкок',document.getElementById("results-descr").innerHTML="Приключенческо-шпионский триллер 1959 года, по стилистике предвосхищающий фильмы «бондианы»",document.getElementById("results-img").src="assets/003-north-by-northwest-theredlist.jpg"}function l(e){console.log(e);var t=new XMLHttpRequest;t.open("POST","/sendresult"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}var s=n(1),c=(o(s),n(2)),d=(o(c),n(3)),u=(o(d),[]),f=document.getElementById("progress"),v=document.getElementById("progress__bar"),h=(document.getElementsByClassName("background")[0],document.getElementsByClassName("screen__filter")[0],document.getElementById("start-button")),p=document.getElementById("end-button"),m=!0;window.innerWidth<=1e3&&(m=!1),window.onload=function(){m?(window.setTimeout(function(){document.getElementsByClassName("h1_hello")[0].style.opacity="1"},2e3),window.setTimeout(function(){var e=document.getElementById("test-results");m&&(e.style.backgroundImage="url('assets/giphy.gif')",e.style.backgroundSize="cover")},7e3),initialize("#fullpage",{anchors:["start","presentation","test1","test2","test3"]})):document.getElementsByClassName("h1_hello")[0].style.opacity="1"};var h=document.getElementById("start-button");i(h),"onhashchange"in window?window.onhashchange=function(){i(h),a()}:window.onload=function(){i(h),a(),document.getElementsByClassName("h1_hello")[0].style.opacity="1"},h.addEventListener("click",function(){m&&(f.style.display="block",v.style.display="block"),document.getElementById("test1").style.display="flex",document.getElementById("test2").style.display="flex",document.getElementById("test3").style.display="flex",window.location.href="#test1"});for(var g=document.querySelectorAll(".test-screen .list-item"),y=0;y<g.length;y++)g[y].onclick=function(){var e=u.indexOf(parseInt(this.id));-1!==e?u.splice(e,1):u.push(parseInt(this.id)),u.length>=0?p.classList.remove("button_disabled"):p.classList.add("button_disabled"),this.classList.toggle("list-item_selected")};p.addEventListener("click",function(){p.classList.contains("button_disabled")?alert("Выбери не менее 3 вариантов"):(l(u),r(),document.getElementById("test-results").style.display="block",window.location.href="#test-results",document.getElementById("test-results").style.visibility="visible")});var w=document.getElementById("agreement-checkbox"),b=document.getElementById("form-subscribe__submit");w.checked?b.disabled=!1:b.disabled=!0,w.addEventListener("click",function(){w.checked?b.disabled=!1:b.disabled=!0}),function(e,t,n,o){var i=e.createElement("script");i.src="http://vk.com/js/api/share.js?90",i.onload=i.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||this.executed||(this.executed=!0,setTimeout(function(){e.getElementById("vk-share").innerHTML=VK.Share.button(n,o),VK.Share._base_domain="https:"+VK.Share._base_domain},0))},e.documentElement.appendChild(i)}(document,0,{url:document.URL,title:'Я прошел тест Школы перпективных исследований. Мне рекомендован фильм: "К северу через северо-запад", Альфред Хичкок',description:"Приключенческо-шпионский триллер 1959 года, по стилистике предвосхищающий фильмы «бондианы»",image:"assets/003-north-by-northwest-theredlist.jpg",noparse:!0},{type:"round",text:"Поделиться"})},function(e,t){},function(e,t){},function(e,t,n){"use strict";function o(e){p(Je,tt),Xe(),qe.css3&&(qe.css3=Ie()),null!==Je?(s(Je,{height:"100%",position:"relative"}),m(Je,Qe),m(d("html"),nt)):We("error","Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');"),z(!0),_e(),Ae(),He();var t=u(qe.sectionSelector);for(i=0;i<t.length;++i)m(t[i],rt);var n=u(qe.slideSelector);for(i=0;i<n.length;++i)m(n[i],vt);qe.navigation&&K();for(var o=u(lt),i=0;i<o.length;i++){var a=i,r=o[i],l=u(ht,r),f=l.length;if(a||null!==d(st)||m(r,it),void 0!==qe.anchors[a]&&(r.setAttribute("data-anchor",qe.anchors[a]),h(r,it)&&me(qe.anchors[a],a)),f>0){var v=100*f,g=100/f,y=r.innerHTML,w='<div class="'+mt+'"><div class="'+yt+'">'+y+"</div></div>";r.innerHTML=w,l=u(ht,r),c(d(wt,r),"width",v+"%"),qe.controlArrows&&f>1&&V(r),qe.slidesNavigation&&Te(r,f);for(var b=0;b<l.length;b++){c(l[b],"width",g+"%")}var S=d(pt,r);null!==typeof S?m(l[0],it):Oe(S)}}e()}function i(){for(var e=u(Lt),t=0;t<e.length;t++)L(e[t],"click onclick touchstart",le);A(qe.autoScrolling,"internal");var n=d(st),o=d(pt,n),i=f(d(st));if(o&&(0!==i||0===i&&0!==f(o))&&Oe(o),qe.navigation){c(Ue,"margin-top","-"+Ue.offsetHeight/2+"px");m(d("a",u("li",Ue)[f(d(st))]),it)}U();var a=window.location.hash.replace("#","").split("/"),r=a[0];if(r.length){var l=d('[data-anchor="'+r+'"]');if(!qe.animateAnchor&&l.length){if(qe.autoScrolling)je(l.offsetTop);else{je(0),Me(r);var s=ie(l.offsetTop);T(s.element,s.options,0)}me(r,null),E(qe.afterLoad)&&qe.afterLoad.call(l,r,f(l)+1),p(n,it),m(l,it)}}Me(),Pe(document,re,"DOMContentLoaded","DOMContentLoaded","DOMContentLoaded")}function a(e,t){"object"!==(void 0===t?"undefined":Ge(t))&&(t={});for(var n in t)e.hasOwnProperty(n)&&(e[n]=t[n]);return e}function r(e){return document.getElementById(e)}function l(e){return document.getElementsByTagName(e)[0]}function s(e,t){var n;for(n in t)t.hasOwnProperty(n)&&null!==n&&(e.style[n]=t[n]);return e}function c(e,t,n){e.style[t]=n}function d(e,t){return t=t||document,t.querySelector(e)}function u(e,t){return t=t||document,t.querySelectorAll(e)}function f(e){for(var t=0;e=e.previousSibling;)3==e.nodeType&&/^\s*$/.test(e.data)||t++;return t}function v(e,t){return void 0!==t?e.style.display=t?"block":"none":"block"==e.style.display?e.style.display="none":e.style.display="block",e}function h(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function p(e,t){if(e&&h(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n,"")}}function m(e,t){e&&!h(e,t)&&(e.className+=" "+t)}function g(e,t){return e&&(t(e)?e:g(e.parentNode,t))}function y(){return"innerWidth"in window?window.innerWidth:document.documentElement.offsetWidth}function w(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}function b(e){if(null===e||"object"!==(void 0===e?"undefined":Ge(e)))return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function S(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function E(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function L(e,t,n){for(var o=t.split(" "),i=0,a=o.length;i<a;i++)document.addEventListener?e.addEventListener(o[i],n,!1):e.attachEvent(o[i],n,!1)}function T(e,t,n,o){var i=N(e),a=t-i,r=0;Fe=!0;!function l(){if(Fe){var s=t;r+=20,s=Math.easeInOutCubic(r,i,a,n),C(e,s),r<n?setTimeout(l,20):void 0!==o&&o()}else r<n&&o()}()}function k(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function x(e,t){for(var n=[];e;e=e.nextSibling)1==e.nodeType&&e!=t&&n.push(e);return n}function B(e){return x(e.parentNode.firstChild,e)}function M(e){for(var t=e.nextSibling;t&&1!=t.nodeType;)t=t.nextSibling;return t}function I(e){for(var t=e.previousSibling;t&&1!=t.nodeType;)t=t.previousSibling;return t}function N(e){return e.self!=window&&h(e,mt)?e.scrollLeft:!qe.autoScrolling||qe.scrollBar?k():e.offsetTop}function C(e,t){!qe.autoScrolling||qe.scrollBar||e.self!=window&&h(e,mt)?e.self!=window&&h(e,mt)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function A(e,t){Ye("autoScrolling",e,t);var n=d(st);if(qe.autoScrolling&&!qe.scrollBar)s(document.body,{overflow:"hidden",height:"100%"}),s(l("html"),{overflow:"hidden",height:"100%"}),H(qe.recordHistory,"internal"),s(Je,{"-ms-touch-action":"none","touch-action":"none"}),n&&je(n.offsetTop);else{s(document.body,{overflow:"visible",height:"100%"}),s(l("html"),{overflow:"visible",height:"100%"}),H(!1,"internal"),s(Je,{"-ms-touch-action":"","touch-action":""}),je(0);var o=ie(n.offsetTop);o.element.scrollTo(0,o.options)}}function H(e,t){Ye("recordHistory",e,t)}function P(e,t){Ye("scrollingSpeed",e,t)}function _(e,t){Ye("fitToSection",e,t)}function z(e){e?Ce():Ne()}function R(e){qe.keyboardScrolling=e}function O(){var e=I(d(st));e&&ne(e,null,!0)}function j(){var e=M(d(st));e&&ne(e,null,!1)}function D(e,t){P(0,"internal"),Y(e,t),P($e.scrollingSpeed,"internal")}function Y(e,t){var n=be(e);void 0!==t?Ee(e,t):n&&ne(n)}function X(){te("next")}function W(){te("prev")}function q(e){if(!h(Je,tt)){Pt=!0,Ht=w();for(var t=u(lt),n=0;n<t.length;++n){var o=t[n],i=d(gt,o),a=u(ht,o);i&&a.length>1&&de(i,d(pt,i))}var r=d(st);f(r)&&je(r.offsetTop),Pt=!1,E(qe.afterResize)&&e&&qe.afterResize.call(Je),E(qe.afterReBuild)&&!e&&qe.afterReBuild.call(Je)}}function V(e){var t=document.createElement("div");t.className=xt;var n=document.createElement("div");n.className=Mt;var o=d(gt,e);qe.controlArrowColor,o.parentNode.appendChild(t),o.parentNode.appendChild(n),qe.loopHorizontal||(d(Bt,e).style.display="none")}function K(){var e=document.createElement("div");e.setAttribute("id",ct);var t=document.createElement("ul");e.appendChild(t),document.body.appendChild(e),Ue=d(dt),c(Ue,"color",qe.navigationColor),m(Ue,qe.navigationPosition),qe.showActiveTooltip&&m(Ue,ft);for(var n="",o=0;o<u(lt).length;o++){var i="";qe.anchors.length&&(i=qe.anchors[o]),n=n+'<li><a href="#'+i+'"><span></span></a>';var a=qe.navigationTooltips[o];void 0!==(void 0===a?"undefined":Ge(a))&&""!==a&&(n+='<div class="'+ut+" "+qe.navigationPosition+'">'+a+"</div>"),n+="</li>"}var r=d("ul",Ue);r.innerHTML=r.innerHTML+n;for(var l=u(Et),s=0;s<l.length;s++)L(l[s],"click onclick touchstart",function(e){e=window.event||e||e.originalEvent,S(e);var t=f(this.parentNode);ne(u(lt)[t],null,!1)})}function U(){var e=d(st);E(qe.afterLoad)&&qe.afterLoad.call(e,e.getAttribute("data-anchor"),f(e)+1),E(qe.afterRender)&&qe.afterRender.call(Je)}function F(){var e;if(!qe.autoScrolling||qe.scrollBar){for(var t=k(),n=0,o=Math.abs(t-u(lt)[0].offsetTop),i=u(lt),a=0;a<i.length;++a){var r=i[a],l=Math.abs(t-r.offsetTop);l<o&&(n=a,o=l)}e=u(lt)[n]}if(!qe.autoScrolling||qe.scrollBar){if(!h(e,it)){jt=!0;var s=d(st),c=f(s)+1,v=ge(e),g=e.getAttribute("data-anchor"),y=f(e)+1,w=d(pt,e);if(w)var b=w.getAttribute("data-anchor"),S=f(w);_t&&(p(s,it),m(e,it),E(qe.onLeave)&&qe.onLeave.call(s,c,y,v),E(qe.afterLoad)&&qe.afterLoad.call(e,g,y),me(g,0),qe.anchors.length&&(Ve=g,ke(S,b,g,y))),clearTimeout(Rt),Rt=setTimeout(function(){jt=!1},100)}qe.fitToSection&&(clearTimeout(Ot),Ot=setTimeout(function(){(_t&&!qe.autoScrolling||qe.scrollBar)&&(f(d(st))==f(e)&&(Pt=!0),ne(e),Pt=!1)},qe.fitToSectionDelay))}}function $(e){"down"==e?j():O()}function J(e){var t=window.event||e||e.originalEvent;if(G(t)){qe.autoScrolling&&S(e);var n=d(st),o=u(gt,n);if(_t&&!Nt){var i=Re(t);Xt=i.y,Wt=i.x,o&&Math.abs(Yt-Wt)>Math.abs(Dt-Xt)?Math.abs(Yt-Wt)>y()/100*qe.touchSensitivity&&(Yt>Wt?X():W()):qe.autoScrolling&&Math.abs(Dt-Xt)>w()/100*qe.touchSensitivity&&(Dt>Xt?$("down"):Xt>Dt&&$("up"))}}}function G(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Q(e){var t=window.event||e||e.originalEvent;if(qe.fitToSection&&(Fe=!1),G(t)){var n=Re(t);Dt=n.y,Yt=n.x}}function Z(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),i=0;i<o.length;i++)n+=o[i];return Math.ceil(n/t)}function ee(e){var t=(new Date).getTime();if(qe.autoScrolling){e=window.event||e||e.originalEvent;var n=e.wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,n));zt.length>149&&zt.shift(),zt.push(Math.abs(n)),qe.scrollBar&&S(e);var i=t-qt;if(qt=t,i>200&&(zt=[]),_t){Z(zt,10)>=Z(zt,70)&&$(o<0?"down":"up")}return!1}qe.fitToSection&&(Fe=!1)}function te(e){var t=d(st),n=d(gt,t);if(n&&!Nt){var o=d(pt,n),i=null;if(!(i="prev"===e?I(o):M(o))){if(!qe.loopHorizontal)return;var a=B(o);i="prev"===e?a[a.length-1]:a[0]}Nt=!0,de(n,i)}}function ne(e,t,n){if(null!==e){var o={element:e,callback:t,isMovementUp:n,dtop:e.offsetTop,yMovement:ge(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:f(e),activeSlide:d(pt,e),activeSection:d(st),leavingSection:f(d(st))+1,localIsResizing:Pt};if(!(f(o.activeSection)==o.sectionIndex&&!Pt||qe.scrollBar&&k()===o.dtop)){if(o.activeSlide)var i=o.activeSlide.getAttribute("data-anchor"),a=f(o.activeSlide);for(var r=u(lt),l=0;l<r.length;l++)p(r[l],it);m(e,it),_t=!1,ke(a,i,o.anchorLink,o.sectionIndex),E(qe.onLeave)&&!o.localIsResizing&&qe.onLeave.call(o.activeSection,o.leavingSection,o.sectionIndex+1,o.yMovement),oe(o),Ve=o.anchorLink,me(o.anchorLink,o.sectionIndex)}}}function oe(e){if(qe.css3&&qe.autoScrolling&&!qe.scrollBar){we("translate3d(0px, -"+e.dtop+"px, 0px)",!0),qe.scrollingSpeed?setTimeout(function(){ae(e)},qe.scrollingSpeed):ae(e)}else{var t=ie(e.dtop);T(t.element,t.options,qe.scrollingSpeed,function(){ae(e)})}}function ie(e){var t={};return qe.autoScrolling&&!qe.scrollBar?(t.options=-e,t.element=d("."+Qe)):(t.options=e,t.element=window),t}function ae(e){E(qe.afterLoad)&&!e.localIsResizing&&qe.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),_t=!0,E(e.callback)&&e.callback.call(this)}function re(){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];t&&Ee(t,n)}function le(e){var t=this;t.self==window&&(t=e.target||e.srcElement),h(t,Tt)?W():X()}function se(){if(!jt){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];if(t.length){var o=void 0===Ve,i=void 0===Ve&&void 0===n&&!Nt;(t&&t!==Ve&&!o||i||!Nt&&Ke!=n)&&Ee(t,n)}}}function ce(e,t){switch(t){case 38:case 33:O();break;case 32:if(e){O();break}case 40:case 34:j();break;case 36:Y(1);break;case 35:Y(u(lt).length);break;case 37:W();break;case 39:X();break;default:return}}function de(e,t){var n=f(t),o=g(e,function(e){return h(e,rt)}),i=f(o),a=o.getAttribute("data-anchor"),r=d(St,o),l=Be(t),s=Pt;if(qe.onSlideLeave){var c=d(pt,o),y=f(c),w=ye(y,n);s||"none"===w||E(qe.onSlideLeave)&&qe.onSlideLeave.call(c,a,i+1,y,w,n)}for(var b=u(ht,o),S=0;S<b.length;S++)p(b[S],it);m(t,it),!qe.loopHorizontal&&qe.controlArrows&&(v(d(Bt,o),0!==n),v(d(It,o),!t.is(":last-child"))),h(o,it)&&ke(n,l,a,i);var L=function(){s||E(qe.afterSlideLoad)&&qe.afterSlideLoad.call(t,a,i+1,l,n),Nt=!1};if(qe.css3){var k="translate3d(-"+Math.round(t.offsetLeft)+"px, 0px, 0px)",x=d(wt,e);fe(x,qe.scrollingSpeed>0),De(x,k),setTimeout(function(){L()},qe.scrollingSpeed,qe.easing)}else T(e,Math.round(t.offsetLeft),qe.scrollingSpeed,function(){L()});if(qe.slidesNavigation){p(d(at,r),it);m(d("a",u("li",r)[n]),it)}}function ue(){if(Ct){if("text"!==document.activeElement.getAttribute("type")){var e=w();Math.abs(e-Ut)>20*Math.max(Ut,e)/100&&(q(!0),Ut=e)}}else clearTimeout(Kt),Kt=setTimeout(function(){q(!0)},350)}function fe(e){var t="all "+qe.scrollingSpeed+"ms "+qe.easingcss3;return p(e,et),s(e,{"-webkit-transition":t,transition:t}),e}function ve(e){return m(e,et)}function he(e,t){if(qe.navigation)if(p(d(at,Ue),it),e)m(d('a[href="#'+e+'"]',Ue),it);else{var n=u("li",Ue)[t];m(d("a",n),it)}}function pe(e){if(qe.menu){var t=d(qe.menu);t&&(p(d(at,t),it),m(d('[data-menuanchor="'+e+'"]',t),it))}}function me(e,t){pe(e),he(e,t)}function ge(e){var t=f(d(st)),n=f(e);return t==n?"none":t>n?"up":"down"}function ye(e,t){return e==t?"none":e>t?"left":"right"}function we(e,t){t?fe(Je):ve(Je),De(Je,e),setTimeout(function(){p(Je,et)},10)}function be(e){var t=d(lt+'[data-anchor="'+e+'"]');return t||(t=u(lt)[e-1]),t}function Se(e,t){var n=d(gt,t),o=d(ht+'[data-anchor="'+e+'"]',n);return n&&!o&&(o=u(ht,n)[e]),o}function Ee(e,t){var n=be(decodeURI(e));void 0===t&&(t=0),e===Ve||h(n,it)?Le(n,t):ne(n,function(){Le(n,t)})}function Le(e,t){if(void 0!==t){var n=d(gt,e),o=Se(t,e);o&&de(n,o)}}function Te(e,t){var n=document.createElement("div");n.className=bt;var o=document.createElement("ul");n.appendChild(o),e.appendChild(n);var i=d(St,e),a=d("ul",i);m(i,qe.slidesNavPosition);for(var r="",l=0;l<t;l++)r+='<li><a href="#"><span></span></a></li>';a.innerHTML=a.innerHTML+r,c(i,"margin-left","-"+i.offsetWidth/2+"px"),m(d("a",u("li",i)[0]),it)}function ke(e,t,n,o){var i="";qe.anchors.length&&(e?(void 0!==n&&(i=n),void 0===t&&(t=e),Ke=t,xe(i+"/"+t)):void 0!==e?(Ke=t,xe(n)):xe(n)),Me()}function xe(e){if(qe.recordHistory)location.hash=e;else if(Ct||At)history.replaceState(void 0,void 0,"#"+e);else{var t=window.location.href.split("#")[0];window.location.replace(t+"#"+e)}}function Be(e){var t=e.getAttribute("data-anchor"),n=f(e);return t||(t=n),t}function Me(e){var t=d(st),n=d(pt,t),o=t.getAttribute("data-anchor"),i=f(t),e=String(i);if(qe.anchors.length&&(e=o),n){e=e+"-"+Be(n)}e=e.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+ot+"-[^\\s]+\\b","g");document.body.className=document.body.className.replace(a,""),m(document.body,ot+"-"+e)}function Ie(){var e,t=document.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var o in n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(n[o]));return document.body.removeChild(t),void 0!==e&&e.length>0&&"none"!==e}function Ne(){var e=d(Ze);document.addEventListener?(e.removeEventListener("mousewheel",ee,!1),e.removeEventListener("wheel",ee,!1)):e.detachEvent("onmousewheel",ee)}function Ce(){Pe(d(Ze),ee,"mousewheel","onmousewheel","wheel")}function Ae(){Pe(window,ue,"resize","onresize")}function He(){Pe(window,F,"scroll","onscroll","onscroll")}function Pe(e,t,n,o,i){e.addEventListener?(e.addEventListener(n,t,!1),void 0!==i&&e.addEventListener(i,t,!1)):e.attachEvent(o,t)}function _e(){if(Ct||At){var e=d(Ze);if(document.addEventListener){var t=ze();e.removeEventListener("touchstart",Q),e.removeEventListener(t.down,Q),e.removeEventListener("touchmove",J),e.removeEventListener(t.move,J),L(e,"touchstart "+t.down,Q),L(e,"touchmove "+t.move,J)}}}function ze(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Re(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,At&&G(e)&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Oe(e,t){P(0,"internal"),void 0!==t&&(Pt=!0),de(g(e,function(e){return h(e,mt)}),e),void 0!==t&&(Pt=!1),P($e.scrollingSpeed,"internal")}function je(e){if(qe.scrollBar){var t=ie(e);C(t.element,t.options,0)}else if(qe.css3){var n="translate3d(0px, -"+e+"px, 0px)";we(n,!1)}else c(Je,"top",-e+"px")}function De(e,t){s(e,{"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t})}function Ye(e,t,n){qe[e]=t,"internal"!==n&&($e[e]=t)}function Xe(){for(var e=0;e<qe.anchors.length;e++){var t=qe.anchors[e];(r("#"+t)||u('[name="'+t+'"]').length)&&We("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")}}function We(e,t){console&&console[e]&&console[e]("fullPage: "+t)}var qe,Ve,Ke,Ue,Fe,$e,Je,Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe="fullpage-wrapper",Ze="."+Qe,et="fp-notransition",tt="fp-destroyed",nt="fp-enabled",ot="fp-viewing",it="activeSection",at="."+it,rt="fp-section",lt="."+rt,st=lt+at,ct="fp-nav",dt="#"+ct,ut="fp-tooltip",ft="fp-show-active",vt="fp-slide",ht="."+vt,pt=ht+at,mt="fp-slides",gt="."+mt,yt="fp-slidesContainer",wt="."+yt,bt="fp-slidesNav",St="."+bt,Et=St+" a",Lt=".fp-controlArrow",Tt="fp-prev",kt="."+Tt,xt="fp-controlArrow "+Tt,Bt=Lt+kt,Mt="fp-controlArrow fp-next",It=Lt+".fp-next",Nt=!1,Ct=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),At="ontouchstart"in window||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ht=w(),Pt=!1,_t=!0,zt=[];Math.easeInOutCubic=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},window.initialize=function(e,t){qe=a({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easingcss3:"ease",loopHorizontal:!0,touchSensitivity:5,keyboardScrolling:!0,recordHistory:!0,controlArrows:!0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},t),$e=b(qe),Je=d(e),o(i)};var Rt,Ot,jt=!1,Dt=0,Yt=0,Xt=0,Wt=0,qt=(new Date).getTime();document.addEventListener?window.addEventListener("hashchange",se,!1):window.attachEvent("onhashchange",se);var Vt;document.onkeydown=function(e){clearTimeout(Vt);var t=document.activeElement,n=t.tagName;if("SELECT"!==n&&"INPUT"!==n&&qe.keyboardScrolling&&qe.autoScrolling){e=window.event||e||e.originalEvent;for(var o=e.charCode||e.keyCode,i=[40,38,32,33,34],a=0;a<i.length;a++)i[a]==o&&S(e);var r=e.shiftKey;Vt=setTimeout(function(){ce(r,o)},150)}},null!==d(Et)&&L(d(Et),"click onclick touchstart",function(e){S(e);var t=g(this,function(e){return h(e1,rt)}),n=d(gt,t),o=g(this,function(e){return"li"===e.tagName}),i=f(o);de(n,u(ht,n)[i])});var Kt,Ut=Ht;initialize}]);