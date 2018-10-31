/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return calc; });\nfunction calc () {\r\n    let persons = document.querySelectorAll('.counter-block-input')[0],\r\n        restDays = document.querySelectorAll('.counter-block-input')[1],\r\n        place = document.getElementById('select'),\r\n        totalValue = document.getElementById('total'),\r\n        personsSum = 0,\r\n        daysSum = 0,\r\n        total = 0;\r\n        totalValue.innerHTML = 0;\r\n    let verifyInputNumbers = (elem) => {\r\n        elem.value = elem.value.replace(/[^1-9]/g, '');\r\n};    \r\n\r\n  \r\n    persons.addEventListener('input', function() {\r\n    \r\n        verifyInputNumbers(this);                  \r\n        personsSum = +this.value;\r\n        total = (daysSum + personsSum)*4000;\r\n        calcCondition(restDays.value);\r\n            \r\n         \r\n               \r\n    });\r\n        \r\n    restDays.addEventListener('input', function() {\r\n        verifyInputNumbers(this);\r\n        daysSum = +this.value;\r\n               \r\n        total = (daysSum + personsSum)*4000;\r\n        calcCondition(persons.value);\r\n           \r\n    \r\n    });\r\n    function calcCondition(e) {\r\n        if(e != Math.floor(e)) {\r\n            console.log(\"нельзя\");\r\n                    \r\n            persons.value = '';    \r\n        }  \r\n        if(restDays.value == '' || persons.value == '') {\r\n            totalValue.innerHTML = 0;\r\n        } else {\r\n            totalValue.innerHTML = total * place.options[place.selectedIndex].value;\r\n        }  \r\n    \r\n    }\r\n        place.addEventListener('change', function () {\r\n        if (persons.value == '' || restDays.value == '') {\r\n            totalValue.innerHTML = 0;\r\n        } else {\r\n            let a = total;\r\n            totalValue.innerHTML = a * this.options[this.selectedIndex].value;\r\n        }\r\n    });\r\n \r\n}\r\n\n\n//# sourceURL=webpack:///./js/parts/calc.js?");

/***/ }),

/***/ "./js/parts/forms.js":
/*!***************************!*\
  !*** ./js/parts/forms.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return forms; });\nfunction forms () {\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Мы с y вами свяжемс',\r\n        failure: 'Что то не так'\r\n\r\n    };\r\n\r\n    let form = document.querySelector('.main-form'),\r\n        input = form.getElementsByTagName('input')[0],\r\n        statusMessage = document.createElement('div');\r\n\r\n            \r\n\r\n        statusMessage.classList.add('status');\r\n\r\n        \r\n    let form2 = document.getElementById('form'),\r\n        input2 = form2.getElementsByTagName('input'), \r\n        statusMessage2 = document.createElement('div');\r\n\r\n\r\n            \r\n        \r\n    inp(input2[1]);\r\n    inp(input);\r\n\r\n\r\n    function inp(inpt) {\r\n        inpt.addEventListener('input', function() {\r\n            \r\n            this.value = \"+\" + this.value.replace(/[^1-9]/g, '');   \r\n        });\r\n    }\r\n\r\n    statusMessage2.classList.add('status');\r\n\r\n\r\n    function funkForm(formm) {\r\n            \r\n        formm.addEventListener('submit', function(event) {\r\n\r\n            let inputAll = formm.getElementsByTagName('input'); \r\n\r\n            event.preventDefault();\r\n            formm.appendChild(statusMessage2);\r\n            let request1 = new XMLHttpRequest();\r\n            request1.open('POST', 'server.php');\r\n            request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');\r\n            let formData2 = new FormData(formm);\r\n        \r\n            let obj2 = {};\r\n        \r\n            formData2.forEach(function(value, key){\r\n                obj2[key] = value;\r\n            });\r\n        \r\n            let json2 = JSON.stringify(obj2);\r\n        \r\n            request1.send(json2);\r\n                    \r\n            request1.addEventListener('readystatechange', function() {\r\n                if(request1.readyState < 4) {\r\n                    statusMessage2.innerHTML = message.loading;\r\n                } else if(request1.readyState === 4 && request1.status == 200) {\r\n                    statusMessage2.innerHTML = message.success;\r\n                } else {\r\n                    statusMessage2.innerHTML = message.failure;\r\n                }\r\n            });\r\n            for (let i = 0; i < inputAll.length; i++ ) {\r\n                inputAll[i].value = '';\r\n            }\r\n            \r\n        });   \r\n    }\r\n    funkForm(form2);\r\n    funkForm(form);\r\n}\r\n\n\n//# sourceURL=webpack:///./js/parts/forms.js?");

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return modal; });\nfunction modal () {\r\n    let more = document.querySelector(\".more\"),\r\n    overlay = document.querySelector(\".overlay\"),\r\n    close = document.querySelector(\".popup-close\");\r\n    \r\n\r\n    more.addEventListener('click', function() {\r\n        overlay.style.display = 'block';\r\n        this.classList.add('more-splash');\r\n        document.body.style.overflow = \"hidden\";\r\n    });\r\n    \r\n    close.addEventListener('click', function() {\r\n        overlay.style.display = 'none';\r\n        more.classList.remove('more-splash');\r\n        document.body.style.overflow = \"\";\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/parts/modal.js?");

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return slider; });\nfunction slider() {\r\n    // slider\r\n    let slideIndex = 1,//слайдер в текущий момент\r\n        slides = document.querySelectorAll('.slider-item'),\r\n        prev = document.querySelector('.prev'),\r\n        next = document.querySelector('.next'),\r\n        dotsWrap = document.querySelector('.slider-dots'),\r\n        dots = document.querySelectorAll('.dot');\r\n\r\n    showSlides(1);\r\n    \r\n    function showSlides(n) {\r\n        if (n > slides.length) {\r\n            slideIndex = 1;\r\n        }\r\n        if (n < 1) {\r\n            slideIndex = slides.length;\r\n        } \r\n\r\n        slides.forEach((item) => item.style.display = 'none');\r\n        // for (let i = 0; i < slides.length; i++) {\r\n        //     slides[i].style.display = 'none';\r\n        // }\r\n        dots.forEach((item) => item.classList.remove('dot-active'));\r\n\r\n        slides[slideIndex - 1].style.display = 'block';\r\n        dots[slideIndex - 1].classList.add('dot-active');\r\n          \r\n    }\r\n\r\n    function plusSlides(n) {\r\n        showSlides(slideIndex += n);\r\n    }\r\n\r\n    function currentSlide(n) {\r\n        showSlides(slideIndex = n);\r\n    }\r\n\r\n    prev.addEventListener('click', function() {\r\n        plusSlides(-1); \r\n    });\r\n\r\n    next.addEventListener('click', function() {\r\n        plusSlides(1);\r\n    });\r\n\r\n    dotsWrap.addEventListener('click', function(event) {\r\n        for (let i = 0; i < dots.length + 1; i++) {\r\n            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {\r\n                currentSlide(i);\r\n            }\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/parts/slider.js?");

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tabs; });\nfunction tabs () {\r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n        info = document.querySelector('.info-header'),\r\n        tabContent = document.querySelectorAll('.info-tabcontent'),\r\n        j = 0,\r\n        oneMone = document.querySelectorAll(\".description-btn\");\r\n    hideTabContent(1);\r\n        \r\n\r\n    function hideTabContent(a) {\r\n        for (let i = a; i < tabContent.length; i++) {\r\n            tabContent[i].classList.remove('show');\r\n            tabContent[i].classList.add('hide');\r\n        }\r\n    }\r\n\r\n    function showTabContent(b) {\r\n        if (tabContent[b].classList.contains('hide')) {\r\n\r\n            tabContent[b].classList.remove('hide');\r\n            tabContent[b].classList.add('show');\r\n        }\r\n    \r\n    }\r\n    oneMone[0].addEventListener('click', function() {\r\n        overlay.style.display = 'block';\r\n        this.classList.add('more-splash');\r\n        document.body.style.overflow = \"hidden\";\r\n    });\r\n    info.addEventListener('click', function(event) {\r\n        console.log(\"здесь тут 2\");\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n            for(let i = 0; i <tab.length; i++) {\r\n                \r\n                if(target == tab[i]) {\r\n                    j = i;\r\n                    hideTabContent(0);\r\n                    showTabContent(i);\r\n                    break;   \r\n                }\r\n            \r\n\r\n            }\r\n\r\n        }\r\n        oneMone[j].addEventListener('click', function() {\r\n            overlay.style.display = 'block';\r\n            this.classList.add('more-splash');\r\n            document.body.style.overflow = \"hidden\";\r\n        });\r\n    \r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/parts/tabs.js?");

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timer; });\nfunction timer() {\r\n    // таймер\r\n    let deadline = '2018-11-6';\r\n    //рассчёт времемени до дедлайна\r\n    function getTimeRemaining(endtime) {\r\n        let dataY = new Date().getTimezoneOffset(),\r\n         t = Date.parse(endtime)-Date.parse(new Date()) + (dataY * 60 * 1000),\r\n        seconds = Math.floor((t/1000) % 60),\r\n        minutes = Math.floor((t/1000/60) % 60),\r\n        hours = Math.floor(t/(1000*60*60));\r\n        function timeAdd(time) {\r\n            if (time < 10) {\r\n                time = '0' + time;\r\n            }\r\n        return time;    \r\n        }\r\n\r\n        seconds = timeAdd (seconds);\r\n        minutes = timeAdd (minutes);\r\n        hours = timeAdd (hours);    \r\n        return {\r\n            'total' : t,\r\n            'seconds' : seconds,\r\n            'minutes' : minutes,\r\n            'hours' : hours\r\n        };\r\n            \r\n    }\r\n    //делает динамику\r\n    function setClock (id, endtime) {//получение элементов со страницы\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes =  timer.querySelector('.minutes'),\r\n            seconds =  timer.querySelector('.seconds'),\r\n            timeInterval = setInterval(updateClock, 1000);\r\n   \r\n        function updateClock() {//добавление времени на страницу\r\n            let t = getTimeRemaining(endtime);\r\n            hours.textContent = t.hours;\r\n            minutes.textContent = t.minutes;\r\n            seconds.textContent = t.seconds;\r\n            if (t.total <= 0) {\r\n                clearInterval (timeInterval);\r\n                hours.textContent = '00';\r\n                minutes.textContent = '00';\r\n                seconds.textContent = '00';\r\n   \r\n            }\r\n        }    \r\n    }\r\n    setClock ('timer', deadline);\r\n    \r\n}\r\n\n\n//# sourceURL=webpack:///./js/parts/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/tabs */ \"./js/parts/tabs.js\");\n/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/timer */ \"./js/parts/timer.js\");\n/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/modal */ \"./js/parts/modal.js\");\n/* harmony import */ var _parts_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/forms */ \"./js/parts/forms.js\");\n/* harmony import */ var _parts_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/slider */ \"./js/parts/slider.js\");\n/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/calc */ \"./js/parts/calc.js\");\n\r\n \r\n \r\n \r\n \r\n \r\n \r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n\r\n    'use strict';\r\n\r\n     Object(_parts_tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n     Object(_parts_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n     Object(_parts_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n     Object(_parts_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n     Object(_parts_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n     Object(_parts_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });