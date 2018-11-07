export default function pictureBig () {
    ///////////////////////увеличение картинок 
   let pictureBlock = document.querySelectorAll(".col-lg-3"),//с 4 по 11
   body = document.getElementsByTagName("body")[0], 
   modalNew = document.createElement('div'),
   modalNext = document.createElement('div'),
   image = document.createElement('img');

let modalNext2 = document.createElement('div'); 
 


function showModal(e) {//функция для показывания модального окна
    e.style.display = "block";
    e.classList.remove('hide');
    e.classList.add('show');
    document.body.style.overflow = "hidden";

}
function hideModal(e)  {//функция для скрытия модального окна
    e.classList.remove('show');
    e.classList.add('hide');
    e.style.display = "none";
    document.body.style.overflow = '';
}



function bigPicture(params) {
    params.addEventListener("click", function() {
        event.preventDefault();
        modalNew.classList.add("popup_engineer");
   
        modalNext.classList.add("popup_dialog");
        modalNext2.classList.add("popup_content");
        modalNext2.style.height = "640px";
        modalNext2.style.width = "820px";
        modalNext2.style.background = "rgba(0, 0, 0, 0)";
        modalNext2.margin = "auto";
        modalNew.style.textAlign = 'center';
        
        
        body.appendChild(modalNew);
        modalNew.appendChild(modalNext);
        modalNext.appendChild(modalNext2);
        let pictureCopy = params.getElementsByTagName("a")[0].getAttribute('href');//копирование элемента
            
        modalNext2.appendChild(image);
        image.src = pictureCopy;
        
        showModal(modalNew);
        
    });
    window.addEventListener("click", function(e) {
        if (e.target == modalNew || e.target == modalNext2 ) {
            hideModal(modalNew);    
        }    
    });    
}
bigPicture(pictureBlock[4]);
bigPicture(pictureBlock[5]);
bigPicture(pictureBlock[6]);
bigPicture(pictureBlock[7]);
bigPicture(pictureBlock[8]);
bigPicture(pictureBlock[9]);
bigPicture(pictureBlock[10]);
bigPicture(pictureBlock[11]);
}