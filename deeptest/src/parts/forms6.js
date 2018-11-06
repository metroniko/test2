export default function forms6 () {
     ///////////////////////////6 форм на странице
     let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с y вами свяжемся',
        failure: 'Что то не так'

    };
    let showHead = document.getElementsByClassName("popup_engineer")[0],
        inputPopup = showHead.querySelectorAll(".form-control"),//2 инпута в модальном окне (вызов звмера)
        popupForm = showHead.querySelector(".form"),// всплывающая форма
        mainForm = document.querySelectorAll(".form")[0],
        mainForm2 = document.querySelectorAll(".form")[1], //форма на самой странице
        mainForm3 = document.querySelectorAll(".form")[5],
        modalPopup = document.querySelectorAll(".popup")[0],
        timePopup = modalPopup.getElementsByClassName("form")[0],
        inputMain = mainForm.getElementsByTagName("input"),
        inputMain2 = mainForm2.getElementsByTagName("input"),
        inputMain3 = mainForm3.getElementsByTagName("input"),
        inputTimePopup = modalPopup.getElementsByTagName("input"),
        statusMessage = document.createElement('div');

    console.log(mainForm3);
    
    

    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером
        inpt.addEventListener('input', function() {
            
            this.value = "+" + this.value.replace(/[^0-9]/g, '');   
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
    // funkForm(mainForm2);
    funkForm(mainForm3);
    funkForm(timePopup);
}