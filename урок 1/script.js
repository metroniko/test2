function getFriendlyNumbers(start, end) {

    if(start > end || start < 0 || end < 0 || isInteger(start) == false || isInteger(end) == false 
     || start == null || end == null || start == "" || end == "" ){
        return false ;}


    let mass1= [];
        temp = 0;
        for(let i = start; i < end; i++){
           for(let j = i+1 ; j < end; j++){
            if( sumDivisors(i) == j && sumDivisors(j) == i ){
                mass1[temp] = [i,j];
                temp++;
            }
           }
        }
      return mass1;
} 
let first = +prompt("Введите первое число");
    second = +prompt("Введите второе число");
    console.log(typeof(first));

let mass2 =  getFriendlyNumbers(1,300);

if (mass2.length == 0) {
    console.log("Нет дружественных чисел []");
  } else {
      mass2.forEach(function(item){
          console.log(item + " "); 
          } );   
  }
   
function sumDivisors(num){
    var sum = 0;
    for (var i = 1; i < num; i++){
      if (!(num % i)) {
        sum += i;
      }
    }
    return sum;
  }

  function isInteger(num) {
    return (num ^ 0) === num;
  }





//   module.exports = {
//     firstName: 'Name',
//     secondName: 'Surname',
//     task: getFriendlyNumbers
// }

