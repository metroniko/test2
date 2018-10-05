'use strict';
var money=+prompt("Ваш бюджет на месяц?","");
var time=prompt("Введите дату в формате YYYY-MM-DD","");


var appData={
    budzhet:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving:false
}
for (let i=0;i<2;i++){
    
    var firR = prompt ("Введите обязательную статью расходов в этом месяце");
    var firO = prompt ("Во сколько обойдется?");
    if ( typeof(firR) !=null && typeof(firO) !=null && firO !='' && firR !='' ){
appData.expenses[firR]=firO;
console.log("Всё нормально");
    }  
    else{
alert("Вы не ввели значения в область или ввели недопустимые. Введите заново");
i--;
    }
} 


// ЦИКЛ С ИСПОЛЬЗОВАНИЕМ WHILE

//  var temp=0;
// while(temp<2){
//     temp++;//временная переменаая для подсчёта итераций 

//     var firR = prompt ("Введите обязательную статью расходов в этом месяце");
//     var firO = prompt ("Во сколько обойдется?");
//     if ( typeof(firR) !=null && typeof(firO) !=null && firO !='' && firR !='' ){
//         appData.expenses[firR]=firO;
//         console.log("Всё нормально");
//     }
//     else{
//         alert("Вы не ввели значения в область или ввели недопустимые. Введите заново");
//         temp--;}
// }


//ЦИКЛ С ИСПОЛЬЗОВАНИЕМ  DO WHILE

// var temp2=0;
// do{
//     temp2++;//временная переменаая для подсчёта итераций 

//     var firR = prompt ("Введите обязательную статью расходов в этом месяце");
//     var firO = prompt ("Во сколько обойдется?");
//     if ( typeof(firR) !=null && typeof(firO) !=null && firO !='' && firR !='' ){
//         appData.expenses[firR]=firO;
//         console.log("Всё нормально");
//     }
//     else{
//         alert("Вы не ввели значения в область или ввели недопустимые. Введите заново");
//         temp2--;}
// }
// while(temp2 < 2 )


appData.moneyPerDay=(appData.budzhet/30);
alert("Ежедневний бюджет = " + appData.moneyPerDay);

if(appData.moneyPerDay <100 ){
console.log("Минимальный уровень достатка");
}
else if (appData.moneyPerDay > 100 && appData.moneyPerDay <20000){
    console.log("Средний  уровень достатка");
}
else{console.log("Выше среднего уровень достатка");}







