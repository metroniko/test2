export default function calc () {
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
        checkboxCustom = calcChoose.getElementsByTagName("input"),
        checkboxCustomExit = calcChoose.getElementsByTagName("button")[0],
        checkboxCustomNext = calcChoose.getElementsByTagName("button")[1],
        calcChooseEnd = document.querySelector(".popup_calc_end"),
        calcChooseEndInput1 = calcChooseEnd.querySelectorAll("input")[1],
        calcChooseEndInputAll = calcChooseEnd.querySelectorAll("input"),
        calcChooseEndForm = calcChooseEnd.querySelector(".form"),
        calcChooseEndExit = calcChooseEnd.querySelector(".popup_calc_end_close"),
        statusMessage = document.createElement('div'),
        minPic = balconIcons.getElementsByTagName("a");

    
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с y вами свяжемся',
        failure: 'Что то не так'
    }
    function countPrice () {
        for ( let i = 0; i < price.length; i++) {
            price[i].addEventListener("click", function(e) {
        
                showModal(calc);
            });

        }
    }
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
    countPrice ();
    calcMove(minPic[0]);
    calcMove(minPic[1]);
    calcMove(minPic[2]);
    calcMove(minPic[3]);
    
    function calcMove (pikch){//увеличение и скрытие картинок
        pikch.addEventListener('click', function(event) {
            event.preventDefault();
            let target = event.target;
            
            
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
    }
    //для заполнения 

    
    widthCalc[0].addEventListener('input', function() {//ввод ширины 
        this.value = this.value.replace(/[^0-9]|^0{1}/g, '');
        let item = widthCalc[0].value;
        appData.width = item; 
    });
    function clearInput (a) {
        for (let i = 0; i < a.length; i++ ) {
            a[i].value = '';
        }
    }

    widthCalc[1].addEventListener('input', function() {//ввод высоты
        this.value = this.value.replace(/[^0-9]|^0{1}/g, '');
        let item = widthCalc[1].value;
        appData.height = item;
    });
    calcClose.addEventListener('click', function() {//очистка при нажатии крестика 
        clearApp();
        hideModal(calc);
        clearInput(widthCalc);
    });

    calcNext.addEventListener('click', function() {
        if(widthCalc[1].value != ''&& widthCalc[1].value != '') {
            hideModal(calc);
            showModal(calcChoose);  
        }    
    });

    place.addEventListener('change', function () {
        
        appData.material = this.options[this.selectedIndex].value;
      
    });
    
    checkboxCustom[0].addEventListener("click", function(event) {//проверка холодного бокса
        checkboxCustom[0].checked = true;
        checkboxCustom[1].checked = false;
        
        appData.weather = "cold";
    })
    checkboxCustom[1].addEventListener("click", function(event) {//проверка горячего бокса
        checkboxCustom[1].checked = true;
        checkboxCustom[0].checked = false;
        
        appData.weather = "hot";
    
    })
    function checkboxCustomClear() {
        checkboxCustom[0].checked = false;
        checkboxCustom[1].checked = false;
    }
    checkboxCustomExit.addEventListener("click", function() {
        clearApp();
        hideModal(calcChoose);
      
        checkboxCustomClear()
        clearInput(widthCalc);

    })
    function checkInput(inpt) {//функция для проверки значения вводимых в инпут с номером
        inpt.addEventListener('input', function() {
            
            this.value = "+" + this.value.replace(/[^0-9]/g, '');   
        });
    }
    
    checkboxCustomNext.addEventListener("click", function() {
        if(checkboxCustom[0].checked != false || checkboxCustom[1].checked != false ) {
            hideModal(calcChoose);
            showModal(calcChooseEnd);
        }
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
        clearInput(calcChooseEndInputAll);
        checkboxCustomClear()
        clearInput(widthCalc);
    })
}