let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    zag = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    promp = document.querySelector('.prompt'),
    quest = prompt("Ваше отношение к технике Apple") ;
    
    zag.textContent = "Мы продаем только подлинную технику Apple";

    promp.textContent = quest;


    column[1].removeChild(adv);

    menu.insertBefore(menuItem[2], menuItem[1]);
    document.body.style.backgroundImage = 'url(https://webattach.mail.yandex.net/message_part_real/apple_true.jpg?exif_rotate=y&no_disposition=y&name=apple_true.jpg&sid=67wQ6Hcc0wl5XzJNW8gmCiyPb6QV%2FpbNUstjf3w8iipggG2%2FkkhbKBNdAp%2FACAJjikV3zJwPy0WKl*6Qm2n7VZTfZGuIyQs*Gsqk5m9pQnYQ%2FIDLEw6nbM0Ey3*DUihb)';
    