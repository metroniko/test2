
$(document).ready(function(){
    $('.main_btna.text-center').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').css({top:'-200px'}).animate(
            { 
                height:'toggle',
                top:'toggle',
                top:'+=200'
            }, 2000
        );  
       
    });
    $('.main_btn.text-center.contact').on('click', function() {
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