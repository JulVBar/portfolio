/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _js_createProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/createProjects */ \"./js/createProjects.js\");\n/* harmony import */ var _js_switch_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/switch-lang */ \"./js/switch-lang.js\");\n/* harmony import */ var _js_icons_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/icons-switch */ \"./js/icons-switch.js\");\n/* harmony import */ var _js_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/parallax */ \"./js/parallax.js\");\n/* harmony import */ var _js_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/categories */ \"./js/categories.js\");\n/* harmony import */ var _js_clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/clock */ \"./js/clock.js\");\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/swiper */ \"./js/swiper.js\");\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  if (document.querySelector('.page--home')) {\n    (0,_js_clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,_js_switch_lang__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_js_swiper__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    (0,_js_icons_switch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n\n  if (document.querySelector('.page--portfolio')) {\n    (0,_js_parallax__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_js_categories__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,_js_createProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n});\nvar images = importAll(__webpack_require__(\"./images sync \\\\.(png|jpe?g|svg|gif)$\"));\nvar projects = importAll(__webpack_require__(\"./images/projects sync \\\\.(png|jpe?g|svg|gif)$\"));\n\nfunction importAll(r) {\n  var images = {};\n  r.keys().map(function (item, index) {\n    images[item.replace('./', '')] = r(item);\n  });\n  return images;\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/categories.js":
/*!**************************!*\
  !*** ./js/categories.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction categories() {\n  var input = document.querySelectorAll('.categories__input');\n  input.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      var blocks = document.querySelectorAll('.masonry__wrapper');\n      blocks.forEach(function (el) {\n        el.style.display = \"none\";\n\n        if (el.getAttribute(\"data-filter\") == e.target.getAttribute(\"id\") || e.target.getAttribute(\"id\") == \"all\") {\n          el.style.display = \"none\";\n          el.style.display = \"flex\";\n          el.classList.add(\"fadeIn\");\n        }\n      });\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n//# sourceURL=webpack:///./js/categories.js?");

/***/ }),

/***/ "./js/clock.js":
/*!*********************!*\
  !*** ./js/clock.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction clock() {\n  var hours = document.querySelector('.clock__hours');\n  var minutes = document.querySelector('.clock__minutes');\n  var seconds = document.querySelector('.clock__seconds');\n\n  var rotation = function rotation(target, val) {\n    target.style.transform = \"rotate(\".concat(val, \"deg)\");\n  };\n\n  function setClock() {\n    var today = new Date();\n    var h = today.getHours() % 12 + today.getMinutes() / 59; // 22 % 12 = 10pm\n\n    var m = today.getMinutes(); // 0 - 59\n\n    var s = today.getSeconds(); // 0 - 59\n\n    h *= 30; // 12 * 30 = 360deg\n\n    m *= 6;\n    s *= 6; // 60 * 6 = 360deg\n\n    rotation(hours, h);\n    rotation(minutes, m);\n    rotation(seconds, s); // call every second\n\n    setTimeout(setClock, 500);\n  }\n\n  setClock();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clock);\n\n//# sourceURL=webpack:///./js/clock.js?");

/***/ }),

