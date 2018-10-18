let button = document.querySelector(".start"),
    cercle = document.getElementById("circle");
    console.log(button);

function animation() {
    let t = 0,
        z = 0,
        i = 300;
        requestAnimationFrame(move,cercle);
    function move () {   
        requestAnimationFrame(move,cercle); 
        if (t != 300) {
            t++;
            cercle.style.left = t +"px";
        } else if (z != 300) {
            z++;
            cercle.style.top = z +"px";
           
        } else if (i != 600) {
            
            i++;
            cercle.style.left =  i + "px";
            cercle.style.top =  i + "px";  
        } 
    }
}  
button.addEventListener ("click", animation); 