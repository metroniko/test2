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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return calc; });\nfunction calc () {\r\n    let price = document.querySelectorAll(\".glazing_price_btn\"),\r\n        calc = document.querySelector(\".popup_calc\"),\r\n        calcClose = calc.getElementsByTagName(\"button\")[0],\r\n        widthCalc = calc.getElementsByTagName(\"input\"),\r\n        balconIcons = document.querySelectorAll(\".balcon_icons\")[0],\r\n        bigImgAll = document.querySelector(\".big_img\"),\r\n        bigImg = bigImgAll.getElementsByTagName(\"img\"),\r\n        calcNext = calc.getElementsByTagName(\"button\")[1],\r\n        calcChoose = document.querySelectorAll(\".popup_calc_profile\")[0],\r\n        place = calcChoose.getElementsByTagName('select')[0],\r\n        checkboxCustom = calcChoose.getElementsByTagName(\"input\"),\r\n        checkboxCustomExit = calcChoose.getElementsByTagName(\"button\")[0],\r\n        checkboxCustomNext = calcChoose.getElementsByTagName(\"button\")[1],\r\n        calcChooseEnd = document.querySelector(\".popup_calc_end\"),\r\n        calcChooseEndInput1 = calcChooseEnd.querySelectorAll(\"input\")[1],\r\n        calcChooseEndInputAll = calcChooseEnd.querySelectorAll(\"input\"),\r\n        calcChooseEndForm = calcChooseEnd.querySelector(\".form\"),\r\n        calcChooseEndExit = calcChooseEnd.querySelector(\".popup_calc_end_close\"),\r\n        statusMessage = document.createElement('div'),\r\n        minPic = balconIcons.getElementsByTagName(\"a\");\r\n\r\n    \r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Мы с y вами свяжемся',\r\n        failure: 'Что то не так'\r\n    }\r\n    function countPrice () {\r\n        for ( let i = 0; i < price.length; i++) {\r\n            price[i].addEventListener(\"click\", function(e) {\r\n        \r\n                showModal(calc);\r\n            });\r\n\r\n        }\r\n    }\r\n    function showModal(e) {//функция для показывания модального окна\r\n        e.style.display = \"block\";\r\n        e.classList.remove('hide');\r\n        e.classList.add('show');\r\n        document.body.style.overflow = \"hidden\";\r\n\r\n    }\r\n    function hideModal(e)  {//функция для скрытия модального окна\r\n        e.classList.remove('show');\r\n        e.classList.add('hide');\r\n        e.style.display = \"none\";\r\n        document.body.style.overflow = '';\r\n    }\r\n    countPrice ();\r\n    calcMove(minPic[0]);\r\n    calcMove(minPic[1]);\r\n    calcMove(minPic[2]);\r\n    calcMove(minPic[3]);\r\n    \r\n    function calcMove (pikch){//увеличение и скрытие картинок\r\n        pikch.addEventListener('click', function(event) {\r\n            event.preventDefault();\r\n            let target = event.target;\r\n            \r\n            \r\n            let pictureCopy = pikch.getElementsByTagName(\"img\")[0];\r\n           \r\n\r\n            for(let i = 0; i < minPic.length; i++) {\r\n                if (target == minPic[i].getElementsByTagName(\"img\")[0]) {\r\n                    hideBigPic(0);\r\n                    ShowBigPic(i);\r\n                }\r\n\r\n            }\r\n         \r\n            for(let i = 0; i < minPic.length; i++) {\r\n                let pictureCopy = minPic[i].getElementsByTagName(\"img\")[0];\r\n                pictureCopy.style.height = \"55px\";\r\n                pictureCopy.style.width = \"75px\";\r\n\r\n            }\r\n            pictureCopy.style.height = \"70px\";\r\n            pictureCopy.style.width = \"120px\";\r\n            bigImgAll.style.margin = \"auto\";\r\n            bigImgAll.style.height = \"250px\";\r\n            bigImgAll.style.width = \"300px\";\r\n\r\n            for(let i = 0; i < minPic.length; i++) {\r\n                bigImg[i].style.verticalalign = \"middle\" ; \r\n            }\r\n                  \r\n        });\r\n    }\r\n\r\n    function hideBigPic(k) {\r\n        for(let i = k; i < minPic.length; i++) {\r\n            bigImg[i].classList.remove('show');\r\n            bigImg[i].classList.add('hide');\r\n        }\r\n\r\n    }\r\n    function ShowBigPic(i) {\r\n        bigImg[i].classList.remove('hide');\r\n        bigImg[i].classList.add('show');\r\n    }\r\n   \r\n\r\n    let appData = {\r\n        material:\"tree\",\r\n    }\r\n    //для заполнения \r\n\r\n    \r\n    widthCalc[0].addEventListener('input', function() {//ввод ширины \r\n        this.value = this.value.replace(/[^0-9]|^0{1}/g, '');\r\n        let item = widthCalc[0].value;\r\n        appData.width = item; \r\n    });\r\n    function clearInput (a) {\r\n        for (let i = 0; i < a.length; i++ ) {\r\n            a[i].value = '';\r\n        }\r\n    }\r\n\r\n    widthCalc[1].addEventListener('input', function() {//ввод высоты\r\n        this.value = this.value.replace(/[^0-9]|^0{1}/g, '');\r\n        let item = widthCalc[1].value;\r\n        appData.height = item;\r\n    });\r\n    calcClose.addEventListener('click', function() {//очистка при нажатии крестика \r\n        clearApp();\r\n        hideModal(calc);\r\n        clearInput(widthCalc);\r\n    });\r\n\r\n    calcNext.addEventListener('click', function() {\r\n        if(widthCalc[1].value != ''&& widthCalc[1].value != '') {\r\n            hideModal(calc);\r\n            showModal(calcChoose);  \r\n        }    \r\n    });\r\n\r\n    place.addEventListener('change', function () {\r\n        \r\n        appData.material = this.options[this.selectedIndex].value;\r\n      \r\n    });\r\n    \r\n    checkboxCustom[0].addEventListener(\"click\", function(event) {//проверка холодного бокса\r\n        checkboxCustom[0].checked = true;\r\n        checkboxCustom[1].checked = false;\r\n        \r\n        appData.weather = \"cold\";\r\n    })\r\n    checkboxCustom[1].addEventListener(\"click\", function(event) {//проверка горячего бокса\r\n        checkboxCustom[1].checked = true;\r\n        checkboxCustom[0].checked = false;\r\n        \r\n        appData.weather = \"hot\";\r\n    \r\n    })\r\n    function checkboxCustomClear() {\r\n        checkboxCustom[0].checked = false;\r\n        checkboxCustom[1].checked = false;\r\n    }\r\n    checkboxCustomExit.addEventListener(\"click\", function() {\r\n        clearApp();\r\n        hideModal(calcChoose);\r\n      \r\n        checkboxCustomClear()\r\n        clearInput(widthCalc);\r\n\r\n    })\r\n    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером\r\n        inpt.addEventListener('input', function() {\r\n            \r\n            this.value = \"+\" + this.value.replace(/[^0-9]/g, '');   \r\n        });\r\n    }\r\n    \r\n    checkboxCustomNext.addEventListener(\"click\", function() {\r\n        if(checkboxCustom[0].checked != false || checkboxCustom[1].checked != false ) {\r\n            hideModal(calcChoose);\r\n            showModal(calcChooseEnd);\r\n        }\r\n    })\r\n    \r\n    function clearApp() {//очистка объекта\r\n        for(let key in appData) {\r\n            appData[key] = null;\r\n        }\r\n    }\r\n\r\n    \r\n    checkInput(calcChooseEndInput1);   \r\n    \r\n    calcChooseEndForm.addEventListener('submit', function(event) {\r\n            \r\n\r\n        let inputAll = calcChooseEndForm.getElementsByTagName('input');//получение того же инпута для его последующей очистки \r\n\r\n        event.preventDefault();//отмена стандортного поведениябраузера\r\n        calcChooseEndForm.appendChild(statusMessage);\r\n        let request1 = new XMLHttpRequest();//создание запроса\r\n        request1.open('POST', 'server.php');//настройка ajax запроса\r\n        request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');\r\n        let formData = new FormData(calcChooseEndForm);\r\n    \r\n        let obj = {};\r\n    \r\n        formData.forEach(function(value, key){//ключ в вёрстке\r\n            obj[key] = value;\r\n        });\r\n        obj[\"sds\"] = appData; \r\n        let json = JSON.stringify(obj);\r\n    \r\n        request1.send(json);\r\n                \r\n        request1.addEventListener('readystatechange', function() {\r\n            \r\n            if(request1.readyState < 4) {\r\n                statusMessage.innerHTML = message.loading;\r\n            } else if(request1.readyState === 4 && request1.status == 200) {\r\n                statusMessage.innerHTML = message.success;\r\n            } else {\r\n                statusMessage.innerHTML = message.failure;\r\n            }\r\n        });\r\n        for (let i = 0; i < inputAll.length; i++ ) {\r\n            inputAll[i].value = '';\r\n        }\r\n        clearApp();    \r\n    });\r\n    calcChooseEndExit.addEventListener(\"click\", function() {\r\n        hideModal(calcChooseEnd);\r\n        clearApp();\r\n        clearInput(calcChooseEndInputAll);\r\n        checkboxCustomClear()\r\n        clearInput(widthCalc);\r\n    })\r\n}\n\n//# sourceURL=webpack:///./js/parts/calc.js?");

/***/ }),

