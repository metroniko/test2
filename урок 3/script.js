'use strict';
let money;
let time ;
function start(){
     money = +prompt("Ваш бюджет на месяц?", "");
     time = prompt("Введите дату в формате YYYY-MM-DD", "");

     while(isNaN(money) || money == "" || money==null) {
        money = +prompt("Ваш бюджет на месяц?", "");
     }
}
start();
let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving:true
}

function chooseExpenses(){
    for ( let i = 0;i<2;i++){
    
        let firR = prompt ("Введите обязательную статью расходов в этом месяце", "");
        let firO = prompt ("Во сколько обойдется?", "");
      
        if ( firR != null  && firO != null && firO != '' && firR!= ''){
    appData.expenses[firR] = firO;
 
    if(typeof(firR) == 'string') {console.log("Это стринг");  } 
    }
        else{
       
    alert("Вы не ввели значения в область или ввели недопустимые. Введите заново");
    i--;
        }
    } 
}

chooseExpenses();
//Расчет дневного бюджета  и вывод на экран этого значения 
function detectDayBudget(){

    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ежедневний бюджет = " + appData.moneyPerDay);

}

detectDayBudget();
//блок кода с расчетом уровня достатка
function detectLevel(){
    if(appData.moneyPerDay <100 ){
        console.log("Минимальный уровень достатка");
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay <20000){
            console.log("Средний  уровень достатка");
        }
        else{console.log("Выше среднего уровень достатка");}


}
detectLevel();

function checkSavings(){
if(appData.saving == true){
let save = +prompt("Какова сумма накоплений ", ""),
    percent = +prompt("Под какой процент ", "");    

appData.monthIncome = save/100/12*percent;
alert("Доход в месяц с вашего депозита: " + appData.monthIncome); 
}
}
checkSavings();
 function chooseOptExpenses() {
for(let i=1 ; i<4 ; i++){
let exp= +prompt("Статья необязательных расходов?" );
    if ( exp != null && exp != ''){
    appData.optionalExpenses[i] = exp;
}
    else{alert("Введите корректное значение ");
    i--;
}
 }
 }
 chooseOptExpenses();


