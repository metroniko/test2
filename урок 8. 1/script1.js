'use strict'
let hour = document.getElementById('clock');
let clock = setInterval(hou, 1000);
function hou() {
let date = new Date();    
let h = date.getHours(),
    m = date.getMinutes(),  
    s = date.getSeconds();
     
    if (m < 10) {
        m ="0" + m;
    }
    if (s < 10) {
        s ="0" + s;
    }
    if (h < 10) {
        h ="0" + h;
    }

    hour.textContent = (h + ":"+ m + ":" + s);
    
    setInterval(hou, 1000); 
}