/***/ "./js/parts/forms6.js":
/*!****************************!*\
  !*** ./js/parts/forms6.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return forms6; });\nfunction forms6 () {\r\n     ///////////////////////////6 форм на странице\r\n     let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Мы с y вами свяжемся',\r\n        failure: 'Что то не так'\r\n\r\n    };\r\n    let showHead = document.getElementsByClassName(\"popup_engineer\")[0],\r\n        inputPopup = showHead.querySelectorAll(\".form-control\"),//2 инпута в модальном окне (вызов звмера)\r\n        popupForm = showHead.querySelector(\".form\"),// всплывающая форма\r\n        mainForm = document.querySelectorAll(\".form\")[0],\r\n        mainForm2 = document.querySelectorAll(\".form\")[1], //форма на самой странице\r\n        mainForm3 = document.querySelectorAll(\".form\")[5],\r\n        modalPopup = document.querySelectorAll(\".popup\")[0],\r\n        timePopup = modalPopup.getElementsByClassName(\"form\")[0],\r\n        inputMain = mainForm.getElementsByTagName(\"input\"),\r\n        inputMain2 = mainForm2.getElementsByTagName(\"input\"),\r\n        inputMain3 = mainForm3.getElementsByTagName(\"input\"),\r\n        inputTimePopup = modalPopup.getElementsByTagName(\"input\"),\r\n        statusMessage = document.createElement('div');\r\n\r\n    \r\n    \r\n    \r\n\r\n    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером\r\n        inpt.addEventListener('input', function() {\r\n            \r\n            this.value = \"+\" + this.value.replace(/[^0-9]/g, '');   \r\n        });\r\n    }\r\n    statusMessage.classList.add('status');\r\n    checkInput(inputPopup[1]);\r\n    checkInput(inputMain[1]);\r\n    checkInput(inputMain2[1]);\r\n    checkInput(inputMain2[1]);\r\n    checkInput(inputMain3[1]);\r\n    checkInput(inputTimePopup[1]);\r\n\r\n\r\n    function funkForm(formm) {//функция для отправки ajax запроса\r\n            \r\n        formm.addEventListener('submit', function(event) {\r\n            \r\n\r\n            let inputAll = formm.getElementsByTagName('input');//получение того же инпута для его последующей очистки \r\n\r\n            event.preventDefault();//отмена стандортного поведениябраузера\r\n            formm.appendChild(statusMessage);\r\n            let request1 = new XMLHttpRequest();//создание запроса\r\n            request1.open('POST', 'server.php');//настройка ajax запроса\r\n            request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');\r\n            let formData = new FormData(formm);\r\n        \r\n            let obj = {};\r\n        \r\n            formData.forEach(function(value, key){//ключ в вёрстке\r\n                obj[key] = value;\r\n            });\r\n        \r\n            let json = JSON.stringify(obj);\r\n        \r\n            request1.send(json);\r\n                    \r\n            request1.addEventListener('readystatechange', function() {\r\n                \r\n                if(request1.readyState < 4) {\r\n                    statusMessage.innerHTML = message.loading;\r\n                } else if(request1.readyState === 4 && request1.status == 200) {\r\n                    statusMessage.innerHTML = message.success;\r\n                } else {\r\n                    statusMessage.innerHTML = message.failure;\r\n                }\r\n            });\r\n            for (let i = 0; i < inputAll.length; i++ ) {\r\n                inputAll[i].value = '';\r\n            }\r\n            \r\n        });   \r\n    }\r\n    funkForm(popupForm);\r\n    funkForm(mainForm);\r\n    // funkForm(mainForm2);\r\n    funkForm(mainForm3);\r\n    funkForm(timePopup);\r\n}\n\n//# sourceURL=webpack:///./js/parts/forms6.js?");

/***/ }),

