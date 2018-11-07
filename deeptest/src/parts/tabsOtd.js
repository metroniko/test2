export default function tabsOtd () {
//табы
    let info = document.querySelectorAll(".decoration_slider")[0],//дочерний для табов
    tab = document.querySelectorAll(".decoration_item"),//таб
    tabContentAll = document.querySelectorAll(".decoration_content")[0],
    tabContent = tabContentAll.getElementsByClassName("row")[0],//инфа на табе
    internal = document.querySelector(".internal"),
    rising = document.querySelector(".rising"),
    roof = document.querySelector(".roof"),
    external = document.querySelector(".external"),
    formRising = rising.querySelector(".form"),
    formRoof = roof.querySelector(".form"),
    formExternal = external.querySelector(".form"),
    formInternal = internal.querySelector(".form"),
    inputRising = rising.querySelectorAll("input")[1],
    inputRoof = roof.querySelectorAll("input")[1],
    inputExternal = external.querySelectorAll("input")[1],
    statusMessage = document.createElement('div'),
    inputInternal = internal.querySelectorAll("input")[1];
    let mass = [internal,rising,roof,external];    

  

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с y вами свяжемся',
        failure: 'Что то не так'

    };
    
    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером
        inpt.addEventListener('input', function() {
            
            this.value = "+" + this.value.replace(/[^0-9]/g, '');   
        });
    }
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

    checkInput(inputRising);
    checkInput(inputRoof);
    checkInput(inputExternal);
    checkInput(inputInternal);

    funkForm(formInternal);
    funkForm(formRising);
    funkForm(formRoof);
    funkForm(formExternal);
    info.addEventListener("click", function(e) {
    let target = e.target;
    
    for(let i = 0; i < tab.length; i++) {
        if (target == tab[i].getElementsByTagName("div")[0] || target == tab[i].getElementsByTagName("a")[0]) {
            // tab[i].getElementsByTagName("a")[0].classList.add("focus");
            // tab[i].getElementsByTagName("a")[0].classList.add("hover");
            tab[i].getElementsByTagName("a")[0].focus();
            removeClassAfter_click();
            addClassAfter_click(i);
            hideTabContent();
            showTabContent(i);
        }
    }
    

    });
    function removeClassAfter_click() {
    for(let i = 0; i < tab.length; i++) {
        tab[i].getElementsByTagName("div")[0].classList.remove("after_click");
    }
    }
    function addClassAfter_click(i) {
    tab[i].getElementsByTagName("div")[0].classList.add("after_click");
    }
    function hideTabContent() {
    for(let i = 0; i < tab.length; i++) {
        mass[i].classList.remove("show");
        mass[i].classList.add("hide");
    }
    }
    function showTabContent(i) {
    mass[i].classList.remove("hide");
    mass[i].classList.add("show");
    }
}