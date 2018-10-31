export default function timer() {
    // таймер
    let deadline = '2018-11-6';
    //рассчёт времемени до дедлайна
    function getTimeRemaining(endtime) {
        let dataY = new Date().getTimezoneOffset(),
         t = Date.parse(endtime)-Date.parse(new Date()) + (dataY * 60 * 1000),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/(1000*60*60));
        function timeAdd(time) {
            if (time < 10) {
                time = '0' + time;
            }
        return time;    
        }

        seconds = timeAdd (seconds);
        minutes = timeAdd (minutes);
        hours = timeAdd (hours);    
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
    
}