/***/ "./js/createProjects.js":
/*!******************************!*\
  !*** ./js/createProjects.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction createProjects() {\n  var masonry = document.querySelector('.masonry');\n  var project = document.querySelector('.project');\n  var projectContacts = document.querySelector('.project__connection');\n  var projectName = document.querySelector('.project__name');\n  var projectDep = document.querySelector('.project__deployment');\n  var projectGit = document.querySelector('.project__github');\n  var projectPicture = document.querySelector('.project__picture');\n  var projectDescr = document.querySelector('.project__description');\n  var projectTech = document.querySelector('.project__tech');\n  var projectPlug = document.querySelector('.project__plug');\n  var scroll = calcScroll();\n  masonry.innerHTML = '';\n\n  var Project = /*#__PURE__*/function () {\n    function Project(description, picture, deployment, filter, github, tech, plug) {\n      var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : \"Coming Soon...\";\n      var poster = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : \"images/projects/comingsoon.jpg\";\n      var category = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : \"Coming Soon...\";\n\n      _classCallCheck(this, Project);\n\n      this.name = name;\n      this.poster = poster;\n      this.category = category;\n      this.description = description;\n      this.picture = picture;\n      this.deployment = deployment;\n      this.filter = filter;\n      this.github = github;\n      this.tech = tech;\n      this.plug = plug;\n    }\n\n    _createClass(Project, [{\n      key: \"openProject\",\n      value: function openProject() {\n        project.classList.add('open');\n        document.body.classList.add('no-scroll');\n        document.body.style.marginRight = \"\".concat(scroll, \"px\");\n        projectName.innerHTML = \"\".concat(this.name);\n        projectDescr.innerHTML = \"\".concat(this.description);\n        projectPicture.setAttribute('src', \"\".concat(this.picture));\n        projectPicture.setAttribute('alt', \"\".concat(this.name));\n        projectDep.setAttribute('href', \"\".concat(this.deployment));\n        projectGit.setAttribute('href', \"\".concat(this.github));\n        createList(this.tech, projectTech);\n        createList(this.plug, projectPlug);\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        var _this = this;\n\n        var element = document.createElement('div');\n        element.classList.add(\"masonry__wrapper\");\n        element.setAttribute(\"data-filter\", this.filter);\n        element.innerHTML = \"\\n            <div class=\\\"masonry__block\\\">\\n                <div class=\\\"masonry__text\\\">\".concat(this.category, \"</div>\\n                <div class=\\\"masonry__title\\\">\").concat(this.name, \"</div>\\n                <div class=\\\"masonry__image\\\"><img src=\").concat(this.poster, \" alt=\").concat(this.name, \"></div>\\n            </div>\\n        \");\n        masonry.append(element);\n        element.addEventListener('click', function () {\n          if (_this.category != \"Coming Soon...\") {\n            _this.openProject();\n          }\n        });\n      }\n    }]);\n\n    return Project;\n  }();\n\n  function createList(array, list) {\n    list.innerHTML = '';\n\n    if (array) {\n      array.forEach(function (item) {\n        var element = document.createElement('li');\n        element.innerHTML = \"\".concat(item);\n        list.append(element);\n      });\n    }\n  }\n\n  function closeProject() {\n    project.classList.remove('open');\n    document.body.classList.remove('no-scroll');\n    document.body.style.marginRight = \"0px\";\n  }\n\n  project.addEventListener('click', function (e) {\n    if (e.target.getAttribute('data-close') == '') {\n      closeProject();\n    }\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === \"Escape\" && project.classList.contains('open')) {\n      closeProject();\n    }\n  });\n  project.addEventListener('click', function (e) {\n    if (e.target.classList.contains('project__button')) {\n      projectContacts.classList.toggle('active');\n    }\n\n    if (e.target.classList.contains('project__contacts')) {\n      projectContacts.classList.remove('active');\n    }\n  });\n\n  function calcScroll() {\n    var div = document.createElement('div');\n    div.style.width = '50px';\n    div.style.height = '50px';\n    div.style.overflowY = 'scroll';\n    div.style.visability = 'hidden';\n    document.body.appendChild(div);\n    var scrollWidth = div.offsetWidth - div.clientWidth;\n    div.remove();\n    return scrollWidth;\n  }\n\n  var projectsAll = [{\n    name: \"Корпоративный сайт для частной фирмы по эвакуации автомобилей\",\n    poster: \"images/projects/evacuator-poster.jpg\",\n    category: \"Корпоративный сайт\",\n    picture: \"images/projects/evacuator.png\",\n    description: \"Многостраничный сайт для частной фирмы по эвакуации автомобилей. Главная страница выполнена как целевая. Калькулятор, навигация и другой функционал написан на чистом JavaScript. Так же подключены плагины. Собственный прототип и дизайн макета. Адаптирован под все устройства.\",\n    deployment: \"https://julvbar.github.io/evacuator/\",\n    filter: \"company\",\n    github: \"https://github.com/JulVBar/evacuator\",\n    tech: [\"JavaScript\", \"HTML 5\", \"SCSS\", \"NPM\", \"Webpack\", \"BEM\"],\n    plug: [\"AOS\", \"Swiper\", \"Normalize.css\"]\n  }, {\n    name: \"Корпоративный сайт для частной фирмы по эвакуации автомобилей\",\n    poster: \"images/icon/gif.gif\",\n    category: \"Корпоративный сайт\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    filter: \"company\",\n    github: \"index.html\",\n    tech: [\"3\", \"4\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/evacuator-poster-book.jpg\",\n    category: \"Веб-приложение\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    filter: \"webapp\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"CSS\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"Интернет-магазин\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    filter: \"e-commerce\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"JavaScript\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/evacuator-poster-mak.jpg\",\n    category: \"E-commerce\",\n    filter: \"e-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"CSS\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"E-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"JavaScript\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"E-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"CSS\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"E-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"JavaScript\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"E-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"CSS\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"E-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"JavaScript\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Интернет-магазин отделочных материалов\",\n    poster: \"images/projects/project.jpg\",\n    category: \"E-commerce\",\n    picture: \"images/projects/project2.jpg\",\n    description: \"Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.\",\n    deployment: \"index.html\",\n    github: \"index.html\",\n    tech: [\"HTML\", \"CSS\"],\n    plug: [\"AOS\", \"Webpack\"]\n  }, {\n    name: \"Coming Soon...\",\n    poster: \"images/projects/project.jpg\",\n    category: \"Coming Soon...\"\n  }];\n  projectsAll.forEach(function (_ref) {\n    var description = _ref.description,\n        picture = _ref.picture,\n        deployment = _ref.deployment,\n        filter = _ref.filter,\n        github = _ref.github,\n        tech = _ref.tech,\n        plug = _ref.plug,\n        name = _ref.name,\n        poster = _ref.poster,\n        category = _ref.category;\n    new Project(description, picture, deployment, filter, github, tech, plug, name, poster, category).render();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createProjects);\n\n//# sourceURL=webpack:///./js/createProjects.js?");

/***/ }),

