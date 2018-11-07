export default function popup_engineer () {
    
    let modalHead = document.getElementsByClassName("header_btn_wrap")[0],//верхняя кнопка
        popupClose = document.getElementsByClassName("popup_close")[1],
        statusMessage = document.createElement('div'),  
        showHead = document.getElementsByClassName("popup_engineer")[0];//модальное окно popup_engineer

   
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с y вами свяжемся',
        failure: 'Что то не так'
    }
    
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


}