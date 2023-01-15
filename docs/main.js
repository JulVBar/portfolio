!function(){var e,t={3691:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){var e=document.querySelector(".masonry");e.innerHTML="";var t=function(){function t(e,r,n,s,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.poster=r,this.category=n,this.link=s,this.filter=o}var r,s,o;return r=t,(s=[{key:"render",value:function(){var t=document.createElement("div");t.classList.add("masonry__wrapper"),t.classList.add("fadeIn"),t.setAttribute("data-filter",this.filter),t.innerHTML='\n            <a href="'.concat(this.link,'" class="masonry__block">\n                <div class="masonry__text">').concat(this.category,'</div>\n                <div class="masonry__image">\n                    <img src=').concat(this.poster," alt=").concat(this.name,'>\n                </div>\n                <div class="masonry__title">').concat(this.name,"</div>\n            </a>\n        "),e.append(t)}}])&&n(r.prototype,s),o&&n(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();[{name:"Лэндинг авторских букетов из сухоцветов",poster:"images/projects/flowers/flowers-poster.png",category:"Landing page",link:"flowers.html",filter:"lp"},{name:"Лэндинг сервиса эвакуации автомобилей",poster:"images/projects/evacuator/evacuator-poster.png",category:"Landing page",link:"evacuator.html",filter:"lp"},{name:"Ip Zone Angular Application",poster:"images/projects/ipzone/ipzone-poster.png",category:"Веб-приложение Angular",link:"ipzone.html",filter:"webapp"},{name:"Концепт автомобиля будущего Mercedes",poster:"images/projects/conceptcar/conceptcar-poster.png",category:"Landing page",link:"conceptcar.html",filter:"lp"},{name:"Лэндинг компании быстрых займов",poster:"images/projects/creditbank/creditbank-poster.jpg",category:"Landing page",link:"creditbank.html",filter:"lp"},{name:"Интернет-магазин натуральной косметики",poster:"images/projects/makeupstore/makeupstore-poster.gif",category:"Интернет-магазин",link:"makeupstore.html",filter:"multipage"},{name:"Приложение для чтения книг на Vue",poster:"images/projects/books/readbooks-poster.png",category:"Веб-приложение Vue",link:"readbooks.html",filter:"webapp"},{name:"Приложения для подбор тем интерфейса на React",poster:"images/projects/interfaceapp/interfaceapp-poster.png",category:"Веб-приложение React",link:"interfaceapp.html",filter:"webapp"}].forEach((function(e){var r=e.name,n=e.poster,s=e.category,o=e.link,i=e.filter;new t(r,n,s,o,i).render()}))};var o=function(){var e=document.querySelector(".switch"),t=document.querySelector(".switch__button");e&&e.addEventListener("click",(function(){e.classList.toggle("active"),"RU"==t.textContent?t.textContent="EN":t.textContent="RU"}))};var i=function(){var e=document.querySelectorAll(".circle-frame__icon"),t=0;setInterval((function(){e.forEach((function(e){e.classList.remove("active")})),t<3?(e[t].classList.add("active"),t++):t=0}),3e3)};var c=function(){var e=window.innerHeight/2;window.addEventListener("scroll",(function(){var t,r;t=document.querySelectorAll(".masonry__block"),r=window.scrollY,t.forEach((function(t){var n=e+t.parentNode.offsetHeight,s=t.getBoundingClientRect();if(s.y+window.pageYOffset<=r+n){var o=.1*(s.y-n);t.style.transform="translateY(".concat(o,"px)")}}))}))};var a=function(){var e=document.querySelectorAll(".categories__input"),t=document.querySelector(".header__button"),r=document.querySelector(".categories");e.forEach((function(e){e.addEventListener("click",(function(e){document.querySelectorAll(".masonry__wrapper").forEach((function(t){t.style.display="none",t.getAttribute("data-filter")!=e.target.getAttribute("id")&&"all"!=e.target.getAttribute("id")||(t.style.display="none",t.style.display="flex")}))}))})),t&&t.addEventListener("click",(function(){t.classList.toggle("active"),r.classList.toggle("open")}))};var u=function(){document.body.onload=function(){document.body.style.overflow="hidden",setTimeout((function(){var e=document.querySelector(".preloader");e&&!e.classList.contains("done")&&(e.classList.add("done"),document.body.style.overflow="",document.querySelectorAll("[data-animation]").forEach((function(e){return e.classList.add("start-animation")})),document.querySelector("#briks")&&document.querySelectorAll("[data-animation]").forEach((function(e){return e.classList.add("start-animation")})))}),200)}};var p=function(){var e=document.querySelector(".btn-to-top");e&&(window.addEventListener("scroll",(function(){0!==window.pageYOffset?e.classList.add("active"):e.classList.remove("active")})),null==e||e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})))};var l=function(){var e=document.querySelectorAll("[data-scroll-link]"),t=document.querySelectorAll("[data-scroll-item]"),r=document.querySelectorAll("section");document.querySelectorAll(".button__to__top"),t.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.firstChild.getAttribute("href").substring(1),r=document.getElementById(t),n=document.querySelector(".header").offsetHeight,s=r.getBoundingClientRect().top-n;window.scrollBy({top:s,behavior:"smooth"})}))})),window.addEventListener("scroll",(function(){r.forEach((function(t){var r=window.pageYOffset,n=t.offsetTop-100,s=t.offsetHeight+n,o=t.getAttribute("id");r>n&&r<s&&e.forEach((function(e){e.classList.remove("active"),e.getAttribute("href").substring(1)==o&&e.classList.add("active")}))}))}))};var f=function(){!function(e,t,r){var n=document.querySelector(e),s=document.querySelectorAll(t),o=document.querySelectorAll(r);function i(){o.forEach((function(e){e.classList.add("hide"),e.classList.remove("show","fadeIn")})),s.forEach((function(e){e.classList.remove("active")}))}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o[e].classList.add("show","fadeIn"),o[e].classList.remove("hide"),s[e].classList.add("active")}i(),c(),n.addEventListener("click",(function(e){var r=e.target;r&&r.classList.contains(t.replace(/\./,""))&&s.forEach((function(e,t){r==e&&(i(),c(t))}))}))}(".tabs__menu",".tabs__menu-item",".tabs__body")};var d=function(){document.querySelector(".workcircle-button-next")&&document.querySelector(".workcircle-button-next").addEventListener("click",(function(){document.querySelectorAll(".step").forEach((function(e){e.classList.contains("step-out")&&(e.classList.remove("step-out"),e.classList.add("step-6")),e.classList.contains("step-1")&&(e.classList.remove("step-1"),e.classList.add("step-out"),e.classList.remove("anim2-1"),e.classList.remove("anim3-2"),e.classList.remove("anim4-3"),e.classList.add("anim-out")),e.classList.contains("step-2")&&(e.classList.remove("step-2"),e.classList.add("step-1"),e.classList.remove("anim3-2"),e.classList.add("anim2-1")),e.classList.contains("step-3")&&(e.classList.remove("step-3"),e.classList.add("step-2"),e.classList.remove("anim4-3"),e.classList.add("anim3-2")),e.classList.contains("step-4")&&(e.classList.remove("step-4"),e.classList.add("step-3"),e.classList.remove("anim2-1"),e.classList.add("anim4-3")),e.classList.contains("step-5")&&(e.classList.remove("step-5"),e.classList.add("step-4")),e.classList.contains("step-6")&&(e.classList.remove("step-6"),e.classList.add("step-5"),e.classList.remove("anim-out"))}))}))};var g=function(){var e=document.querySelector(".briks-tab"),t=document.querySelectorAll(".briks-tab-item"),r=document.querySelector(".briks-button"),n=document.querySelectorAll("[data-animation]");e&&t&&e.addEventListener("click",(function(e){e.target.classList.contains("briks-tab-item")&&(t.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"))})),r&&r.addEventListener("click",(function(e){console.log("ff"),n.forEach((function(e){return e.classList.remove("start-animation")})),setTimeout((function(){n.forEach((function(e){return e.classList.add("start-animation")}))}),200)}))};var m=function(){var e=document.querySelector(".clock__hours"),t=document.querySelector(".clock__minutes"),r=document.querySelector(".clock__seconds"),n=function(e,t){e.style.transform="rotate(".concat(t,"deg)")};!function s(){var o=new Date,i=o.getHours()%12+o.getMinutes()/59,c=o.getMinutes(),a=o.getSeconds();c*=6,a*=6,n(e,i*=30),n(t,c),n(r,a),setTimeout(s,500)}()},v=r(3006);v.ZP.use([v.pt,v.W_,v.tl,v.Gk,v.Rv]);var b=function(){new v.ZP(".heroSwiper",{loop:!0,slidesPerView:1,spaceBetween:0,speed:600,centeredSlides:!0,navigation:{nextEl:".slider-btn-right",prevEl:".slider-btn-left"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4500,disableOnInteraction:!1,pauseOnMouseEnter:!0}});var e=new v.ZP(".workcircle-swiper",{slidesPerView:3,spaceBetween:0,grabCursor:!0,navigation:{nextEl:".workcircle-swiper-button-next",prevEl:".workcircle-swiper-button-prev"}}),t=document.querySelectorAll(".workcircle-swiper-slide");e.on("slideChange",(function(){var e;t.forEach((function(e){var t;return null===(t=e.firstElementChild)||void 0===t?void 0:t.classList.remove("changeanim")})),null===(e=t[swiper.activeIndex].firstElementChild)||void 0===e||e.classList.add("animation")}))};window.addEventListener("DOMContentLoaded",(function(){u(),p(),document.querySelector(".page--home")&&(m(),o(),b(),i(),l(),f(),d(),AOS.init()),document.querySelector(".portfolio")&&(c(),a(),s()),document.querySelector("[data-aos-init]")&&AOS.init(),document.querySelector("#briks")&&g()}));k(r(3592)),k(r(851)),k(r(9598)),k(r(710)),k(r(2862)),k(r(4108)),k(r(8292)),k(r(4023)),k(r(9465)),k(r(6262)),k(r(2155)),k(r(9905)),k(r(5498));function k(e){var t={};return e.keys().map((function(r,n){t[r.replace("./","")]=e(r)})),t}},7218:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/box-2-image.svg"},8457:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/cloud-bg.svg"},6322:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/crystal.jpg"},3161:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/dots.svg"},1541:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/eye.jpg"},780:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/homepage-bg.svg"},8065:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/mountains.jpg"},9494:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/newProjects-bg.svg"},489:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/orbit.svg"},6760:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/portfolio-bg.svg"},5779:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/books/readbooks-poster.png"},3441:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/books/readbooks-presentation.png"},3416:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_1.svg"},4707:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_1_ref.svg"},4281:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_2.svg"},9229:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_2_ref.svg"},1066:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_3.svg"},99:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_3_ref.svg"},4484:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_4.svg"},5508:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_4_ref.svg"},6795:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_5.svg"},2889:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_5_ref.svg"},5625:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_6.svg"},2903:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_6_ref.svg"},5901:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_7.svg"},2179:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_7_ref.svg"},9610:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_8.svg"},5092:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/ITEM_8_ref.svg"},8197:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/Lines.svg"},7362:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/arrow.svg"},3670:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/blueBg.jpg"},6520:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/building.svg"},4940:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/line1.svg"},6552:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/line2.svg"},7e3:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/line3.svg"},7216:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/briks/oak_tree.svg"},1546:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/conceptcar/conceptcar-poster.png"},3042:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/conceptcar/conceptcar-presentation.png"},6351:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/creditbank/creditbank-poster.jpg"},8345:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/creditbank/creditbank-presentation.png"},1013:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/evacuator/evacuator-poster.png"},1456:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/evacuator/evacuator-presentation.png"},1402:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/flowers/flowers-poster.png"},677:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/flowers/flowers-presentation.png"},3551:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/interfaceapp/interfaceapp-poster.png"},6197:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/interfaceapp/interfaceapp-presentation.png"},3510:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/ipzone/ipzone-poster.png"},8283:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/ipzone/ipzone-presentation.png"},8992:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/layout/comingsoon.jpg"},5499:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/layout/portfolio-blue.jpg"},6306:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/layout/portfolioblue-poster.jpg"},6517:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/layout/roxlab-poster.jpg"},610:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/layout/roxlab.jpg"},6582:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/Makeupstore-PP.png"},3025:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/cart.svg"},1856:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/catalog.png"},4856:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/favourite.jpg"},5452:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/footer.png"},4797:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/green-bg.svg"},6713:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/hero.png"},5366:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/leaf.svg"},9555:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/makeupstore-poster.gif"},2019:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/product.jpg"},3079:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/product.svg"},3412:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/shop.svg"},8076:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/shoping-cart.jpg"},7377:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/projects/makeupstore/soap.png"},3644:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/sidebar-bg.svg"},2289:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/title.png"},3364:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/title1.png"},2161:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/title2.png"},2080:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/title3.png"},1349:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/website.png"},9429:function(e,t,r){"use strict";r.r(t),t.default=r.p+"images/workcircleline.svg"},3592:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3592,e.exports=t},2862:function(e,t,r){var n={"./readbooks-poster.png":5779,"./readbooks-presentation.png":3441};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=2862},2155:function(e,t,r){var n={"./ITEM_1.svg":3416,"./ITEM_1_ref.svg":4707,"./ITEM_2.svg":4281,"./ITEM_2_ref.svg":9229,"./ITEM_3.svg":1066,"./ITEM_3_ref.svg":99,"./ITEM_4.svg":4484,"./ITEM_4_ref.svg":5508,"./ITEM_5.svg":6795,"./ITEM_5_ref.svg":2889,"./ITEM_6.svg":5625,"./ITEM_6_ref.svg":2903,"./ITEM_7.svg":5901,"./ITEM_7_ref.svg":2179,"./ITEM_8.svg":9610,"./ITEM_8_ref.svg":5092,"./Lines.svg":8197,"./arrow.svg":7362,"./blueBg.jpg":3670,"./building.svg":6520,"./line1.svg":4940,"./line2.svg":6552,"./line3.svg":7e3,"./oak_tree.svg":7216};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=2155},4023:function(e,t,r){var n={"./conceptcar-poster.png":1546,"./conceptcar-presentation.png":3042};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=4023},6262:function(e,t,r){var n={"./creditbank-poster.jpg":6351,"./creditbank-presentation.png":8345};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=6262},9905:function(e,t,r){var n={"./evacuator-poster.png":1013,"./evacuator-presentation.png":1456};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=9905},5498:function(e,t,r){var n={"./flowers-poster.png":1402,"./flowers-presentation.png":677};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=5498},710:function(e,t,r){var n={"./interfaceapp-poster.png":3551,"./interfaceapp-presentation.png":6197};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=710},4108:function(e,t,r){var n={"./ipzone-poster.png":3510,"./ipzone-presentation.png":8283};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=4108},9465:function(e,t,r){var n={"./comingsoon.jpg":8992,"./portfolio-blue.jpg":5499,"./portfolioblue-poster.jpg":6306,"./roxlab-poster.jpg":6517,"./roxlab.jpg":610};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=9465},8292:function(e,t,r){var n={"./Makeupstore-PP.png":6582,"./cart.svg":3025,"./catalog.png":1856,"./favourite.jpg":4856,"./footer.png":5452,"./green-bg.svg":4797,"./hero.png":6713,"./leaf.svg":5366,"./makeupstore-poster.gif":9555,"./product.jpg":2019,"./product.svg":3079,"./shop.svg":3412,"./shoping-cart.jpg":8076,"./soap.png":7377};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=8292},9598:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=9598,e.exports=t},851:function(e,t,r){var n={"./box-2-image.svg":7218,"./cloud-bg.svg":8457,"./crystal.jpg":6322,"./dots.svg":3161,"./eye.jpg":1541,"./homepage-bg.svg":780,"./mountains.jpg":8065,"./newProjects-bg.svg":9494,"./orbit.svg":489,"./portfolio-bg.svg":6760,"./sidebar-bg.svg":3644,"./title.png":2289,"./title1.png":3364,"./title2.png":2161,"./title3.png":2080,"./website.png":1349,"./workcircleline.svg":9429};function s(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=851}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,s,o){if(!r){var i=1/0;for(p=0;p<e.length;p++){r=e[p][0],s=e[p][1],o=e[p][2];for(var c=!0,a=0;a<r.length;a++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(c=!1,o<i&&(i=o));if(c){e.splice(p--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,s,o]},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,i=r[0],c=r[1],a=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(s in c)n.o(c,s)&&(n.m[s]=c[s]);if(a)var p=a(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return n.O(p)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.O(void 0,[638],(function(){return n(1202)}));var s=n.O(void 0,[638],(function(){return n(3691)}));s=n.O(s)}();