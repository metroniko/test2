let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    zag = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    promp = document.querySelector('.prompt'),
    quest = prompt("Ваше отношение к технике Apple") ,
    li = document.createElement('li'),
    text = document.createTextNode('Пятый пункт');
    
    zag.textContent = "Мы продаем только подлинную технику Apple";

    promp.textContent = quest;



    li.classList.add('menu-item');

    menu.appendChild(li);
    li.innerText = "Пятый пункт";
    
    console.log(li);

    column[1].removeChild(adv);

    menu.insertBefore(menuItem[2], menuItem[1]);
 
    document.body.style.background = 'url(img/apple_true.jpg)';

  