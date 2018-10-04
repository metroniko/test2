'use strict';
var money= +prompt("Ваш бюджет на месяц?","");
var time=prompt("Введите дату в формате YYYY-MM-DD","");
var answer=prompt("Введите обязательную статью расходов в этом месяце","");

var appData={
    budzhet:money,
    timeData:time,
    expenses:{
        answer: (+prompt("Во сколько обойдется?",""))
    },
    optionalExpenses:{},
    income:[],
    saving:false
}
alert((money-appData.expenses.answer)/30);

