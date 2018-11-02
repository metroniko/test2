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
    orderCall(numberButton[1]);
    
    
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
    


})