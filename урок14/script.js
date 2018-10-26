$(document).ready(function(){
    $('.main_btna, a[href="#sheldure"], .main_btn').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').css({top:'-200px'}).animate(
            { 
                height:'toggle',
                top:'toggle',
                top:'+=200'
            }, 2000
        );   
    });
    $('.close').on('click', function() {
        $('.modal').animate(
            { 
                height:'toggle',
                top:'toggle',
                top:'-=200',
                
            }, 2000
        );
       
        $('.overlay').fadeToggle('slow');   

    });
   

    
});