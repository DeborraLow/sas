!function(e){function t(s){if(n[s])return n[s].exports;var l=n[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function s(e){console.log(e);var t=new XMLHttpRequest;t.open("POST","/sendresult"),t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}function l(){return Math.max(document.documentElement.clientHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight)}var i=n(1),o=(function(e){e&&e.__esModule}(i),[]),c=document.getElementById("progress"),m=document.getElementById("progress__bar"),d=document.getElementsByClassName("background")[0],u=document.getElementsByClassName("screen__filter")[0];document.getElementById("start-button").addEventListener("click",function(){document.getElementById("hello-screen").style.display="none",document.getElementById("test-screen-1").style.display="flex",c.style.display="block",d.style.minHeight=l()+"px",u.style.minHeight=l()+"px"});for(var r=document.querySelectorAll("#test-screen-1 .list-item"),y=0;y<r.length;y++)r[y].onclick=function(){document.getElementsByClassName("list-item_selected1").length<2&&(this.classList.toggle("list-item_selected1"),o.push(parseInt(this.id)),2==document.getElementsByClassName("list-item_selected1").length&&setTimeout(function(){document.getElementById("test-screen-1").style.display="none",document.getElementById("test-screen-2").style.display="flex",d.style.minHeight=l()+"px",u.style.minHeight=l()+"px",m.style.width="33.3%"},300))};for(var a=document.querySelectorAll("#test-screen-2 .list-item"),y=0;y<a.length;y++)a[y].onclick=function(){document.getElementsByClassName("list-item_selected2").length<2&&(this.classList.toggle("list-item_selected2"),o.push(parseInt(this.id)),2==document.getElementsByClassName("list-item_selected2").length&&(setTimeout(function(){document.getElementById("test-screen-2").style.display="none",document.getElementById("test-screen-3").style.display="flex"},300),d.style.minHeight=l()+"px",u.style.minHeight=l()+"px",m.style.width="66.6%"))};for(var g=document.querySelectorAll("#test-screen-3 .list-item"),y=0;y<g.length;y++)g[y].onclick=function(){document.getElementsByClassName("list-item_selected3").length<2&&(this.classList.toggle("list-item_selected3"),o.push(parseInt(this.id)),2==document.getElementsByClassName("list-item_selected3").length&&(m.style.width="100%",setTimeout(function(){c.style.display="none"},1500),setTimeout(function(){document.getElementById("test-screen-3").style.display="none",document.getElementById("test-results").style.display="block",d.style.minHeight=l()+"px",u.style.minHeight=l()+"px",s(o)},300)))}},function(e,t){}]);