/***/ "./js/parts/pictureBig.js":
/*!********************************!*\
  !*** ./js/parts/pictureBig.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pictureBig; });\nfunction pictureBig () {\r\n    ///////////////////////увеличение картинок \r\n   let pictureBlock = document.querySelectorAll(\".col-lg-3\"),//с 4 по 11\r\n   body = document.getElementsByTagName(\"body\")[0], \r\n   modalNew = document.createElement('div'),\r\n   modalNext = document.createElement('div'),\r\n   image = document.createElement('img');\r\n\r\nlet modalNext2 = document.createElement('div'); \r\n \r\n\r\n\r\nfunction showModal(e) {//функция для показывания модального окна\r\n    e.style.display = \"block\";\r\n    e.classList.remove('hide');\r\n    e.classList.add('show');\r\n    document.body.style.overflow = \"hidden\";\r\n\r\n}\r\nfunction hideModal(e)  {//функция для скрытия модального окна\r\n    e.classList.remove('show');\r\n    e.classList.add('hide');\r\n    e.style.display = \"none\";\r\n    document.body.style.overflow = '';\r\n}\r\n\r\n\r\n\r\nfunction bigPicture(params) {\r\n    params.addEventListener(\"click\", function() {\r\n        event.preventDefault();\r\n        modalNew.classList.add(\"popup_engineer\");\r\n   \r\n        modalNext.classList.add(\"popup_dialog\");\r\n        modalNext2.classList.add(\"popup_content\");\r\n        modalNext2.style.height = \"640px\";\r\n        modalNext2.style.width = \"820px\";\r\n        modalNext2.style.background = \"rgba(0, 0, 0, 0)\";\r\n        modalNext2.margin = \"auto\";\r\n        modalNew.style.textAlign = 'center';\r\n        \r\n        \r\n        body.appendChild(modalNew);\r\n        modalNew.appendChild(modalNext);\r\n        modalNext.appendChild(modalNext2);\r\n        let pictureCopy = params.getElementsByTagName(\"a\")[0].getAttribute('href');//копирование элемента\r\n            \r\n        modalNext2.appendChild(image);\r\n        image.src = pictureCopy;\r\n        \r\n        showModal(modalNew);\r\n        \r\n    });\r\n    window.addEventListener(\"click\", function(e) {\r\n        if (e.target == modalNew || e.target == modalNext2 ) {\r\n            hideModal(modalNew);    \r\n        }    \r\n    });    \r\n}\r\nbigPicture(pictureBlock[4]);\r\nbigPicture(pictureBlock[5]);\r\nbigPicture(pictureBlock[6]);\r\nbigPicture(pictureBlock[7]);\r\nbigPicture(pictureBlock[8]);\r\nbigPicture(pictureBlock[9]);\r\nbigPicture(pictureBlock[10]);\r\nbigPicture(pictureBlock[11]);\r\n}\n\n//# sourceURL=webpack:///./js/parts/pictureBig.js?");

/***/ }),

