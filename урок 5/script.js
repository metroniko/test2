let obj = {},
    number = 100;
function isSimple(number2) {
let temp = 0;
    for (let i = 1; i < number2; i++) {
     if (number2 % i == 0) {
         temp++;
     }
    }
    if (temp == 1) {
        return true;
    } else {
        return false;
    }

}    
    for (let i = 0; i < number; i++) {
        if (isSimple(i) == true) {
            obj[i] = i;
        }   
    }
for (let key in obj ) {
    console.log("простое число " + key + " имеет делители: " + "1, " + obj[key]);
}