/***/ "./js/icons-switch.js":
/*!****************************!*\
  !*** ./js/icons-switch.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction iconsSwitch() {\n  var icons = document.querySelectorAll('.circle-frame__icon');\n  var i = 0;\n\n  function iconActive() {\n    icons.forEach(function (icon) {\n      icon.classList.remove('active');\n    });\n\n    if (i < 3) {\n      icons[i].classList.add('active');\n      i++;\n    } else {\n      i = 0;\n    }\n  }\n\n  var switchIconInterval = setInterval(iconActive, 3000);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (iconsSwitch);\n\n//# sourceURL=webpack:///./js/icons-switch.js?");

/***/ }),

/***/ "./js/parallax.js":
/*!************************!*\
  !*** ./js/parallax.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction portfolioParallax() {\n  var moveCoef = 0.1;\n  var screenCenter = window.innerHeight / 2;\n  window.addEventListener('scroll', function () {\n    parallaxBlocks();\n  }); // parallaxBlocks();\n\n  function parallaxBlocks() {\n    var blocks = document.querySelectorAll('.masonry__block');\n    var scrollTop = window.scrollY;\n    blocks.forEach(function (element) {\n      //середина экрна + высота контейнера паралакса\n      var startPoint = screenCenter + element.parentNode.offsetHeight; // 861\n\n      var coordinates = element.getBoundingClientRect();\n      var elementTop = coordinates.y + window.pageYOffset; //относительно документа = относительно окна + прокрутка, статич\n\n      if (elementTop <= scrollTop + startPoint) {\n        /* Вычисляем смещение */\n        var move = (coordinates.y - startPoint) * moveCoef;\n        element.style.transform = \"translateY(\".concat(move, \"px)\");\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (portfolioParallax);\n\n//# sourceURL=webpack:///./js/parallax.js?");

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);\n\nfunction swiperSlider() {\n  var swiperHero = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".heroSwiper\", {\n    loop: true,\n    slidesPerView: 1,\n    spaceBetween: 0,\n    centeredSlides: true,\n    navigation: {\n      nextEl: \".slider-btn-right\",\n      prevEl: \".slider-btn-left\"\n    },\n    pagination: {\n      el: \".swiper-pagination\",\n      clickable: true\n    },\n    autoplay: {\n      delay: 4500,\n      disableOnInteraction: false,\n      pauseOnMouseEnter: true\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (swiperSlider);\n\n//# sourceURL=webpack:///./js/swiper.js?");