/***/ "./js/parts/popup_engineer.js":
/*!************************************!*\
  !*** ./js/parts/popup_engineer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return popup_engineer; });\nfunction popup_engineer () {\r\n    \r\n    let modalHead = document.getElementsByClassName(\"header_btn_wrap\")[0],//верхняя кнопка\r\n        popupClose = document.getElementsByClassName(\"popup_close\")[1],\r\n        statusMessage = document.createElement('div'),  \r\n        showHead = document.getElementsByClassName(\"popup_engineer\")[0];//модальное окно popup_engineer\r\n\r\n   \r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Мы с y вами свяжемся',\r\n        failure: 'Что то не так'\r\n    }\r\n    \r\n    modalHead.addEventListener('click', function() {\r\n        showModal(showHead);\r\n    });\r\n    popupClose.addEventListener('click', function() {\r\n        hideModal(showHead);\r\n\r\n    });\r\n    window.addEventListener(\"click\", function(e) {\r\n        if (e.target == showHead) {\r\n            hideModal(showHead);\r\n        }\r\n    });\r\n    function showModal(e) {//функция для показывания модального окна\r\n        e.style.display = \"block\";\r\n        e.classList.remove('hide');\r\n        e.classList.add('show');\r\n        document.body.style.overflow = \"hidden\";\r\n\r\n    }\r\n    function hideModal(e)  {//функция для скрытия модального окна\r\n        e.classList.remove('show');\r\n        e.classList.add('hide');\r\n        e.style.display = \"none\";\r\n        document.body.style.overflow = '';\r\n    }    \r\n    \r\n    //не получается зафиксировать экран\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./js/parts/popup_engineer.js?");

/***/ }),

