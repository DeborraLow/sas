!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){"#presentation"!==location.hash&&m||(f.style.display="none",v.style.display="none",window.setTimeout(function(){e.classList.add("button_visible"),e.classList.remove("button_hidden")},2e3),yaCounter45804912.hit("/#presentation",{title:"presentation",referer:"http://advanced.studies.school"}))}function a(){"#test1"===location.hash&&m?(f.style.display="block",v.style.display="block",v.style.width="33.3%",yaCounter45804912.hit("/#test1",{title:"test1",referer:"http://advanced.studies.school"})):"#test2"===location.hash&&m?(f.style.display="block",v.style.display="block",v.style.width="66.6%",yaCounter45804912.hit("/#test2",{title:"test2",referer:"http://advanced.studies.school"})):"#test3"===location.hash&&m?(f.style.display="block",v.style.display="block",v.style.width="100%",yaCounter45804912.hit("/#test3",{title:"test3",referer:"http://advanced.studies.school"})):"#test-results"===location.hash&&(f.style.display="none",v.style.display="none",yaCounter45804912.hit("/#test-results",{title:"test-results",referer:"http://advanced.studies.school"}))}function r(){var e=u[Math.floor(Math.random()*(u.length-1))];y=S[e].title,w=S[e].title,b="assets/m"+e+".jpg",g="Я прошел тест Школы перпективных исследований. Мне рекомендован фильм: ",vk(document,"vk-share",{url:document.URL,title:g+y,description:w,image:"http://advanced.studies.school/"+b,noparse:!0},{type:"round",text:"Поделиться"}),document.getElementById("results-header").innerHTML=y,document.getElementById("results-img").src=b,document.querySelector("meta[property='og\\:title']").content=g+y,document.querySelector("meta[property='og\\:description']").content=w,document.querySelector("meta[property='og\\:image']").content=b}function l(e){console.log(e);var t=new XMLHttpRequest;t.open("POST","/sendresult"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}var s=n(1),c=(o(s),n(2)),d=(o(c),n(3)),u=(o(d),[]),f=document.getElementById("progress"),v=document.getElementById("progress__bar"),h=(document.getElementsByClassName("background")[0],document.getElementsByClassName("screen__filter")[0],document.getElementById("start-button")),p=document.getElementById("end-button"),m=!0;window.yaCounter45804912;var g="Я прошел тест Школы перпективных исследований. Мне рекомендован фильм: ",y="",w="",b="",S={1:{title:"Меланхолия, Ларс фон Триер, 2011"},2:{title:"Доктор Стрейнджлав, или Как я перестал бояться и полюбил бомбу, Стэнли Кубрик, 1964"},3:{title:"Экзистенция, Дэвид Кроненберг, 1999"},4:{title:"Опасный метод, Дэвид Кроненберг, 2011"},5:{title:"Викинг, Андрей Кравчук, 2017"},6:{title:"Люмьер и компания, Дэвид Линч и другие, 1995"},7:{title:"Система безопасности, Сидни Люмет, 1964"},8:{title:"Древо жизни, Терренс Малик, 2011"},9:{title:"Туринская лошадь, Бела Тарр и Агнеш Храницки, 2011"},10:{title:"Плутовство, Барри Левинсон, 1997"},11:{title:"Гленгарри Глен Росс (Американцы), Джеймс Фоули, 1992"},12:{title:"Искусственный разум, Стивен Спилберг, 2001"},13:{title:"Тряпичный союз, Михаил Местецкий, 2015"},14:{title:"Агора, Алехандро Аменабар, 2009"},15:{title:"Монти Пайтон и Священный Грааль, Терри Гиллиам, 1975"},16:{title:"Визит инспектора, Эшлин Уолш, 2015"},17:{title:"Агора, Алехандро Аменабар, 2009"},18:{title:"Призрак в доспехах: Невинность, Мамору Осии, 2004"}};window.innerWidth<=1e3&&(m=!1),window.onload=function(){vk=function(e,t,n,o){var i=e.createElement("script");i.src="http://vk.com/js/api/share.js?90",i.onload=i.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||this.executed||(this.executed=!0,setTimeout(function(){e.getElementById(t).innerHTML=VK.Share.button(n,o),VK.Share._base_domain="https:"+VK.Share._base_domain},0))},e.documentElement.appendChild(i)},m?(window.setTimeout(function(){document.getElementsByClassName("h1_hello")[0].style.opacity="1",document.getElementsByClassName("arrow-down")[0].style.opacity="1"},2e3),window.setTimeout(function(){var e=document.getElementById("test-results");m&&(e.style.backgroundImage="url('assets/giphy.gif')",e.style.backgroundSize="cover")},7e3),initialize("#fullpage",{anchors:["start","presentation","test1","test2","test3"]})):(document.getElementsByClassName("h1_hello")[0].style.opacity="1",document.getElementsByClassName("arrow-down")[0].style.opacity="1")};var h=document.getElementById("start-button");i(h),"onhashchange"in window?window.onhashchange=function(){i(h),a()}:window.onload=function(){i(h),a(),document.getElementsByClassName("h1_hello")[0].style.opacity="1"},h.addEventListener("click",function(){m&&(f.style.display="block",v.style.display="block"),document.getElementById("test1").style.display="flex",document.getElementById("test2").style.display="flex",document.getElementById("test3").style.display="flex",window.location.href="#test1"});for(var E=document.querySelectorAll(".test-screen .list-item"),L=0;L<E.length;L++)E[L].onclick=function(){var e=u.indexOf(parseInt(this.id));-1!==e?(u.splice(e,1),this.classList.toggle("list-item_selected")):3==u.length?alert("Выбери не более 3-х вариантов"):(u.push(parseInt(this.id)),this.classList.toggle("list-item_selected")),u.length>=3?p.classList.remove("button_disabled"):p.classList.add("button_disabled"),console.log(u)};p.addEventListener("click",function(){p.classList.contains("button_disabled")?alert("Выбери не менее 3-х вариантов"):(l(u),r(),document.getElementById("test-results").style.display="block",window.location.href="#test-results",document.getElementById("test-results").style.visibility="visible")});var T=document.getElementById("agreement-checkbox"),k=document.getElementById("form-subscribe__submit");T.checked?k.disabled=!1:k.disabled=!0,T.addEventListener("click",function(){T.checked?k.disabled=!1:k.disabled=!0}),k.addEventListener("click",function(){T.checked||alert("Пожалуйста, дайте свое согласие на обработку персональных данных")}),document.getElementById("form-subscribe").onsubmit=function(e){e.preventDefault(),console.log(e);var t=new XMLHttpRequest;t.open("POST","/subscribe"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify({email:e.target.elements.email.value})),alert("Благодарим за подписку и до встречи на открытых лекциях!")},function(e,t,n){(t[n]=t[n]||[]).push(function(){try{t.yaCounter45804912=new Ya.Metrika({id:45804912,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(e){}});var o=e.getElementsByTagName("script")[0],i=e.createElement("script"),a=function(){o.parentNode.insertBefore(i,o)};i.type="text/javascript",i.async=!0,i.src="https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",a,!1):a()}(document,window,"yandex_metrika_callbacks")},function(e,t){},function(e,t){},function(e,t,n){"use strict";function o(e){p(Je,tt),Ye(),We.css3&&(We.css3=Ce()),null!==Je?(s(Je,{height:"100%",position:"relative"}),m(Je,Qe),m(d("html"),nt)):Xe("error","Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');"),O(!0),Pe(),_e(),Ae();var t=u(We.sectionSelector);for(i=0;i<t.length;++i)m(t[i],rt);var n=u(We.slideSelector);for(i=0;i<n.length;++i)m(n[i],vt);We.navigation&&K();for(var o=u(lt),i=0;i<o.length;i++){var a=i,r=o[i],l=u(ht,r),f=l.length;if(a||null!==d(st)||m(r,it),void 0!==We.anchors[a]&&(r.setAttribute("data-anchor",We.anchors[a]),h(r,it)&&me(We.anchors[a],a)),f>0){var v=100*f,g=100/f,y=r.innerHTML,w='<div class="'+mt+'"><div class="'+yt+'">'+y+"</div></div>";r.innerHTML=w,l=u(ht,r),c(d(wt,r),"width",v+"%"),We.controlArrows&&f>1&&V(r),We.slidesNavigation&&Te(r,f);for(var b=0;b<l.length;b++){c(l[b],"width",g+"%")}var S=d(pt,r);null!==typeof S?m(l[0],it):Re(S)}}e()}function i(){for(var e=u(Lt),t=0;t<e.length;t++)L(e[t],"click onclick touchstart",le);_(We.autoScrolling,"internal");var n=d(st),o=d(pt,n),i=f(d(st));if(o&&(0!==i||0===i&&0!==f(o))&&Re(o),We.navigation){c(Ue,"margin-top","-"+Ue.offsetHeight/2+"px");m(d("a",u("li",Ue)[f(d(st))]),it)}U();var a=window.location.hash.replace("#","").split("/"),r=a[0];if(r.length){var l=d('[data-anchor="'+r+'"]');if(!We.animateAnchor&&l.length){if(We.autoScrolling)je(l.offsetTop);else{je(0),Me(r);var s=ie(l.offsetTop);T(s.element,s.options,0)}me(r,null),E(We.afterLoad)&&We.afterLoad.call(l,r,f(l)+1),p(n,it),m(l,it)}}Me(),He(document,re,"DOMContentLoaded","DOMContentLoaded","DOMContentLoaded")}function a(e,t){"object"!==(void 0===t?"undefined":Ge(t))&&(t={});for(var n in t)e.hasOwnProperty(n)&&(e[n]=t[n]);return e}function r(e){return document.getElementById(e)}function l(e){return document.getElementsByTagName(e)[0]}function s(e,t){var n;for(n in t)t.hasOwnProperty(n)&&null!==n&&(e.style[n]=t[n]);return e}function c(e,t,n){e.style[t]=n}function d(e,t){return t=t||document,t.querySelector(e)}function u(e,t){return t=t||document,t.querySelectorAll(e)}function f(e){for(var t=0;e=e.previousSibling;)3==e.nodeType&&/^\s*$/.test(e.data)||t++;return t}function v(e,t){return void 0!==t?e.style.display=t?"block":"none":"block"==e.style.display?e.style.display="none":e.style.display="block",e}function h(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function p(e,t){if(e&&h(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n,"")}}function m(e,t){e&&!h(e,t)&&(e.className+=" "+t)}function g(e,t){return e&&(t(e)?e:g(e.parentNode,t))}function y(){return"innerWidth"in window?window.innerWidth:document.documentElement.offsetWidth}function w(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}function b(e){if(null===e||"object"!==(void 0===e?"undefined":Ge(e)))return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function S(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function E(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function L(e,t,n){for(var o=t.split(" "),i=0,a=o.length;i<a;i++)document.addEventListener?e.addEventListener(o[i],n,!1):e.attachEvent(o[i],n,!1)}function T(e,t,n,o){var i=I(e),a=t-i,r=0;Fe=!0;!function l(){if(Fe){var s=t;r+=20,s=Math.easeInOutCubic(r,i,a,n),N(e,s),r<n?setTimeout(l,20):void 0!==o&&o()}else r<n&&o()}()}function k(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function x(e,t){for(var n=[];e;e=e.nextSibling)1==e.nodeType&&e!=t&&n.push(e);return n}function B(e){return x(e.parentNode.firstChild,e)}function M(e){for(var t=e.nextSibling;t&&1!=t.nodeType;)t=t.nextSibling;return t}function C(e){for(var t=e.previousSibling;t&&1!=t.nodeType;)t=t.previousSibling;return t}function I(e){return e.self!=window&&h(e,mt)?e.scrollLeft:!We.autoScrolling||We.scrollBar?k():e.offsetTop}function N(e,t){!We.autoScrolling||We.scrollBar||e.self!=window&&h(e,mt)?e.self!=window&&h(e,mt)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function _(e,t){qe("autoScrolling",e,t);var n=d(st);if(We.autoScrolling&&!We.scrollBar)s(document.body,{overflow:"hidden",height:"100%"}),s(l("html"),{overflow:"hidden",height:"100%"}),A(We.recordHistory,"internal"),s(Je,{"-ms-touch-action":"none","touch-action":"none"}),n&&je(n.offsetTop);else{s(document.body,{overflow:"visible",height:"100%"}),s(l("html"),{overflow:"visible",height:"100%"}),A(!1,"internal"),s(Je,{"-ms-touch-action":"","touch-action":""}),je(0);var o=ie(n.offsetTop);o.element.scrollTo(0,o.options)}}function A(e,t){qe("recordHistory",e,t)}function H(e,t){qe("scrollingSpeed",e,t)}function P(e,t){qe("fitToSection",e,t)}function O(e){e?Ne():Ie()}function z(e){We.keyboardScrolling=e}function R(){var e=C(d(st));e&&ne(e,null,!0)}function j(){var e=M(d(st));e&&ne(e,null,!1)}function D(e,t){H(0,"internal"),q(e,t),H($e.scrollingSpeed,"internal")}function q(e,t){var n=be(e);void 0!==t?Ee(e,t):n&&ne(n)}function Y(){te("next")}function X(){te("prev")}function W(e){if(!h(Je,tt)){Ht=!0,At=w();for(var t=u(lt),n=0;n<t.length;++n){var o=t[n],i=d(gt,o),a=u(ht,o);i&&a.length>1&&de(i,d(pt,i))}var r=d(st);f(r)&&je(r.offsetTop),Ht=!1,E(We.afterResize)&&e&&We.afterResize.call(Je),E(We.afterReBuild)&&!e&&We.afterReBuild.call(Je)}}function V(e){var t=document.createElement("div");t.className=xt;var n=document.createElement("div");n.className=Mt;var o=d(gt,e);We.controlArrowColor,o.parentNode.appendChild(t),o.parentNode.appendChild(n),We.loopHorizontal||(d(Bt,e).style.display="none")}function K(){var e=document.createElement("div");e.setAttribute("id",ct);var t=document.createElement("ul");e.appendChild(t),document.body.appendChild(e),Ue=d(dt),c(Ue,"color",We.navigationColor),m(Ue,We.navigationPosition),We.showActiveTooltip&&m(Ue,ft);for(var n="",o=0;o<u(lt).length;o++){var i="";We.anchors.length&&(i=We.anchors[o]),n=n+'<li><a href="#'+i+'"><span></span></a>';var a=We.navigationTooltips[o];void 0!==(void 0===a?"undefined":Ge(a))&&""!==a&&(n+='<div class="'+ut+" "+We.navigationPosition+'">'+a+"</div>"),n+="</li>"}var r=d("ul",Ue);r.innerHTML=r.innerHTML+n;for(var l=u(Et),s=0;s<l.length;s++)L(l[s],"click onclick touchstart",function(e){e=window.event||e||e.originalEvent,S(e);var t=f(this.parentNode);ne(u(lt)[t],null,!1)})}function U(){var e=d(st);E(We.afterLoad)&&We.afterLoad.call(e,e.getAttribute("data-anchor"),f(e)+1),E(We.afterRender)&&We.afterRender.call(Je)}function F(){var e;if(!We.autoScrolling||We.scrollBar){for(var t=k(),n=0,o=Math.abs(t-u(lt)[0].offsetTop),i=u(lt),a=0;a<i.length;++a){var r=i[a],l=Math.abs(t-r.offsetTop);l<o&&(n=a,o=l)}e=u(lt)[n]}if(!We.autoScrolling||We.scrollBar){if(!h(e,it)){jt=!0;var s=d(st),c=f(s)+1,v=ge(e),g=e.getAttribute("data-anchor"),y=f(e)+1,w=d(pt,e);if(w)var b=w.getAttribute("data-anchor"),S=f(w);Pt&&(p(s,it),m(e,it),E(We.onLeave)&&We.onLeave.call(s,c,y,v),E(We.afterLoad)&&We.afterLoad.call(e,g,y),me(g,0),We.anchors.length&&(Ve=g,ke(S,b,g,y))),clearTimeout(zt),zt=setTimeout(function(){jt=!1},100)}We.fitToSection&&(clearTimeout(Rt),Rt=setTimeout(function(){(Pt&&!We.autoScrolling||We.scrollBar)&&(f(d(st))==f(e)&&(Ht=!0),ne(e),Ht=!1)},We.fitToSectionDelay))}}function $(e){"down"==e?j():R()}function J(e){var t=window.event||e||e.originalEvent;if(G(t)){We.autoScrolling&&S(e);var n=d(st),o=u(gt,n);if(Pt&&!It){var i=ze(t);Yt=i.y,Xt=i.x,o&&Math.abs(qt-Xt)>Math.abs(Dt-Yt)?Math.abs(qt-Xt)>y()/100*We.touchSensitivity&&(qt>Xt?Y():X()):We.autoScrolling&&Math.abs(Dt-Yt)>w()/100*We.touchSensitivity&&(Dt>Yt?$("down"):Yt>Dt&&$("up"))}}}function G(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Q(e){var t=window.event||e||e.originalEvent;if(We.fitToSection&&(Fe=!1),G(t)){var n=ze(t);Dt=n.y,qt=n.x}}function Z(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),i=0;i<o.length;i++)n+=o[i];return Math.ceil(n/t)}function ee(e){var t=(new Date).getTime();if(We.autoScrolling){e=window.event||e||e.originalEvent;var n=e.wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,n));Ot.length>149&&Ot.shift(),Ot.push(Math.abs(n)),We.scrollBar&&S(e);var i=t-Wt;if(Wt=t,i>200&&(Ot=[]),Pt){Z(Ot,10)>=Z(Ot,70)&&$(o<0?"down":"up")}return!1}We.fitToSection&&(Fe=!1)}function te(e){var t=d(st),n=d(gt,t);if(n&&!It){var o=d(pt,n),i=null;if(!(i="prev"===e?C(o):M(o))){if(!We.loopHorizontal)return;var a=B(o);i="prev"===e?a[a.length-1]:a[0]}It=!0,de(n,i)}}function ne(e,t,n){if(null!==e){var o={element:e,callback:t,isMovementUp:n,dtop:e.offsetTop,yMovement:ge(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:f(e),activeSlide:d(pt,e),activeSection:d(st),leavingSection:f(d(st))+1,localIsResizing:Ht};if(!(f(o.activeSection)==o.sectionIndex&&!Ht||We.scrollBar&&k()===o.dtop)){if(o.activeSlide)var i=o.activeSlide.getAttribute("data-anchor"),a=f(o.activeSlide);for(var r=u(lt),l=0;l<r.length;l++)p(r[l],it);m(e,it),Pt=!1,ke(a,i,o.anchorLink,o.sectionIndex),E(We.onLeave)&&!o.localIsResizing&&We.onLeave.call(o.activeSection,o.leavingSection,o.sectionIndex+1,o.yMovement),oe(o),Ve=o.anchorLink,me(o.anchorLink,o.sectionIndex)}}}function oe(e){if(We.css3&&We.autoScrolling&&!We.scrollBar){we("translate3d(0px, -"+e.dtop+"px, 0px)",!0),We.scrollingSpeed?setTimeout(function(){ae(e)},We.scrollingSpeed):ae(e)}else{var t=ie(e.dtop);T(t.element,t.options,We.scrollingSpeed,function(){ae(e)})}}function ie(e){var t={};return We.autoScrolling&&!We.scrollBar?(t.options=-e,t.element=d("."+Qe)):(t.options=e,t.element=window),t}function ae(e){E(We.afterLoad)&&!e.localIsResizing&&We.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),Pt=!0,E(e.callback)&&e.callback.call(this)}function re(){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];t&&Ee(t,n)}function le(e){var t=this;t.self==window&&(t=e.target||e.srcElement),h(t,Tt)?X():Y()}function se(){if(!jt){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];if(t.length){var o=void 0===Ve,i=void 0===Ve&&void 0===n&&!It;(t&&t!==Ve&&!o||i||!It&&Ke!=n)&&Ee(t,n)}}}function ce(e,t){switch(t){case 38:case 33:R();break;case 32:if(e){R();break}case 40:case 34:j();break;case 36:q(1);break;case 35:q(u(lt).length);break;case 37:X();break;case 39:Y();break;default:return}}function de(e,t){var n=f(t),o=g(e,function(e){return h(e,rt)}),i=f(o),a=o.getAttribute("data-anchor"),r=d(St,o),l=Be(t),s=Ht;if(We.onSlideLeave){var c=d(pt,o),y=f(c),w=ye(y,n);s||"none"===w||E(We.onSlideLeave)&&We.onSlideLeave.call(c,a,i+1,y,w,n)}for(var b=u(ht,o),S=0;S<b.length;S++)p(b[S],it);m(t,it),!We.loopHorizontal&&We.controlArrows&&(v(d(Bt,o),0!==n),v(d(Ct,o),!t.is(":last-child"))),h(o,it)&&ke(n,l,a,i);var L=function(){s||E(We.afterSlideLoad)&&We.afterSlideLoad.call(t,a,i+1,l,n),It=!1};if(We.css3){var k="translate3d(-"+Math.round(t.offsetLeft)+"px, 0px, 0px)",x=d(wt,e);fe(x,We.scrollingSpeed>0),De(x,k),setTimeout(function(){L()},We.scrollingSpeed,We.easing)}else T(e,Math.round(t.offsetLeft),We.scrollingSpeed,function(){L()});if(We.slidesNavigation){p(d(at,r),it);m(d("a",u("li",r)[n]),it)}}function ue(){if(Nt){if("text"!==document.activeElement.getAttribute("type")){var e=w();Math.abs(e-Ut)>20*Math.max(Ut,e)/100&&(W(!0),Ut=e)}}else clearTimeout(Kt),Kt=setTimeout(function(){W(!0)},350)}function fe(e){var t="all "+We.scrollingSpeed+"ms "+We.easingcss3;return p(e,et),s(e,{"-webkit-transition":t,transition:t}),e}function ve(e){return m(e,et)}function he(e,t){if(We.navigation)if(p(d(at,Ue),it),e)m(d('a[href="#'+e+'"]',Ue),it);else{var n=u("li",Ue)[t];m(d("a",n),it)}}function pe(e){if(We.menu){var t=d(We.menu);t&&(p(d(at,t),it),m(d('[data-menuanchor="'+e+'"]',t),it))}}function me(e,t){pe(e),he(e,t)}function ge(e){var t=f(d(st)),n=f(e);return t==n?"none":t>n?"up":"down"}function ye(e,t){return e==t?"none":e>t?"left":"right"}function we(e,t){t?fe(Je):ve(Je),De(Je,e),setTimeout(function(){p(Je,et)},10)}function be(e){var t=d(lt+'[data-anchor="'+e+'"]');return t||(t=u(lt)[e-1]),t}function Se(e,t){var n=d(gt,t),o=d(ht+'[data-anchor="'+e+'"]',n);return n&&!o&&(o=u(ht,n)[e]),o}function Ee(e,t){var n=be(decodeURI(e));void 0===t&&(t=0),e===Ve||h(n,it)?Le(n,t):ne(n,function(){Le(n,t)})}function Le(e,t){if(void 0!==t){var n=d(gt,e),o=Se(t,e);o&&de(n,o)}}function Te(e,t){var n=document.createElement("div");n.className=bt;var o=document.createElement("ul");n.appendChild(o),e.appendChild(n);var i=d(St,e),a=d("ul",i);m(i,We.slidesNavPosition);for(var r="",l=0;l<t;l++)r+='<li><a href="#"><span></span></a></li>';a.innerHTML=a.innerHTML+r,c(i,"margin-left","-"+i.offsetWidth/2+"px"),m(d("a",u("li",i)[0]),it)}function ke(e,t,n,o){var i="";We.anchors.length&&(e?(void 0!==n&&(i=n),void 0===t&&(t=e),Ke=t,xe(i+"/"+t)):void 0!==e?(Ke=t,xe(n)):xe(n)),Me()}function xe(e){if(We.recordHistory)location.hash=e;else if(Nt||_t)history.replaceState(void 0,void 0,"#"+e);else{var t=window.location.href.split("#")[0];window.location.replace(t+"#"+e)}}function Be(e){var t=e.getAttribute("data-anchor"),n=f(e);return t||(t=n),t}function Me(e){var t=d(st),n=d(pt,t),o=t.getAttribute("data-anchor"),i=f(t),e=String(i);if(We.anchors.length&&(e=o),n){e=e+"-"+Be(n)}e=e.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+ot+"-[^\\s]+\\b","g");document.body.className=document.body.className.replace(a,""),m(document.body,ot+"-"+e)}function Ce(){var e,t=document.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var o in n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(n[o]));return document.body.removeChild(t),void 0!==e&&e.length>0&&"none"!==e}function Ie(){var e=d(Ze);document.addEventListener?(e.removeEventListener("mousewheel",ee,!1),e.removeEventListener("wheel",ee,!1)):e.detachEvent("onmousewheel",ee)}function Ne(){He(d(Ze),ee,"mousewheel","onmousewheel","wheel")}function _e(){He(window,ue,"resize","onresize")}function Ae(){He(window,F,"scroll","onscroll","onscroll")}function He(e,t,n,o,i){e.addEventListener?(e.addEventListener(n,t,!1),void 0!==i&&e.addEventListener(i,t,!1)):e.attachEvent(o,t)}function Pe(){if(Nt||_t){var e=d(Ze);if(document.addEventListener){var t=Oe();e.removeEventListener("touchstart",Q),e.removeEventListener(t.down,Q),e.removeEventListener("touchmove",J),e.removeEventListener(t.move,J),L(e,"touchstart "+t.down,Q),L(e,"touchmove "+t.move,J)}}}function Oe(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function ze(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,_t&&G(e)&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Re(e,t){H(0,"internal"),void 0!==t&&(Ht=!0),de(g(e,function(e){return h(e,mt)}),e),void 0!==t&&(Ht=!1),H($e.scrollingSpeed,"internal")}function je(e){if(We.scrollBar){var t=ie(e);N(t.element,t.options,0)}else if(We.css3){var n="translate3d(0px, -"+e+"px, 0px)";we(n,!1)}else c(Je,"top",-e+"px")}function De(e,t){s(e,{"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t})}function qe(e,t,n){We[e]=t,"internal"!==n&&($e[e]=t)}function Ye(){for(var e=0;e<We.anchors.length;e++){var t=We.anchors[e];(r("#"+t)||u('[name="'+t+'"]').length)&&Xe("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")}}function Xe(e,t){console&&console[e]&&console[e]("fullPage: "+t)}var We,Ve,Ke,Ue,Fe,$e,Je,Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe="fullpage-wrapper",Ze="."+Qe,et="fp-notransition",tt="fp-destroyed",nt="fp-enabled",ot="fp-viewing",it="activeSection",at="."+it,rt="fp-section",lt="."+rt,st=lt+at,ct="fp-nav",dt="#"+ct,ut="fp-tooltip",ft="fp-show-active",vt="fp-slide",ht="."+vt,pt=ht+at,mt="fp-slides",gt="."+mt,yt="fp-slidesContainer",wt="."+yt,bt="fp-slidesNav",St="."+bt,Et=St+" a",Lt=".fp-controlArrow",Tt="fp-prev",kt="."+Tt,xt="fp-controlArrow "+Tt,Bt=Lt+kt,Mt="fp-controlArrow fp-next",Ct=Lt+".fp-next",It=!1,Nt=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),_t="ontouchstart"in window||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,At=w(),Ht=!1,Pt=!0,Ot=[];Math.easeInOutCubic=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},window.initialize=function(e,t){We=a({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easingcss3:"ease",loopHorizontal:!0,touchSensitivity:5,keyboardScrolling:!0,recordHistory:!0,controlArrows:!0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},t),$e=b(We),Je=d(e),o(i)};var zt,Rt,jt=!1,Dt=0,qt=0,Yt=0,Xt=0,Wt=(new Date).getTime();document.addEventListener?window.addEventListener("hashchange",se,!1):window.attachEvent("onhashchange",se);var Vt;document.onkeydown=function(e){clearTimeout(Vt);var t=document.activeElement,n=t.tagName;if("SELECT"!==n&&"INPUT"!==n&&We.keyboardScrolling&&We.autoScrolling){e=window.event||e||e.originalEvent;for(var o=e.charCode||e.keyCode,i=[40,38,32,33,34],a=0;a<i.length;a++)i[a]==o&&S(e);var r=e.shiftKey;Vt=setTimeout(function(){ce(r,o)},150)}},null!==d(Et)&&L(d(Et),"click onclick touchstart",function(e){S(e);var t=g(this,function(e){return h(e1,rt)}),n=d(gt,t),o=g(this,function(e){return"li"===e.tagName}),i=f(o);de(n,u(ht,n)[i])});var Kt,Ut=At;initialize}]);