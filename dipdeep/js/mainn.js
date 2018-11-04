window.addEventListener('DOMContentLoaded', function() {
    // 'use strict';
    // //табы
    // let info = document.querySelectorAll(".decoration_slider")[0],//дочерний для табов
    //     tab = document.querySelectorAll(".decoration_item"),//таб
    //     tabContent = document.querySelectorAll(".decoration_content");//инфа на табе
    // console.log(info);
    // console.log(tab);
    // console.log(tabContent);
     
    // function hideTabContent(a) { // скрытие табов
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add('hide');
    //     }
    // }
  
    //    function showTabContent(b) {//показывает табы
    //     if (tabContent[b].classList.contains('hide')) {

    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');
    //     }
       
    // }
    // info.addEventListener('click', function(event) {
        
    //     console.log(event.target);
    //     let target = event.target;
        
                
    //     if (target && target.classList.contains('decoration_item')) {
    //         console.log("здесь тут 3");
    //         for(let i = 0; i < tab.length; i++) {
                
    //             if(target == tab[i]) {
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //                 break;   
    //             }
    //         }
    //     }
       
   
    // });
    /////////////////////////вызов окна наверху popup_engineer

    let modalHead = document.getElementsByClassName("header_btn_wrap")[0],//верхняя кнопка
        popupClose = document.getElementsByClassName("popup_close")[1],  
        showHead = document.getElementsByClassName("popup_engineer")[0];//модальное окно popup_engineer

    console.log(modalHead);
    console.log(showHead);
    
    modalHead.addEventListener('click', function() {
        showModal(showHead);
    });
    popupClose.addEventListener('click', function() {
        hideModal(showHead);

    });
    window.addEventListener("click", function(e) {
        if (e.target == showHead) {
            hideModal(showHead);
        }
    });
    function showModal(e) {//функция для показывания модального окна
        e.style.display = "block";
        e.classList.remove('hide');
        e.classList.add('show');
        document.body.style.overflow = "hidden";

    }
    function hideModal(e)  {//функция для скрытия модального окна
        e.classList.remove('show');
        e.classList.add('hide');
        e.style.display = "none";
        document.body.style.overflow = '';
    }    
    
    //не получается зафиксировать экран

    
    /////////////////////////////////////модальные окна popup
    let modalPopup = document.querySelectorAll(".popup")[0],
        popupCloseCall = document.getElementsByClassName("popup_close")[0],
        numberButton = document.querySelectorAll(".phone_link");
    console.log(modalPopup);
    console.log(numberButton);
    orderCall(numberButton[0]);

    numberButton[1].addEventListener("click", function(e) {
        e.preventDefault();
        showModal(modalPopup);
    });
    
    popupCloseCall.addEventListener("click", function() {
        hideModal(modalPopup);
    }); 
    function orderCall(e) {
        e.addEventListener("click", function() {
            showModal(modalPopup);
        });

    }
    window.addEventListener("click", function(e) {
        if (e.target == modalPopup) {
            hideModal(modalPopup);
        }
    });
    
    //не получается зафиксировать экран

    //////////////Модальное окно при посещении сайта более 60 секунд
    setTimeout(timerMinute, 60000);
    function timerMinute() {
        document.body.style.overflow = "hidden";
        modalPopup.style.display = "block";
        modalPopup.classList.remove('hide');
        modalPopup.classList.add('show');
    }
    ///////////////////////////6 форм на странице
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с y вами свяжемся',
        failure: 'Что то не так'

    };
    let inputPopup = showHead.querySelectorAll(".form-control"),//2 инпута в модальном окне (вызов звмера)
        popupForm = showHead.querySelector(".form"),// всплывающая форма
        mainForm = document.querySelectorAll(".form")[0],
        mainForm2 = document.querySelectorAll(".form")[1], //форма на самой странице
        mainForm3 = document.querySelectorAll(".form")[5],
        timePopup = modalPopup.getElementsByClassName("form")[0],
        inputMain = mainForm.getElementsByTagName("input"),
        inputMain2 = mainForm2.getElementsByTagName("input"),
        inputMain3 = mainForm3.getElementsByTagName("input"),
        inputTimePopup = modalPopup.getElementsByTagName("input"),
        statusMessage = document.createElement('div');

    console.log(mainForm3);
    
    

    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером
        inpt.addEventListener('input', function() {
            
            this.value = "+" + this.value.replace(/[^1-9]/g, '');   
        });
    }
    statusMessage.classList.add('status');
    checkInput(inputPopup[1]);
    checkInput(inputMain[1]);
    checkInput(inputMain2[1]);
    checkInput(inputMain2[1]);
    checkInput(inputMain3[1]);
    checkInput(inputTimePopup[1]);


    function funkForm(formm) {//функция для отправки ajax запроса
            
        formm.addEventListener('submit', function(event) {
            

            let inputAll = formm.getElementsByTagName('input');//получение того же инпута для его последующей очистки 

            event.preventDefault();//отмена стандортного поведениябраузера
            formm.appendChild(statusMessage);
            let request1 = new XMLHttpRequest();//создание запроса
            request1.open('POST', 'server.php');//настройка ajax запроса
            request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
            let formData = new FormData(formm);
        
            let obj = {};
        
            formData.forEach(function(value, key){//ключ в вёрстке
                obj[key] = value;
            });
        
            let json = JSON.stringify(obj);
        
            request1.send(json);
                    
            request1.addEventListener('readystatechange', function() {
                
                if(request1.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request1.readyState === 4 && request1.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            for (let i = 0; i < inputAll.length; i++ ) {
                inputAll[i].value = '';
            }
            
        });   
    }
    funkForm(popupForm);
    funkForm(mainForm);
    funkForm(mainForm2);
    funkForm(mainForm3);
    funkForm(timePopup);
    ////////////////////////////// таймер
    let deadline = '2019-7-4';
    //рассчёт времемени до дедлайна
    function getTimeRemaining(endtime) {
        let dataY = new Date().getTimezoneOffset(),
            t = Date.parse(endtime)-Date.parse(new Date()) + (dataY * 60 * 1000),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60) % 24),
            days = Math.floor(t/(1000*60*60*24));
        function timeAdd(time) {
            if (time < 10) {
                time = '0' + time;
            }
        return time;    
        }

        seconds = timeAdd (seconds);
        minutes = timeAdd (minutes);
        hours = timeAdd (hours);
        days = timeAdd(days)    
        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours,
            'days' : days
        };
            
    }
    //делает динамику
    function setClock (id, endtime) {//получение элементов со страницы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes =  timer.querySelector('.minutes'),
            seconds =  timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);
   
        function updateClock() {//добавление времени на страницу
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            days.textContent = t.days;
            if (t.total <= 0) {
                clearInterval (timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
   
            }
        }    
    }
    setClock ('timer', deadline);

    ///////////////////////увеличение картинок 
   let pictureBlock = document.querySelectorAll(".col-lg-3"),//с 4 по 11
       body = document.getElementsByTagName("body")[0], 
       modalNew = document.createElement('div'),
       modalNext = document.createElement('div'),
       image = document.createElement('img');
       modalNext2 = document.createElement('div'); 
     
    
    console.log(pictureBlock);

    
    console.log(modalNext);
    function bigPicture(params) {
        params.addEventListener("click", function() {
            event.preventDefault();
            modalNew.classList.add("popup_engineer");
       
            modalNext.classList.add("popup_dialog");
            modalNext2.classList.add("popup_content");
            modalNext2.style.height = "640px";
            modalNext2.style.width = "820px";
            modalNext2.style.background = "rgba(0, 0, 0, 0)";
            modalNext2.margin = "auto";
            modalNew.style.textAlign = 'center';
            
            
            body.appendChild(modalNew);
            modalNew.appendChild(modalNext);
            modalNext.appendChild(modalNext2);
            let pictureCopy = params.getElementsByTagName("a")[0].getAttribute('href');//копирование элемента
                
            modalNext2.appendChild(image);
            image.src = pictureCopy;
            
            showModal(modalNew);
            
        });
        window.addEventListener("click", function(e) {
            if (e.target == modalNew || e.target == modalNext2 ) {
                hideModal(modalNew);    
            }    
        });    
    }
    bigPicture(pictureBlock[4]);
    bigPicture(pictureBlock[5]);
    bigPicture(pictureBlock[6]);
    bigPicture(pictureBlock[7]);
    bigPicture(pictureBlock[8]);
    bigPicture(pictureBlock[9]);
    bigPicture(pictureBlock[10]);
    bigPicture(pictureBlock[11]);

    ////////////////////////////////калькулятор
    let price = document.querySelectorAll(".glazing_price_btn"),
        calc = document.querySelector(".popup_calc"),
        calcClose = calc.getElementsByTagName("button")[0],
        widthCalc = calc.getElementsByTagName("input"),
        balconIcons = document.querySelectorAll(".balcon_icons")[0],
        bigImgAll = document.querySelector(".big_img"),
        bigImg = bigImgAll.getElementsByTagName("img"),
        calcNext = calc.getElementsByTagName("button")[1],
        calcChoose = document.querySelectorAll(".popup_calc_profile")[0],
        place = calcChoose.getElementsByTagName('select')[0],
        checkboxCustom = calcChoose.querySelectorAll(".checkbox-custom"),
        checkboxCustomExit = calcChoose.getElementsByTagName("button")[0],
        checkboxCustomNext = calcChoose.getElementsByTagName("button")[1],
        calcChooseEnd = document.querySelector(".popup_calc_end"),
        calcChooseEndInput1 = calcChooseEnd.querySelectorAll("input")[1],
        calcChooseEndForm = calcChooseEnd.querySelector(".form"),
        calcChooseEndExit = calcChooseEnd.querySelector(".popup_calc_end_close"),
        minPic = balconIcons.getElementsByTagName("a");

    console.log(calcChooseEndExit);
    console.log(calcChooseEndInput1);
       

    price[0].addEventListener("click", function(e) {
        
        showModal(calc);
    });
    price[1].addEventListener("click", function(e) {
        
        showModal(calc);
    });
    calcMove(minPic[0]);
    calcMove(minPic[1]);
    calcMove(minPic[2]);
    calcMove(minPic[3]);
    
    function calcMove (pikch){//увеличение и скрытие картинок
        pikch.addEventListener('click', function(event) {
            event.preventDefault();
            let target = event.target;
            
            console.log(pikch.getElementsByTagName("img")[0]);
            let pictureCopy = pikch.getElementsByTagName("img")[0];
           

            for(let i = 0; i < minPic.length; i++) {
                if (target == minPic[i].getElementsByTagName("img")[0]) {
                    hideBigPic(0);
                    ShowBigPic(i);
                }

            }
         
            for(let i = 0; i < minPic.length; i++) {
                let pictureCopy = minPic[i].getElementsByTagName("img")[0];
                pictureCopy.style.height = "55px";
                pictureCopy.style.width = "75px";

            }
            pictureCopy.style.height = "70px";
            pictureCopy.style.width = "120px";
            bigImgAll.style.margin = "auto";
            bigImgAll.style.height = "250px";
            bigImgAll.style.width = "300px";

            for(let i = 0; i < minPic.length; i++) {
                bigImg[i].style.verticalalign = "middle" ; 
            }
                  
        });
    }

    function hideBigPic(k) {
        for(let i = k; i < minPic.length; i++) {
            bigImg[i].classList.remove('show');
            bigImg[i].classList.add('hide');
        }

    }
    function ShowBigPic(i) {
        bigImg[i].classList.remove('hide');
        bigImg[i].classList.add('show');
    }
   

    let appData = {
        material:"tree",
        cold:false,
        hot:false
    }
    //для заполнения 

    console.log(appData);
    widthCalc[0].addEventListener('input', function() {//ввод ширины
        this.value = this.value.replace(/[^1-9]/g, '');
        let item = widthCalc[0].value;
        appData.width = item; 
    });

    widthCalc[1].addEventListener('input', function() {//ввод высоты
        this.value = this.value.replace(/[^1-9]/g, '');
        let item = widthCalc[1].value;
        appData.height = item;
    });
    calcClose.addEventListener('click', function() {//очистка при нажатии крестика 
        clearApp();
        hideModal(calc);
    });

    calcNext.addEventListener('click', function() {
        hideModal(calc);
        showModal(calcChoose);
    })

    place.addEventListener('change', function () {
        
        appData.material = this.options[this.selectedIndex].value;
       console.log(appData);
    });
    checkboxCustom[0].addEventListener("click", function(event) {//проверка холодного бокса
        if(appData.hot == false && appData.cold == false ) {
            appData.cold = true;
        } else if(appData.hot == false && appData.cold == true) {
            appData.cold = false;
        } else {
            event.preventDefault();
        }
       
        
         
    })
    checkboxCustom[1].addEventListener("click", function(event) {//проверка холодного бокса
        if(appData.hot == false && appData.cold == false ) {
            appData.hot = true;
        } else if(appData.cold == false && appData.hot == true) {
            appData.hot = false;
        } else {
            event.preventDefault();
        }
    
    })
    checkboxCustomExit.addEventListener("click", function() {
        clearApp();
        hideModal(calcChoose);
        console.log(appData)
    })
    checkboxCustomNext.addEventListener("click", function() {
        hideModal(calcChoose);
        showModal(calcChooseEnd);
    })
    function clearApp() {//очистка объекта
        for(let key in appData) {
            appData[key] = null;
        }
    }

    
    checkInput(calcChooseEndInput1);   
    
    calcChooseEndForm.addEventListener('submit', function(event) {
            

        let inputAll = calcChooseEndForm.getElementsByTagName('input');//получение того же инпута для его последующей очистки 

        event.preventDefault();//отмена стандортного поведениябраузера
        calcChooseEndForm.appendChild(statusMessage);
        let request1 = new XMLHttpRequest();//создание запроса
        request1.open('POST', 'server.php');//настройка ajax запроса
        request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
        let formData = new FormData(calcChooseEndForm);
    
        let obj = {};
    
        formData.forEach(function(value, key){//ключ в вёрстке
            obj[key] = value;
        });
        obj["sds"] = appData; 
        let json = JSON.stringify(obj);
    
        request1.send(json);
                
        request1.addEventListener('readystatechange', function() {
            
            if(request1.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request1.readyState === 4 && request1.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < inputAll.length; i++ ) {
            inputAll[i].value = '';
        }
        clearApp();    
    });
    calcChooseEndExit.addEventListener("click", function() {
        hideModal(calcChooseEnd);
        clearApp();
    })
})


  