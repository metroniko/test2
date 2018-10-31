function calc () {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;
        totalValue.innerHTML = 0;
    let verifyInputNumbers = (elem) => {
        elem.value = elem.value.replace(/[^1-9]/g, '');
};    

  
    persons.addEventListener('input', function() {
    
        verifyInputNumbers(this);                  
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;
        calcCondition(restDays.value);
            
         
               
    });
        
    restDays.addEventListener('input', function() {
        verifyInputNumbers(this);
        daysSum = +this.value;
               
        total = (daysSum + personsSum)*4000;
        calcCondition(persons.value);
           
    
    });
    function calcCondition(e) {
        if(e != Math.floor(e)) {
            console.log("нельзя");
                    
            persons.value = '';    
        }  
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }  
    
    }
        place.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
 
}
module.exports = calc;