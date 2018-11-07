export default function second60 () {
     //////////////Модальное окно при посещении сайта более 60 секунд
    let modalPopup = document.querySelectorAll(".popup")[0];
     setTimeout(timerMinute, 60000);
     function timerMinute() {
         document.body.style.overflow = "hidden";
         modalPopup.style.display = "block";
         modalPopup.classList.remove('hide');
         modalPopup.classList.add('show');
    }
}