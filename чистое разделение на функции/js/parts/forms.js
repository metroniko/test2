function forms () {
        let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Мы с y вами свяжемся',
            failure: 'Что то не так'

        };

        let form = document.querySelector('.main-form'),
            input = form.getElementsByTagName('input')[0],
            statusMessage = document.createElement('div');

            

            statusMessage.classList.add('status');

        
        let form2 = document.getElementById('form'),
            input2 = form2.getElementsByTagName('input'), 
            statusMessage2 = document.createElement('div');


            
        
        inp(input2[1]);
        inp(input);


        function inp(inpt) {
            inpt.addEventListener('input', function() {
                this.value = this.value.replace(/[^1-9+]/g, '');
            });

        }

        statusMessage2.classList.add('status');


        function funkForm(formm) {
            
                formm.addEventListener('submit', function(event) {

                let inputAll = formm.getElementsByTagName('input'); 

                event.preventDefault();
                formm.appendChild(statusMessage2);
                let request1 = new XMLHttpRequest();
                request1.open('POST', 'server.php');
                request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
                let formData2 = new FormData(formm);
        
                let obj2 = {};
        
                formData2.forEach(function(value, key){
                    obj2[key] = value;
                });
        
                let json2 = JSON.stringify(obj2);
        
                request1.send(json2);
                    
                request1.addEventListener('readystatechange', function() {
                    if(request1.readyState < 4) {
                        statusMessage2.innerHTML = message.loading;
                    } else if(request1.readyState === 4 && request1.status == 200) {
                        statusMessage2.innerHTML = message.success;
                    } else {
                        statusMessage2.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < inputAll.length; i++ ) {
                    inputAll[i].value = '';
                }
            
            });   
        }
    funkForm(form2);
    funkForm(form);
}
module.exports = forms;