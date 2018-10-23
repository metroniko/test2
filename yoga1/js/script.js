window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        j = 0,
        oneMone = document.querySelectorAll(".description-btn");
        hideTabContent(1);
        

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {

            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
       
    }
    oneMone[0].addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
    });
    

   
    
    


    info.addEventListener('click', function(event) {
        console.log("здесь тут 2");
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i <tab.length; i++) {
                
                if(target == tab[i]) {
                    j = i;
                    hideTabContent(0);
                    showTabContent(i);
                    break;   
                }
             

            }
   
        }
        oneMone[j].addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = "hidden";
        });
       
    });

    // таймер
    let deadline = '2018-10-21';
    //рассчёт времемени до дедлайна
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime)-Date.parse(new Date),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/(1000*60*60));
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    }
    //делает динамику
    function setClock (id, endtime) {//получение элементов со страницы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes =  timer.querySelector('.minutes'),
            seconds =  timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {//добавление времени на страницу
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval (timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
        }    
    }

    setClock ('timer', deadline);

    // modal
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");
        
    
        more.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = "hidden";
        });
        
        close.addEventListener('click', function() {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = "";
        });

        let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы рара',
            failure: 'Что то не так'

        };

        let form = document.querySelector('.main-form'),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

            statusMessage.classList.add('status');
            
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let request = new XMLHttpRequest ();
            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
            let formData = new FormData(form);

            let obj = {};

            formData.forEach(function(value, key){
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            request.send(json);
            
            request.addEventListener('readystatechange', function() {
                if(request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if(request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
            for (let i = 0; i < input.length; i++ ) {
                input[i].value = '';
            }




        });  
        
        let form2 = document.getElementById('form'),
            input2 = form2.getElementsByTagName('input'), 
            statusMessage2 = document.createElement('div');

           
            input2[1].addEventListener('input', function() {
                this.value = this.value.replace(/[^1-9+]/g, '');
            });

          
            statusMessage2.classList.add('status');
            form2.addEventListener('submit', function(event) {
               
                event.preventDefault();
                form2.appendChild(statusMessage2);
                let request1 = new XMLHttpRequest();
                request1.open('POST', 'server.php');
                request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
                let formData2 = new FormData(form2);
    
                let obj2 = {};
    
                formData2.forEach(function(value, key){
                    obj2[key] = value;
                });
    
                let json2 = JSON.stringify(obj2);
    
                request1.send(json2);
                
                request1.addEventListener('readystatechange', function() {
                    if(request1.readyState < 4) {
                        statusMessage2.innerHTML = message.loading;
                    } else if(request1.readyState === 4 && request1.status == 200) {
                        statusMessage2.innerHTML = message.success;
                    } else {
                        statusMessage2.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < input2.length; i++ ) {
                    input2[i].value = '';
                }
            

    
    
    
    
            });   
    
  


    
});