/***/ }),

/***/ "./js/switch-lang.js":
/*!***************************!*\
  !*** ./js/switch-lang.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction switchLang() {\n  var switchTrigger = document.querySelector('.switch');\n  var switchButton = document.querySelector('.switch__button');\n  switchTrigger.addEventListener('click', function () {\n    switchTrigger.classList.toggle('active');\n\n    if (switchButton.textContent == \"RU\") {\n      switchButton.textContent = \"EN\";\n    } else {\n      switchButton.textContent = \"RU\";\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (switchLang);\n\n//# sourceURL=webpack:///./js/switch-lang.js?");

/***/ }),

/***/ "./images/1.jpg":
/*!**********************!*\
  !*** ./images/1.jpg ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/1.jpg\");\n\n//# sourceURL=webpack:///./images/1.jpg?");

/***/ }),

/***/ "./images/2.jpg":
/*!**********************!*\
  !*** ./images/2.jpg ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/2.jpg\");\n\n//# sourceURL=webpack:///./images/2.jpg?");

/***/ }),

/***/ "./images/3.jpg":
/*!**********************!*\
  !*** ./images/3.jpg ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/3.jpg\");\n\n//# sourceURL=webpack:///./images/3.jpg?");

/***/ }),

/***/ "./images/4.jpg":
/*!**********************!*\
  !*** ./images/4.jpg ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/4.jpg\");\n\n//# sourceURL=webpack:///./images/4.jpg?");

/***/ }),

/***/ "./images/6.jpg":
/*!**********************!*\
  !*** ./images/6.jpg ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/6.jpg\");\n\n//# sourceURL=webpack:///./images/6.jpg?");

/***/ }),

/***/ "./images/box-2-image.svg":
/*!********************************!*\
  !*** ./images/box-2-image.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/box-2-image.svg\");\n\n//# sourceURL=webpack:///./images/box-2-image.svg?");

/***/ }),

/***/ "./images/crystal.jpg":
/*!****************************!*\
  !*** ./images/crystal.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/crystal.jpg\");\n\n//# sourceURL=webpack:///./images/crystal.jpg?");

/***/ }),

/***/ "./images/eye.jpg":
/*!************************!*\
  !*** ./images/eye.jpg ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/eye.jpg\");\n\n//# sourceURL=webpack:///./images/eye.jpg?");

/***/ }),

/***/ "./images/homepage-bg.svg":
/*!********************************!*\
  !*** ./images/homepage-bg.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/homepage-bg.svg\");\n\n//# sourceURL=webpack:///./images/homepage-bg.svg?");

/***/ }),

/***/ "./images/mountains.jpg":
/*!******************************!*\
  !*** ./images/mountains.jpg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/mountains.jpg\");\n\n//# sourceURL=webpack:///./images/mountains.jpg?");

/***/ }),

/***/ "./images/orbit.svg":
/*!**************************!*\
  !*** ./images/orbit.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/orbit.svg\");\n\n//# sourceURL=webpack:///./images/orbit.svg?");

/***/ }),

/***/ "./images/portfolio-bg.svg":
/*!*********************************!*\
  !*** ./images/portfolio-bg.svg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/portfolio-bg.svg\");\n\n//# sourceURL=webpack:///./images/portfolio-bg.svg?");

/***/ }),

/***/ "./images/projects/comingsoon.jpg":
/*!****************************************!*\
  !*** ./images/projects/comingsoon.jpg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/comingsoon.jpg\");\n\n//# sourceURL=webpack:///./images/projects/comingsoon.jpg?");

/***/ }),

