!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){"#presentation"!==location.hash&&g||(v.style.display="none",p.style.display="none",window.setTimeout(function(){e.classList.add("button_visible"),e.classList.remove("button_hidden")},2e3))}function a(){"#test1"===location.hash&&g?(v.style.display="block",p.style.display="block",p.style.width="33.3%"):"#test2"===location.hash&&g?(v.style.display="block",p.style.display="block",p.style.width="66.6%"):"#test3"===location.hash&&g?(v.style.display="block",p.style.display="block",p.style.width="100%"):"#test-results"===location.hash&&(v.style.display="none",p.style.display="none")}function r(){var e=f[Math.floor(Math.random()*(f.length-1))];console.log(e),w=E[e].title,b="Приключенческо-шпионский триллер 1959 года, по стилистике предвосхищающий фильмы «бондианы»",S="assets/003-north-by-northwest-theredlist.jpg",y="Я прошел тест Школы перпективных исследований. Мне рекомендован фильм: ",document.getElementById("results-header").innerHTML=w,document.getElementById("results-descr").innerHTML=b,document.getElementById("results-img").src=S,document.querySelector("meta[property='og\\:title']").content=y+w,document.querySelector("meta[property='og\\:description']").content=b,document.querySelector("meta[property='og\\:image']").content=S,c(document,"vk-share",{url:document.URL,title:y+w,description:b,image:"https://lectures-sasonline.rhcloud.com/"+S,noparse:!0},{type:"round",text:"Поделиться"})}function l(e){console.log(e);var t=new XMLHttpRequest;t.open("POST","/sendresult"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}function c(e,t,n,o){var i=e.createElement("script");i.src="http://vk.com/js/api/share.js?90",i.onload=i.onreadystatechange=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||this.executed||(this.executed=!0,setTimeout(function(){e.getElementById(t).innerHTML=VK.Share.button(n,o),VK.Share._base_domain="https:"+VK.Share._base_domain},0))},e.documentElement.appendChild(i)}var s=n(1),d=(o(s),n(2)),u=(o(d),n(3)),f=(o(u),[]),v=document.getElementById("progress"),p=document.getElementById("progress__bar"),h=(document.getElementsByClassName("background")[0],document.getElementsByClassName("screen__filter")[0],document.getElementById("start-button")),m=document.getElementById("end-button"),g=!0,y="Я прошел тест Школы перпективных исследований. Мне рекомендован фильм: ",w='"К северу через северо-запад", Альфред Хичкок',b="Приключенческо-шпионский триллер 1959 года, по стилистике предвосхищающий фильмы «бондианы»",S="assets/003-north-by-northwest-theredlist.jpg",E={1:{title:"Меланхолия, Ларс фон Триер, 2011"},2:{title:"Доктор Стрейнджлав, или Как я перестал бояться и полюбил бомбу, Стэнли Кубрик, 1964"},3:{title:"Экзистенция, Дэвид Кроненберг, 1999"},4:{title:""}};window.innerWidth<=1e3&&(g=!1),window.onload=function(){g?(window.setTimeout(function(){document.getElementsByClassName("h1_hello")[0].style.opacity="1"},2e3),window.setTimeout(function(){var e=document.getElementById("test-results");g&&(e.style.backgroundImage="url('assets/giphy.gif')",e.style.backgroundSize="cover")},7e3),initialize("#fullpage",{anchors:["start","presentation","test1","test2","test3"]})):document.getElementsByClassName("h1_hello")[0].style.opacity="1"};var h=document.getElementById("start-button");i(h),"onhashchange"in window?window.onhashchange=function(){i(h),a()}:window.onload=function(){i(h),a(),document.getElementsByClassName("h1_hello")[0].style.opacity="1"},h.addEventListener("click",function(){g&&(v.style.display="block",p.style.display="block"),document.getElementById("test1").style.display="flex",document.getElementById("test2").style.display="flex",document.getElementById("test3").style.display="flex",window.location.href="#test1"});for(var L=document.querySelectorAll(".test-screen .list-item"),k=0;k<L.length;k++)L[k].onclick=function(){var e=f.indexOf(parseInt(this.id));-1!==e?f.splice(e,1):f.push(parseInt(this.id)),f.length>=0?m.classList.remove("button_disabled"):m.classList.add("button_disabled"),this.classList.toggle("list-item_selected")};m.addEventListener("click",function(){m.classList.contains("button_disabled")?alert("Выбери не менее 3 вариантов"):(l(f),r(),document.getElementById("test-results").style.display="block",window.location.href="#test-results",document.getElementById("test-results").style.visibility="visible",FB.api("https://graph.facebook.com/me/og.likes","post",{object:objectToLike,privacy:{value:"SELF"}},function(e){e?e.error?document.getElementById("result").innerHTML="Error: "+e.error.message:document.getElementById("result").innerHTML='<a href="https://www.facebook.com/me/activity/'+e.id+'">Story created.  ID is '+e.id+"</a>":alert("Error occurred.")}))});var T=document.getElementById("agreement-checkbox"),x=document.getElementById("form-subscribe__submit");T.checked?x.disabled=!1:x.disabled=!0,T.addEventListener("click",function(){T.checked?x.disabled=!1:x.disabled=!0}),x.addEventListener("click",function(){T.checked||alert("Пожалуйста, дайте свое согласие на обработку персональных данных")}),window.fbAsyncInit=function(){FB.init({appId:"307669659708408",xfbml:!0,version:"v2.10"}),FB.AppEvents.logPageView()},function(e,t,n){var o,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(o=e.createElement(t),o.id=n,o.src="//connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(o,i))}(document,"script","facebook-jssdk"),function(e,t,n){(t[n]=t[n]||[]).push(function(){try{t.yaCounter45804912=new Ya.Metrika({id:45804912,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(e){}});var o=e.getElementsByTagName("script")[0],i=e.createElement("script"),a=function(){o.parentNode.insertBefore(i,o)};i.type="text/javascript",i.async=!0,i.src="https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",a,!1):a()}(document,window,"yandex_metrika_callbacks")},function(e,t){},function(e,t){},function(e,t,n){"use strict";function o(e){h(Je,tt),qe(),Xe.css3&&(Xe.css3=Ie()),null!==Je?(c(Je,{height:"100%",position:"relative"}),m(Je,Qe),m(d("html"),nt)):Fe("error","Error! Fullpage.js needs to be initialized with a selector. For example: fullpage('#fullpage');"),z(!0),Pe(),Ae(),He();var t=u(Xe.sectionSelector);for(i=0;i<t.length;++i)m(t[i],rt);var n=u(Xe.slideSelector);for(i=0;i<n.length;++i)m(n[i],vt);Xe.navigation&&W();for(var o=u(lt),i=0;i<o.length;i++){var a=i,r=o[i],l=u(pt,r),f=l.length;if(a||null!==d(ct)||m(r,it),void 0!==Xe.anchors[a]&&(r.setAttribute("data-anchor",Xe.anchors[a]),p(r,it)&&me(Xe.anchors[a],a)),f>0){var v=100*f,g=100/f,y=r.innerHTML,w='<div class="'+mt+'"><div class="'+yt+'">'+y+"</div></div>";r.innerHTML=w,l=u(pt,r),s(d(wt,r),"width",v+"%"),Xe.controlArrows&&f>1&&V(r),Xe.slidesNavigation&&ke(r,f);for(var b=0;b<l.length;b++){s(l[b],"width",g+"%")}var S=d(ht,r);null!==typeof S?m(l[0],it):je(S)}}e()}function i(){for(var e=u(Lt),t=0;t<e.length;t++)L(e[t],"click onclick touchstart",le);A(Xe.autoScrolling,"internal");var n=d(ct),o=d(ht,n),i=f(d(ct));if(o&&(0!==i||0===i&&0!==f(o))&&je(o),Xe.navigation){s(Ue,"margin-top","-"+Ue.offsetHeight/2+"px");m(d("a",u("li",Ue)[f(d(ct))]),it)}U();var a=window.location.hash.replace("#","").split("/"),r=a[0];if(r.length){var l=d('[data-anchor="'+r+'"]');if(!Xe.animateAnchor&&l.length){if(Xe.autoScrolling)Re(l.offsetTop);else{Re(0),Me(r);var c=ie(l.offsetTop);k(c.element,c.options,0)}me(r,null),E(Xe.afterLoad)&&Xe.afterLoad.call(l,r,f(l)+1),h(n,it),m(l,it)}}Me(),_e(document,re,"DOMContentLoaded","DOMContentLoaded","DOMContentLoaded")}function a(e,t){"object"!==(void 0===t?"undefined":Ge(t))&&(t={});for(var n in t)e.hasOwnProperty(n)&&(e[n]=t[n]);return e}function r(e){return document.getElementById(e)}function l(e){return document.getElementsByTagName(e)[0]}function c(e,t){var n;for(n in t)t.hasOwnProperty(n)&&null!==n&&(e.style[n]=t[n]);return e}function s(e,t,n){e.style[t]=n}function d(e,t){return t=t||document,t.querySelector(e)}function u(e,t){return t=t||document,t.querySelectorAll(e)}function f(e){for(var t=0;e=e.previousSibling;)3==e.nodeType&&/^\s*$/.test(e.data)||t++;return t}function v(e,t){return void 0!==t?e.style.display=t?"block":"none":"block"==e.style.display?e.style.display="none":e.style.display="block",e}function p(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function h(e,t){if(e&&p(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n,"")}}function m(e,t){e&&!p(e,t)&&(e.className+=" "+t)}function g(e,t){return e&&(t(e)?e:g(e.parentNode,t))}function y(){return"innerWidth"in window?window.innerWidth:document.documentElement.offsetWidth}function w(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}function b(e){if(null===e||"object"!==(void 0===e?"undefined":Ge(e)))return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function S(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function E(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function L(e,t,n){for(var o=t.split(" "),i=0,a=o.length;i<a;i++)document.addEventListener?e.addEventListener(o[i],n,!1):e.attachEvent(o[i],n,!1)}function k(e,t,n,o){var i=N(e),a=t-i,r=0;Ke=!0;!function l(){if(Ke){var c=t;r+=20,c=Math.easeInOutCubic(r,i,a,n),C(e,c),r<n?setTimeout(l,20):void 0!==o&&o()}else r<n&&o()}()}function T(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function x(e,t){for(var n=[];e;e=e.nextSibling)1==e.nodeType&&e!=t&&n.push(e);return n}function B(e){return x(e.parentNode.firstChild,e)}function M(e){for(var t=e.nextSibling;t&&1!=t.nodeType;)t=t.nextSibling;return t}function I(e){for(var t=e.previousSibling;t&&1!=t.nodeType;)t=t.previousSibling;return t}function N(e){return e.self!=window&&p(e,mt)?e.scrollLeft:!Xe.autoScrolling||Xe.scrollBar?T():e.offsetTop}function C(e,t){!Xe.autoScrolling||Xe.scrollBar||e.self!=window&&p(e,mt)?e.self!=window&&p(e,mt)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function A(e,t){Ye("autoScrolling",e,t);var n=d(ct);if(Xe.autoScrolling&&!Xe.scrollBar)c(document.body,{overflow:"hidden",height:"100%"}),c(l("html"),{overflow:"hidden",height:"100%"}),H(Xe.recordHistory,"internal"),c(Je,{"-ms-touch-action":"none","touch-action":"none"}),n&&Re(n.offsetTop);else{c(document.body,{overflow:"visible",height:"100%"}),c(l("html"),{overflow:"visible",height:"100%"}),H(!1,"internal"),c(Je,{"-ms-touch-action":"","touch-action":""}),Re(0);var o=ie(n.offsetTop);o.element.scrollTo(0,o.options)}}function H(e,t){Ye("recordHistory",e,t)}function _(e,t){Ye("scrollingSpeed",e,t)}function P(e,t){Ye("fitToSection",e,t)}function z(e){e?Ce():Ne()}function O(e){Xe.keyboardScrolling=e}function j(){var e=I(d(ct));e&&ne(e,null,!0)}function R(){var e=M(d(ct));e&&ne(e,null,!1)}function D(e,t){_(0,"internal"),Y(e,t),_($e.scrollingSpeed,"internal")}function Y(e,t){var n=be(e);void 0!==t?Ee(e,t):n&&ne(n)}function q(){te("next")}function F(){te("prev")}function X(e){if(!p(Je,tt)){_t=!0,Ht=w();for(var t=u(lt),n=0;n<t.length;++n){var o=t[n],i=d(gt,o),a=u(pt,o);i&&a.length>1&&de(i,d(ht,i))}var r=d(ct);f(r)&&Re(r.offsetTop),_t=!1,E(Xe.afterResize)&&e&&Xe.afterResize.call(Je),E(Xe.afterReBuild)&&!e&&Xe.afterReBuild.call(Je)}}function V(e){var t=document.createElement("div");t.className=xt;var n=document.createElement("div");n.className=Mt;var o=d(gt,e);Xe.controlArrowColor,o.parentNode.appendChild(t),o.parentNode.appendChild(n),Xe.loopHorizontal||(d(Bt,e).style.display="none")}function W(){var e=document.createElement("div");e.setAttribute("id",st);var t=document.createElement("ul");e.appendChild(t),document.body.appendChild(e),Ue=d(dt),s(Ue,"color",Xe.navigationColor),m(Ue,Xe.navigationPosition),Xe.showActiveTooltip&&m(Ue,ft);for(var n="",o=0;o<u(lt).length;o++){var i="";Xe.anchors.length&&(i=Xe.anchors[o]),n=n+'<li><a href="#'+i+'"><span></span></a>';var a=Xe.navigationTooltips[o];void 0!==(void 0===a?"undefined":Ge(a))&&""!==a&&(n+='<div class="'+ut+" "+Xe.navigationPosition+'">'+a+"</div>"),n+="</li>"}var r=d("ul",Ue);r.innerHTML=r.innerHTML+n;for(var l=u(Et),c=0;c<l.length;c++)L(l[c],"click onclick touchstart",function(e){e=window.event||e||e.originalEvent,S(e);var t=f(this.parentNode);ne(u(lt)[t],null,!1)})}function U(){var e=d(ct);E(Xe.afterLoad)&&Xe.afterLoad.call(e,e.getAttribute("data-anchor"),f(e)+1),E(Xe.afterRender)&&Xe.afterRender.call(Je)}function K(){var e;if(!Xe.autoScrolling||Xe.scrollBar){for(var t=T(),n=0,o=Math.abs(t-u(lt)[0].offsetTop),i=u(lt),a=0;a<i.length;++a){var r=i[a],l=Math.abs(t-r.offsetTop);l<o&&(n=a,o=l)}e=u(lt)[n]}if(!Xe.autoScrolling||Xe.scrollBar){if(!p(e,it)){Rt=!0;var c=d(ct),s=f(c)+1,v=ge(e),g=e.getAttribute("data-anchor"),y=f(e)+1,w=d(ht,e);if(w)var b=w.getAttribute("data-anchor"),S=f(w);Pt&&(h(c,it),m(e,it),E(Xe.onLeave)&&Xe.onLeave.call(c,s,y,v),E(Xe.afterLoad)&&Xe.afterLoad.call(e,g,y),me(g,0),Xe.anchors.length&&(Ve=g,Te(S,b,g,y))),clearTimeout(Ot),Ot=setTimeout(function(){Rt=!1},100)}Xe.fitToSection&&(clearTimeout(jt),jt=setTimeout(function(){(Pt&&!Xe.autoScrolling||Xe.scrollBar)&&(f(d(ct))==f(e)&&(_t=!0),ne(e),_t=!1)},Xe.fitToSectionDelay))}}function $(e){"down"==e?R():j()}function J(e){var t=window.event||e||e.originalEvent;if(G(t)){Xe.autoScrolling&&S(e);var n=d(ct),o=u(gt,n);if(Pt&&!Nt){var i=Oe(t);qt=i.y,Ft=i.x,o&&Math.abs(Yt-Ft)>Math.abs(Dt-qt)?Math.abs(Yt-Ft)>y()/100*Xe.touchSensitivity&&(Yt>Ft?q():F()):Xe.autoScrolling&&Math.abs(Dt-qt)>w()/100*Xe.touchSensitivity&&(Dt>qt?$("down"):qt>Dt&&$("up"))}}}function G(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Q(e){var t=window.event||e||e.originalEvent;if(Xe.fitToSection&&(Ke=!1),G(t)){var n=Oe(t);Dt=n.y,Yt=n.x}}function Z(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),i=0;i<o.length;i++)n+=o[i];return Math.ceil(n/t)}function ee(e){var t=(new Date).getTime();if(Xe.autoScrolling){e=window.event||e||e.originalEvent;var n=e.wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,n));zt.length>149&&zt.shift(),zt.push(Math.abs(n)),Xe.scrollBar&&S(e);var i=t-Xt;if(Xt=t,i>200&&(zt=[]),Pt){Z(zt,10)>=Z(zt,70)&&$(o<0?"down":"up")}return!1}Xe.fitToSection&&(Ke=!1)}function te(e){var t=d(ct),n=d(gt,t);if(n&&!Nt){var o=d(ht,n),i=null;if(!(i="prev"===e?I(o):M(o))){if(!Xe.loopHorizontal)return;var a=B(o);i="prev"===e?a[a.length-1]:a[0]}Nt=!0,de(n,i)}}function ne(e,t,n){if(null!==e){var o={element:e,callback:t,isMovementUp:n,dtop:e.offsetTop,yMovement:ge(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:f(e),activeSlide:d(ht,e),activeSection:d(ct),leavingSection:f(d(ct))+1,localIsResizing:_t};if(!(f(o.activeSection)==o.sectionIndex&&!_t||Xe.scrollBar&&T()===o.dtop)){if(o.activeSlide)var i=o.activeSlide.getAttribute("data-anchor"),a=f(o.activeSlide);for(var r=u(lt),l=0;l<r.length;l++)h(r[l],it);m(e,it),Pt=!1,Te(a,i,o.anchorLink,o.sectionIndex),E(Xe.onLeave)&&!o.localIsResizing&&Xe.onLeave.call(o.activeSection,o.leavingSection,o.sectionIndex+1,o.yMovement),oe(o),Ve=o.anchorLink,me(o.anchorLink,o.sectionIndex)}}}function oe(e){if(Xe.css3&&Xe.autoScrolling&&!Xe.scrollBar){we("translate3d(0px, -"+e.dtop+"px, 0px)",!0),Xe.scrollingSpeed?setTimeout(function(){ae(e)},Xe.scrollingSpeed):ae(e)}else{var t=ie(e.dtop);k(t.element,t.options,Xe.scrollingSpeed,function(){ae(e)})}}function ie(e){var t={};return Xe.autoScrolling&&!Xe.scrollBar?(t.options=-e,t.element=d("."+Qe)):(t.options=e,t.element=window),t}function ae(e){E(Xe.afterLoad)&&!e.localIsResizing&&Xe.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),Pt=!0,E(e.callback)&&e.callback.call(this)}function re(){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];t&&Ee(t,n)}function le(e){var t=this;t.self==window&&(t=e.target||e.srcElement),p(t,kt)?F():q()}function ce(){if(!Rt){var e=window.location.hash.replace("#","").split("/"),t=e[0],n=e[1];if(t.length){var o=void 0===Ve,i=void 0===Ve&&void 0===n&&!Nt;(t&&t!==Ve&&!o||i||!Nt&&We!=n)&&Ee(t,n)}}}function se(e,t){switch(t){case 38:case 33:j();break;case 32:if(e){j();break}case 40:case 34:R();break;case 36:Y(1);break;case 35:Y(u(lt).length);break;case 37:F();break;case 39:q();break;default:return}}function de(e,t){var n=f(t),o=g(e,function(e){return p(e,rt)}),i=f(o),a=o.getAttribute("data-anchor"),r=d(St,o),l=Be(t),c=_t;if(Xe.onSlideLeave){var s=d(ht,o),y=f(s),w=ye(y,n);c||"none"===w||E(Xe.onSlideLeave)&&Xe.onSlideLeave.call(s,a,i+1,y,w,n)}for(var b=u(pt,o),S=0;S<b.length;S++)h(b[S],it);m(t,it),!Xe.loopHorizontal&&Xe.controlArrows&&(v(d(Bt,o),0!==n),v(d(It,o),!t.is(":last-child"))),p(o,it)&&Te(n,l,a,i);var L=function(){c||E(Xe.afterSlideLoad)&&Xe.afterSlideLoad.call(t,a,i+1,l,n),Nt=!1};if(Xe.css3){var T="translate3d(-"+Math.round(t.offsetLeft)+"px, 0px, 0px)",x=d(wt,e);fe(x,Xe.scrollingSpeed>0),De(x,T),setTimeout(function(){L()},Xe.scrollingSpeed,Xe.easing)}else k(e,Math.round(t.offsetLeft),Xe.scrollingSpeed,function(){L()});if(Xe.slidesNavigation){h(d(at,r),it);m(d("a",u("li",r)[n]),it)}}function ue(){if(Ct){if("text"!==document.activeElement.getAttribute("type")){var e=w();Math.abs(e-Ut)>20*Math.max(Ut,e)/100&&(X(!0),Ut=e)}}else clearTimeout(Wt),Wt=setTimeout(function(){X(!0)},350)}function fe(e){var t="all "+Xe.scrollingSpeed+"ms "+Xe.easingcss3;return h(e,et),c(e,{"-webkit-transition":t,transition:t}),e}function ve(e){return m(e,et)}function pe(e,t){if(Xe.navigation)if(h(d(at,Ue),it),e)m(d('a[href="#'+e+'"]',Ue),it);else{var n=u("li",Ue)[t];m(d("a",n),it)}}function he(e){if(Xe.menu){var t=d(Xe.menu);t&&(h(d(at,t),it),m(d('[data-menuanchor="'+e+'"]',t),it))}}function me(e,t){he(e),pe(e,t)}function ge(e){var t=f(d(ct)),n=f(e);return t==n?"none":t>n?"up":"down"}function ye(e,t){return e==t?"none":e>t?"left":"right"}function we(e,t){t?fe(Je):ve(Je),De(Je,e),setTimeout(function(){h(Je,et)},10)}function be(e){var t=d(lt+'[data-anchor="'+e+'"]');return t||(t=u(lt)[e-1]),t}function Se(e,t){var n=d(gt,t),o=d(pt+'[data-anchor="'+e+'"]',n);return n&&!o&&(o=u(pt,n)[e]),o}function Ee(e,t){var n=be(decodeURI(e));void 0===t&&(t=0),e===Ve||p(n,it)?Le(n,t):ne(n,function(){Le(n,t)})}function Le(e,t){if(void 0!==t){var n=d(gt,e),o=Se(t,e);o&&de(n,o)}}function ke(e,t){var n=document.createElement("div");n.className=bt;var o=document.createElement("ul");n.appendChild(o),e.appendChild(n);var i=d(St,e),a=d("ul",i);m(i,Xe.slidesNavPosition);for(var r="",l=0;l<t;l++)r+='<li><a href="#"><span></span></a></li>';a.innerHTML=a.innerHTML+r,s(i,"margin-left","-"+i.offsetWidth/2+"px"),m(d("a",u("li",i)[0]),it)}function Te(e,t,n,o){var i="";Xe.anchors.length&&(e?(void 0!==n&&(i=n),void 0===t&&(t=e),We=t,xe(i+"/"+t)):void 0!==e?(We=t,xe(n)):xe(n)),Me()}function xe(e){if(Xe.recordHistory)location.hash=e;else if(Ct||At)history.replaceState(void 0,void 0,"#"+e);else{var t=window.location.href.split("#")[0];window.location.replace(t+"#"+e)}}function Be(e){var t=e.getAttribute("data-anchor"),n=f(e);return t||(t=n),t}function Me(e){var t=d(ct),n=d(ht,t),o=t.getAttribute("data-anchor"),i=f(t),e=String(i);if(Xe.anchors.length&&(e=o),n){e=e+"-"+Be(n)}e=e.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?"+ot+"-[^\\s]+\\b","g");document.body.className=document.body.className.replace(a,""),m(document.body,ot+"-"+e)}function Ie(){var e,t=document.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var o in n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(n[o]));return document.body.removeChild(t),void 0!==e&&e.length>0&&"none"!==e}function Ne(){var e=d(Ze);document.addEventListener?(e.removeEventListener("mousewheel",ee,!1),e.removeEventListener("wheel",ee,!1)):e.detachEvent("onmousewheel",ee)}function Ce(){_e(d(Ze),ee,"mousewheel","onmousewheel","wheel")}function Ae(){_e(window,ue,"resize","onresize")}function He(){_e(window,K,"scroll","onscroll","onscroll")}function _e(e,t,n,o,i){e.addEventListener?(e.addEventListener(n,t,!1),void 0!==i&&e.addEventListener(i,t,!1)):e.attachEvent(o,t)}function Pe(){if(Ct||At){var e=d(Ze);if(document.addEventListener){var t=ze();e.removeEventListener("touchstart",Q),e.removeEventListener(t.down,Q),e.removeEventListener("touchmove",J),e.removeEventListener(t.move,J),L(e,"touchstart "+t.down,Q),L(e,"touchmove "+t.move,J)}}}function ze(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Oe(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,At&&G(e)&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function je(e,t){_(0,"internal"),void 0!==t&&(_t=!0),de(g(e,function(e){return p(e,mt)}),e),void 0!==t&&(_t=!1),_($e.scrollingSpeed,"internal")}function Re(e){if(Xe.scrollBar){var t=ie(e);C(t.element,t.options,0)}else if(Xe.css3){var n="translate3d(0px, -"+e+"px, 0px)";we(n,!1)}else s(Je,"top",-e+"px")}function De(e,t){c(e,{"-webkit-transform":t,"-moz-transform":t,"-ms-transform":t,transform:t})}function Ye(e,t,n){Xe[e]=t,"internal"!==n&&($e[e]=t)}function qe(){for(var e=0;e<Xe.anchors.length;e++){var t=Xe.anchors[e];(r("#"+t)||u('[name="'+t+'"]').length)&&Fe("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")}}function Fe(e,t){console&&console[e]&&console[e]("fullPage: "+t)}var Xe,Ve,We,Ue,Ke,$e,Je,Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qe="fullpage-wrapper",Ze="."+Qe,et="fp-notransition",tt="fp-destroyed",nt="fp-enabled",ot="fp-viewing",it="activeSection",at="."+it,rt="fp-section",lt="."+rt,ct=lt+at,st="fp-nav",dt="#"+st,ut="fp-tooltip",ft="fp-show-active",vt="fp-slide",pt="."+vt,ht=pt+at,mt="fp-slides",gt="."+mt,yt="fp-slidesContainer",wt="."+yt,bt="fp-slidesNav",St="."+bt,Et=St+" a",Lt=".fp-controlArrow",kt="fp-prev",Tt="."+kt,xt="fp-controlArrow "+kt,Bt=Lt+Tt,Mt="fp-controlArrow fp-next",It=Lt+".fp-next",Nt=!1,Ct=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),At="ontouchstart"in window||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ht=w(),_t=!1,Pt=!0,zt=[];Math.easeInOutCubic=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},window.initialize=function(e,t){Xe=a({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easingcss3:"ease",loopHorizontal:!0,touchSensitivity:5,keyboardScrolling:!0,recordHistory:!0,controlArrows:!0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},t),$e=b(Xe),Je=d(e),o(i)};var Ot,jt,Rt=!1,Dt=0,Yt=0,qt=0,Ft=0,Xt=(new Date).getTime();document.addEventListener?window.addEventListener("hashchange",ce,!1):window.attachEvent("onhashchange",ce);var Vt;document.onkeydown=function(e){clearTimeout(Vt);var t=document.activeElement,n=t.tagName;if("SELECT"!==n&&"INPUT"!==n&&Xe.keyboardScrolling&&Xe.autoScrolling){e=window.event||e||e.originalEvent;for(var o=e.charCode||e.keyCode,i=[40,38,32,33,34],a=0;a<i.length;a++)i[a]==o&&S(e);var r=e.shiftKey;Vt=setTimeout(function(){se(r,o)},150)}},null!==d(Et)&&L(d(Et),"click onclick touchstart",function(e){S(e);var t=g(this,function(e){return p(e1,rt)}),n=d(gt,t),o=g(this,function(e){return"li"===e.tagName}),i=f(o);de(n,u(pt,n)[i])});var Wt,Ut=Ht;initialize}]);