/***/ "./js/parts/popup_modal.js":
/*!*********************************!*\
  !*** ./js/parts/popup_modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return popup_modal; });\nfunction popup_modal () {\r\n    /////////////////////////////////////модальные окна popup\r\n    let modalPopup = document.querySelectorAll(\".popup\")[0],\r\n    popupCloseCall = document.getElementsByClassName(\"popup_close\")[0],\r\n    numberButton = document.querySelectorAll(\".phone_link\");\r\n    \r\n    orderCall(numberButton[0]);\r\n    function showModal(e) {//функция для показывания модального окна\r\n        e.style.display = \"block\";\r\n        e.classList.remove('hide');\r\n        e.classList.add('show');\r\n        document.body.style.overflow = \"hidden\";\r\n\r\n    }\r\n    function hideModal(e)  {//функция для скрытия модального окна\r\n        e.classList.remove('show');\r\n        e.classList.add('hide');\r\n        e.style.display = \"none\";\r\n        document.body.style.overflow = '';\r\n    }\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Мы с y вами свяжемся',\r\n        failure: 'Что то не так'\r\n    }\r\n\r\n    numberButton[1].addEventListener(\"click\", function(e) {\r\n        e.preventDefault();\r\n        showModal(modalPopup);\r\n    });\r\n    \r\n    popupCloseCall.addEventListener(\"click\", function() {\r\n        hideModal(modalPopup);\r\n    }); \r\n    function orderCall(e) {\r\n        e.addEventListener(\"click\", function() {\r\n            showModal(modalPopup);\r\n        });\r\n\r\n    }\r\n    window.addEventListener(\"click\", function(e) {\r\n        if (e.target == modalPopup) {\r\n            hideModal(modalPopup);\r\n        }\r\n    });\r\n    \r\n    //не получается зафиксировать экран\r\n    \r\n}\n\n//# sourceURL=webpack:///./js/parts/popup_modal.js?");

/***/ }),

