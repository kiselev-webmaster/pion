!function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);d.length;)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;o.push([5,1]),n()}([,,function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(4)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(7);n(0);const a=n(0);n(0);window.jQuery=a;n(1);new r.a("div.home-slider",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".home-slider-wrap .button-next",prevEl:".home-slider-wrap .button-prev"}}),new r.a("div.home-reviews",{loop:!0,slidesPerView:3,pagination:{el:".home-reviews-wrap .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var o=new r.a(".gallery-thumbs",{spaceBetween:10,slidesPerView:3,centeredSlides:!0,slideToClickedSlide:!0});new r.a(".product-gallery",{spaceBetween:10,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:o}});a(document).ready((function(){a("ul.tabs li").click((function(){var e=a(this).attr("data-tab");a("ul.tabs li").removeClass("current"),a(".tab-content").removeClass("current"),a(this).addClass("current"),a("#"+e).addClass("current")})),a('[data-fancybox="gallery"]').fancybox({}),a("[data-fancybox]").fancybox({})})),window.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll("input[type=tel]"),(function(e){var t;function n(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var n="+7 (___) ___ ____",r=0,a=n.replace(/\D/g,""),o=this.value.replace(/\D/g,""),i=n.replace(/[_\d]/g,(function(e){return r<o.length?o.charAt(r++)||a.charAt(r):e}));-1!=(r=i.indexOf("_"))&&(r<5&&(r=3),i=i.slice(0,r));var l=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=i),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1)}))}));n(2)}]);