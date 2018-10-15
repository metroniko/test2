'use strict';
let button = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItemAll = document.querySelectorAll('.expenses-item'),
    expensesItem = document.getElementsByClassName('expenses-item')[0],
    expensesItem2 = document.getElementsByClassName('expenses-item')[1],
    expensesItem3 = document.getElementsByClassName('expenses-item')[2],
    expensesItem4 = document.getElementsByClassName('expenses-item')[3],
    expensesItemBtn = document.getElementsByTagName('button')[0],
    expensesItemBtn2 = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    incomeValue = document.querySelector('.income-value'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money;
let time ;



console.log(chooseIncome);

expensesItemBtn2.addEventListener('click', function(){
    if (appData.budget == undefined ) {
        console.log('костыль 1');
        expensesItemBtn2.disabled = true;
        expensesItemBtn2.disabled = false; 
    } else {
        let temp = 0;
        optionalexpensesValue.textContent = null;
        for (let i = 0 ; i < optionalexpensesItem.length ; i++){
            let exp= optionalexpensesItem[i].value;
            if ( exp != null && exp != '') {
                appData.optionalExpenses[i] = exp; 
                optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
            } else {   
                console.log('костыль 2');    
                // alert("Введите корректное значение "); 
                temp++;  
            }
        }
        if (temp == optionalexpensesItem.length) {
            optionalexpensesValue.textContent = null;
            expensesItemBtn2.disabled = true;
            expensesItemBtn2.disabled = false;
            console.log("ext");
        }
    }

});

expensesItemBtn.addEventListener('click',function() {  
    

    if (appData.budget == undefined) {
        console.log('костыль 1');
        expensesItemBtn.disabled = true; 
        expensesItemBtn.disabled = false;  
    } else {        
        let sum = 0;
        for (let i = 0; i < expensesItemAll.length; i++) {
        
            let firR = expensesItemAll[i].value;
            let firO = expensesItemAll[++i].value;
        
            if ( firR != null  && firO != null && firO != '' && firR!= ''){
                appData.expenses[firR] = firO;
                sum += +firO;
            } else {
                // alert ("Вы не ввели значения в область или ввели недопустимые в строке № = " + (i+1)/2 +". Введите заново");
              sum += 0;
            }
        } 
        if (sum == 0) {
            expensesItemBtn.disabled = true;
            expensesItemBtn.disabled = false;   
            console.log("rjcnskm11");
        } else {
            expensesValue.textContent = sum;
        }
        
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.saving == true) {
        appData.saving = false;
    } else {
        appData.saving = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.saving) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function(){
    if (appData.saving) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});





button.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth()+1;
    day.value = new Date(Date.parse(time)).getDate();
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget == undefined ) {
        console.log('костыль 1');
        countBudgetBtn.disabled = true;
        expensesItemBtn.disabled = false; 
    } else {
        if(appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay <100 ){
                levelValue.textContent ="Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 20000){
                levelValue.textContent ="Средний  уровень достатка";
            } else  if(appData.moneyPerDay > 20000){
                levelValue.textContent = "Выше среднего уровень достатка";
            } else {

            levelValue.textContent = "Произошла ошибка";
            } 
        } else {
            daybudgetValue.textContent = "Произошла ошибка";
        }   
    }
});



let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving:false,
    
};
    for (let key in appData ) {
    console.log("Наша программа включает в себя данные: " + key );
    }