/***/ "./js/parts/second60.js":
/*!******************************!*\
  !*** ./js/parts/second60.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return second60; });\nfunction second60 () {\r\n     //////////////Модальное окно при посещении сайта более 60 секунд\r\n    let modalPopup = document.querySelectorAll(\".popup\")[0];\r\n     setTimeout(timerMinute, 60000);\r\n     function timerMinute() {\r\n         document.body.style.overflow = \"hidden\";\r\n         modalPopup.style.display = \"block\";\r\n         modalPopup.classList.remove('hide');\r\n         modalPopup.classList.add('show');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/parts/second60.js?");

/***/ }),

/***/ "./js/parts/tabsOtd.js":
/*!*****************************!*\
  !*** ./js/parts/tabsOtd.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tabsOtd; });\nfunction tabsOtd () {\r\n//табы\r\n    let info = document.querySelectorAll(\".decoration_slider\")[0],//дочерний для табов\r\n    tab = document.querySelectorAll(\".decoration_item\"),//таб\r\n    tabContentAll = document.querySelectorAll(\".decoration_content\")[0],\r\n    tabContent = tabContentAll.getElementsByClassName(\"row\")[0],//инфа на табе\r\n    internal = document.querySelector(\".internal\"),\r\n    rising = document.querySelector(\".rising\"),\r\n    roof = document.querySelector(\".roof\"),\r\n    external = document.querySelector(\".external\"),\r\n    formRising = rising.querySelector(\".form\"),\r\n    formRoof = roof.querySelector(\".form\"),\r\n    formExternal = external.querySelector(\".form\"),\r\n    formInternal = internal.querySelector(\".form\"),\r\n    inputRising = rising.querySelectorAll(\"input\")[1],\r\n    inputRoof = roof.querySelectorAll(\"input\")[1],\r\n    inputExternal = external.querySelectorAll(\"input\")[1],\r\n    statusMessage = document.createElement('div'),\r\n    inputInternal = internal.querySelectorAll(\"input\")[1];\r\n    let mass = [internal,rising,roof,external];    \r\n\r\n  \r\n\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Мы с y вами свяжемся',\r\n        failure: 'Что то не так'\r\n\r\n    };\r\n    \r\n    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером\r\n        inpt.addEventListener('input', function() {\r\n            \r\n            this.value = \"+\" + this.value.replace(/[^0-9]/g, '');   \r\n        });\r\n    }\r\n    function funkForm(formm) {//функция для отправки ajax запроса\r\n            \r\n        formm.addEventListener('submit', function(event) {\r\n            \r\n\r\n            let inputAll = formm.getElementsByTagName('input');//получение того же инпута для его последующей очистки \r\n\r\n            event.preventDefault();//отмена стандортного поведениябраузера\r\n            formm.appendChild(statusMessage);\r\n            let request1 = new XMLHttpRequest();//создание запроса\r\n            request1.open('POST', 'server.php');//настройка ajax запроса\r\n            request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');\r\n            let formData = new FormData(formm);\r\n        \r\n            let obj = {};\r\n        \r\n            formData.forEach(function(value, key){//ключ в вёрстке\r\n                obj[key] = value;\r\n            });\r\n        \r\n            let json = JSON.stringify(obj);\r\n        \r\n            request1.send(json);\r\n                    \r\n            request1.addEventListener('readystatechange', function() {\r\n                \r\n                if(request1.readyState < 4) {\r\n                    statusMessage.innerHTML = message.loading;\r\n                } else if(request1.readyState === 4 && request1.status == 200) {\r\n                    statusMessage.innerHTML = message.success;\r\n                } else {\r\n                    statusMessage.innerHTML = message.failure;\r\n                }\r\n            });\r\n            for (let i = 0; i < inputAll.length; i++ ) {\r\n                inputAll[i].value = '';\r\n            }\r\n            \r\n        });   \r\n    }\r\n\r\n    checkInput(inputRising);\r\n    checkInput(inputRoof);\r\n    checkInput(inputExternal);\r\n    checkInput(inputInternal);\r\n\r\n    funkForm(formInternal);\r\n    funkForm(formRising);\r\n    funkForm(formRoof);\r\n    funkForm(formExternal);\r\n    info.addEventListener(\"click\", function(e) {\r\n    let target = e.target;\r\n    \r\n    for(let i = 0; i < tab.length; i++) {\r\n        if (target == tab[i].getElementsByTagName(\"div\")[0] || target == tab[i].getElementsByTagName(\"a\")[0]) {\r\n            // tab[i].getElementsByTagName(\"a\")[0].classList.add(\"focus\");\r\n            // tab[i].getElementsByTagName(\"a\")[0].classList.add(\"hover\");\r\n            tab[i].getElementsByTagName(\"a\")[0].focus();\r\n            removeClassAfter_click();\r\n            addClassAfter_click(i);\r\n            hideTabContent();\r\n            showTabContent(i);\r\n        }\r\n    }\r\n    \r\n\r\n    });\r\n    function removeClassAfter_click() {\r\n    for(let i = 0; i < tab.length; i++) {\r\n        tab[i].getElementsByTagName(\"div\")[0].classList.remove(\"after_click\");\r\n    }\r\n    }\r\n    function addClassAfter_click(i) {\r\n    tab[i].getElementsByTagName(\"div\")[0].classList.add(\"after_click\");\r\n    }\r\n    function hideTabContent() {\r\n    for(let i = 0; i < tab.length; i++) {\r\n        mass[i].classList.remove(\"show\");\r\n        mass[i].classList.add(\"hide\");\r\n    }\r\n    }\r\n    function showTabContent(i) {\r\n    mass[i].classList.remove(\"hide\");\r\n    mass[i].classList.add(\"show\");\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/parts/tabsOtd.js?");

/***/ }),

