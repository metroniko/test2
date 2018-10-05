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
var 
    firR = prompt ("Введите обязательную статью расходов в этом месяце"),
    firO = prompt ("Во сколько обойдется?"),
    secR = prompt ("Введите обязательную статью расходов в этом месяце"),
    secO = prompt ("Во сколько обойдется?");

appData.expenses[firR]=firO;
appData.expenses[secR]=secO;

alert(appData.budzhet/30);



