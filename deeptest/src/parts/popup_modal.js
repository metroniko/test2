export default function popup_modal () {
    /////////////////////////////////////модальные окна popup
    let modalPopup = document.querySelectorAll(".popup")[0],
    popupCloseCall = document.getElementsByClassName("popup_close")[0],
    numberButton = document.querySelectorAll(".phone_link");
    
    orderCall(numberButton[0]);
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
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с y вами свяжемся',
        failure: 'Что то не так'
    }

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
    
}