/***/ "./js/parts/tabsWind.js":
/*!******************************!*\
  !*** ./js/parts/tabsWind.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tabsWind; });\nfunction tabsWind () {\r\n    ////////////////////////Табы с окнами\r\n    let windowPicrute = document.querySelectorAll(\".row\"),//c 3 по 7 включительно\r\n        glazingSlider = document.querySelectorAll(\".glazing_slider\")[0],\r\n        windowTab = document.querySelectorAll(\".glazing_block\");\r\n    \r\n    \r\n    // windowWithTabs(windowTab[0]);\r\n    // windowWithTabs(windowTab[1]);\r\n    // windowWithTabs(windowTab[2]);\r\n    // windowWithTabs(windowTab[3]);\r\n    // windowWithTabs(windowTab[4]);\r\n\r\n    // function windowWithTabs(a) {\r\n    //     a.addEventListener(\"click\", function(e) {\r\n    //         let target = e.target;\r\n    \r\n    //         for(let i = 0; i < windowTab.length; i++) {\r\n    //             if (target == windowTab[i].querySelector(\"a\") || target == windowTab[i] || target == windowTab[i].querySelector(\"img\") ) {\r\n    //                 windowTab[i].querySelector(\"a\").focus();\r\n    //                 removeClass();\r\n    //                 addClass(i);\r\n    //                 hideWindow(i);\r\n    //                 showWindow(i+3)\r\n    //             }\r\n    //         }\r\n    //     });\r\n    // }\r\n    function removeClass() {\r\n        for(let i = 0; i < windowTab.length; i++) {\r\n            windowTab[i].querySelector(\"a\").classList.remove(\"active\");\r\n        }\r\n    }\r\n    function addClass(i) {\r\n        windowTab[i].querySelector(\"a\").classList.add(\"active\");\r\n    }\r\n    function hideWindow() {\r\n        for(let i = 3; i < (windowTab.length + 3); i++) {\r\n            windowPicrute[i].classList.remove(\"show\");\r\n            windowPicrute[i].classList.add(\"hide\");\r\n        }\r\n    }\r\n    function showWindow(i) {\r\n        windowPicrute[i].classList.remove(\"hide\");\r\n        windowPicrute[i].classList.add(\"show\");\r\n    }\r\n    glazingSlider.addEventListener(\"click\", function(e) {\r\n        let target = e.target;\r\n       \r\n        for(let i = 0; i < windowTab.length; i++) {\r\n            if (target == windowTab[i].querySelector(\"a\") || target == windowTab[i] || target == windowTab[i].querySelector(\"img\") ) {\r\n                windowTab[i].querySelector(\"a\").focus();\r\n                removeClass();\r\n                addClass(i);\r\n                hideWindow(i);\r\n                showWindow(i+3)\r\n            }\r\n        }\r\n        \r\n\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./js/parts/tabsWind.js?");

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return timer; });\nfunction timer () {\r\n     ////////////////////////////// таймер\r\n     let deadline = '2019-7-4';\r\n     //рассчёт времемени до дедлайна\r\n     function getTimeRemaining(endtime) {\r\n         let dataY = new Date().getTimezoneOffset(),\r\n             t = Date.parse(endtime)-Date.parse(new Date()) + (dataY * 60 * 1000),\r\n             seconds = Math.floor((t/1000) % 60),\r\n             minutes = Math.floor((t/1000/60) % 60),\r\n             hours = Math.floor(t/(1000*60*60) % 24),\r\n             days = Math.floor(t/(1000*60*60*24));\r\n         function timeAdd(time) {\r\n             if (time < 10) {\r\n                 time = '0' + time;\r\n             }\r\n         return time;    \r\n         }\r\n \r\n         seconds = timeAdd (seconds);\r\n         minutes = timeAdd (minutes);\r\n         hours = timeAdd (hours);\r\n         days = timeAdd(days)    \r\n         return {\r\n             'total' : t,\r\n             'seconds' : seconds,\r\n             'minutes' : minutes,\r\n             'hours' : hours,\r\n             'days' : days\r\n         };\r\n             \r\n     }\r\n     //делает динамику\r\n     function setClock (id, endtime) {//получение элементов со страницы\r\n         let timer = document.getElementById(id),\r\n             hours = timer.querySelector('.hours'),\r\n             minutes =  timer.querySelector('.minutes'),\r\n             seconds =  timer.querySelector('.seconds'),\r\n             days = timer.querySelector('.days'),\r\n             timeInterval = setInterval(updateClock, 1000);\r\n    \r\n         function updateClock() {//добавление времени на страницу\r\n             let t = getTimeRemaining(endtime);\r\n             hours.textContent = t.hours;\r\n             minutes.textContent = t.minutes;\r\n             seconds.textContent = t.seconds;\r\n             days.textContent = t.days;\r\n             if (t.total <= 0) {\r\n                 clearInterval (timeInterval);\r\n                 days.textContent = '00';\r\n                 hours.textContent = '00';\r\n                 minutes.textContent = '00';\r\n                 seconds.textContent = '00';\r\n    \r\n             }\r\n         }    \r\n     }\r\n     setClock ('timer', deadline);\r\n}\n\n//# sourceURL=webpack:///./js/parts/timer.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_forms6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/forms6 */ \"./js/parts/forms6.js\");\n/* harmony import */ var _parts_pictureBig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/pictureBig */ \"./js/parts/pictureBig.js\");\n/* harmony import */ var _parts_popup_engineer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/popup_engineer */ \"./js/parts/popup_engineer.js\");\n/* harmony import */ var _parts_popup_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/popup_modal */ \"./js/parts/popup_modal.js\");\n/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/calc */ \"./js/parts/calc.js\");\n/* harmony import */ var _parts_second60__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/second60 */ \"./js/parts/second60.js\");\n/* harmony import */ var _parts_tabsOtd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/tabsOtd */ \"./js/parts/tabsOtd.js\");\n/* harmony import */ var _parts_tabsWind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/tabsWind */ \"./js/parts/tabsWind.js\");\n/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/timer */ \"./js/parts/timer.js\");\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n\r\n    'use strict';\r\n\r\n    Object(_parts_forms6__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    Object(_parts_pictureBig__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    Object(_parts_popup_engineer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    Object(_parts_popup_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    Object(_parts_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); \r\n    Object(_parts_second60__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    Object(_parts_tabsOtd__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n    Object(_parts_tabsWind__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n    Object(_parts_timer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });