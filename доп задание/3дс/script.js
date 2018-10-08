'use strict';
let str = "урок-3-был слишком легким";
// отрезаем первый эллемент и с помощью метода.toUpperCase() увел .substring(1)-резать с какого
// большая буква
str = str[0].toUpperCase() + str.substring(1);
console.log(str);

var newString = str.replace(/-/g, " "); // глобальная замена


var temp = str.indexOf("легким");

var srin = str.substring(temp);






//замена двух букв
var newString2 = srin.substring(0,srin.length-2)+"оо";
console.log(newString2);
console.log(newString);
console.log(srin);










//сумма квадратов кубов
let arr = [20, 33, 1, "Человек", 2, 3];
var s = 0;
for(var i = 0; i<arr.length; i++){
    
if(typeof(arr[i])=="number"){
s = s+Math.pow(arr[i], 3);
}
}
s = Math.pow(s, 2);
console.log(s);









//последняя функция

 function lust(last){
while (typeof(last) !="string") {
    alert("вы ввели не строку");
    last= prompt("введите строку ");
}
console.log(last.length);
var newlast = last.replace(/ /g, "");
if(newlast.length>50){

    var newlast2 = newlast.substring(0,50) + "...";
    console.log(newlast2 );
}
 }
var last = prompt("введите строку ");
lust(last);
