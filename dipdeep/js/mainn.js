window.addEventListener('DOMContentLoaded', function() {
    'use strict';
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
    //     console.log("здесь тут 2");
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
    //     else {
    //         console.log("здесь тут 4"); 
    //     }
   
    // });
    //вызов окна наверху
    let modalHead = document.getElementsByClassName("header_btn_wrap")[0],
        close = document.getElementsByClassName("popup_close")[1],  
        showHead = document.getElementsByClassName("popup_engineer")[0];
    console.log(modalHead);
    console.log(showHead);
    console.log(close);
    modalHead.addEventListener('click', function() {
        document.body.style.overflow = "hidden";
        showHead.style.display = "block";
        showHead.classList.remove('hide');
        showHead.classList.add('show');
        
        

    });
    close.addEventListener('click', function() {
        showHead.classList.remove('show');
        showHead.classList.add('hide');
        showHead.style.display = "none";
        document.body.style.overflow = '';

    });


    



})