'use strict';

var week = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ]
var DayOfWeek = prompt( "Введите день недели " );

for (var i = 0; i < week.length; i++) {
    var a = week[i];
    if(i==5 || i==6){
        document.write(a.bold()+"<br /> ");
    }

    else if (DayOfWeek == week[i]){document.write(a.italics() + "<br /> " )}
    else { document.write(a + "<br /> " );}
    }




