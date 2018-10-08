'use strict';
let str = "урок-3-был слишком легким";
// отрезаем первый эллемент и с помощью метода.toUpperCase() увел .substring(1)-резать с какого
// большая буква
str = str[0].toUpperCase() + str.substring(1);

let newString = str.replace(/-/g, " "); // глобальная замена

console.log(newString);
let temp = str.indexOf("легким");
let Str = str.substring(temp);//вырез слова лёгкий 
let temp2 = Str.length;
let newString2 = Str.substring(0,temp2-2)+"о";
console.log(newString2);//вывод слова легко
console.log(newString.substring(0,temp-1));






//сумма квадратов кубов
let arr = [20, 33, 1, "Человек", 2, 3];
let s = 0;
for(var i = 0; i<arr.length; i++){
    
if(typeof(arr[i])=="number"){
s = s+Math.pow(arr[i], 3);
}
}
s = Math.sqrt(s);
console.log(s);









//последняя функция

 function lust(last){
while (typeof(last) !="string") {
    alert("вы ввели не строку");
    last= prompt("введите строку ");
}
let newlast = last.replace(/ /g, "");
if(newlast.length>50){

    let newlast2 = newlast.substring(0,50) + "...";
    console.log(newlast2 );
}else{console.log(newlast );}
 }

let last = prompt("введите строку ");

lust(last);