/***/ "./images/projects/dddd.jpg":
/*!**********************************!*\
  !*** ./images/projects/dddd.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/dddd.jpg\");\n\n//# sourceURL=webpack:///./images/projects/dddd.jpg?");

/***/ }),

/***/ "./images/projects/evacuator-poster-book.jpg":
/*!***************************************************!*\
  !*** ./images/projects/evacuator-poster-book.jpg ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/evacuator-poster-book.jpg\");\n\n//# sourceURL=webpack:///./images/projects/evacuator-poster-book.jpg?");

/***/ }),

/***/ "./images/projects/evacuator-poster.jpg":
/*!**********************************************!*\
  !*** ./images/projects/evacuator-poster.jpg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/evacuator-poster.jpg\");\n\n//# sourceURL=webpack:///./images/projects/evacuator-poster.jpg?");

/***/ }),

/***/ "./images/projects/evacuator.png":
/*!***************************************!*\
  !*** ./images/projects/evacuator.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/evacuator.png\");\n\n//# sourceURL=webpack:///./images/projects/evacuator.png?");

/***/ }),

/***/ "./images/projects/project.jpg":
/*!*************************************!*\
  !*** ./images/projects/project.jpg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/project.jpg\");\n\n//# sourceURL=webpack:///./images/projects/project.jpg?");

/***/ }),

/***/ "./images/projects/project2.jpg":
/*!**************************************!*\
  !*** ./images/projects/project2.jpg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/projects/project2.jpg\");\n\n//# sourceURL=webpack:///./images/projects/project2.jpg?");

/***/ }),

/***/ "./images/sidebar-bg.svg":
/*!*******************************!*\
  !*** ./images/sidebar-bg.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/sidebar-bg.svg\");\n\n//# sourceURL=webpack:///./images/sidebar-bg.svg?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./images/projects sync \\.(png|jpe?g|svg|gif)$":
/*!*******************************************************************!*\
  !*** ./images/projects/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./comingsoon.jpg\": \"./images/projects/comingsoon.jpg\",\n\t\"./dddd.jpg\": \"./images/projects/dddd.jpg\",\n\t\"./evacuator-poster-book.jpg\": \"./images/projects/evacuator-poster-book.jpg\",\n\t\"./evacuator-poster.jpg\": \"./images/projects/evacuator-poster.jpg\",\n\t\"./evacuator.png\": \"./images/projects/evacuator.png\",\n\t\"./project.jpg\": \"./images/projects/project.jpg\",\n\t\"./project2.jpg\": \"./images/projects/project2.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images/projects sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/projects/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./images sync \\.(png|jpe?g|svg|gif)$":
/*!**********************************************************!*\
  !*** ./images/ sync nonrecursive \.(png|jpe?g|svg|gif)$ ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./1.jpg\": \"./images/1.jpg\",\n\t\"./2.jpg\": \"./images/2.jpg\",\n\t\"./3.jpg\": \"./images/3.jpg\",\n\t\"./4.jpg\": \"./images/4.jpg\",\n\t\"./6.jpg\": \"./images/6.jpg\",\n\t\"./box-2-image.svg\": \"./images/box-2-image.svg\",\n\t\"./crystal.jpg\": \"./images/crystal.jpg\",\n\t\"./eye.jpg\": \"./images/eye.jpg\",\n\t\"./homepage-bg.svg\": \"./images/homepage-bg.svg\",\n\t\"./mountains.jpg\": \"./images/mountains.jpg\",\n\t\"./orbit.svg\": \"./images/orbit.svg\",\n\t\"./portfolio-bg.svg\": \"./images/portfolio-bg.svg\",\n\t\"./sidebar-bg.svg\": \"./images/sidebar-bg.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images sync \\\\.(png|jpe?g|svg|gif)$\";\n\n//# sourceURL=webpack:///./images/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_swiper_swiper_esm_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_swiper_swiper_esm_js"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;