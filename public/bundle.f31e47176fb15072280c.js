!function(e){function t(s){if(n[s])return n[s].exports;var l=n[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function s(e){var t={ip:l,results:e};console.log(e);var n=new XMLHttpRequest;n.open("POST","/sendresult"),n.setRequestHeader("Content-Type","application/json"),n.send(JSON.stringify(t))}var l,o=n(1),i=(function(e){e&&e.__esModule}(o),new XMLHttpRequest);i.withCredentials=!0,i.open("GET","//jsonip.com",!0),i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var e=JSON.parse(i.responseText);l=e.ip,console.log(i.responseText),console.log(e),console.log(l)}},i.send(null);var c=[];document.getElementById("start-button").addEventListener("click",function(){document.getElementById("hello-screen").style.display="none",document.getElementById("test-screen-1").style.display="flex"});for(var r=document.querySelectorAll("#test-screen-1 .list-item"),u=0;u<r.length;u++)r[u].onclick=function(){document.getElementsByClassName("list-item_selected1").length<2&&(this.classList.toggle("list-item_selected1"),c.push(parseInt(this.id)),2==document.getElementsByClassName("list-item_selected1").length&&setTimeout(function(){document.getElementById("test-screen-1").style.display="none",document.getElementById("test-screen-2").style.display="flex"},300))};for(var d=document.querySelectorAll("#test-screen-2 .list-item"),u=0;u<d.length;u++)d[u].onclick=function(){document.getElementsByClassName("list-item_selected2").length<2&&(this.classList.toggle("list-item_selected2"),c.push(parseInt(this.id)),2==document.getElementsByClassName("list-item_selected2").length&&setTimeout(function(){document.getElementById("test-screen-2").style.display="none",document.getElementById("test-screen-3").style.display="flex"},300))};for(var a=document.querySelectorAll("#test-screen-3 .list-item"),u=0;u<a.length;u++)a[u].onclick=function(){document.getElementsByClassName("list-item_selected3").length<2&&(this.classList.toggle("list-item_selected3"),c.push(parseInt(this.id)),2==document.getElementsByClassName("list-item_selected3").length&&setTimeout(function(){document.getElementById("test-screen-3").style.display="none",document.getElementById("test-results").style.display="flex",s(c)},300))}},function(e,t){}]);