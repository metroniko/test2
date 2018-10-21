class Options {
    constructor(height , width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
    let div = document.createElement('div');    
        div.innerHTML ='xhxhxhx';
        document.body.appendChild(div);
        console.log( this.height );
        div.style.cssText = `width: ${this.width}  ;  height: ${this.height}  ; background: ${this.bg} ; font-Size: ${this.fontSize}; text-Align: ${this.textAlign}; `;
       
    }
    
}
const obj = new Options("25px","68px","red","medium","center");
obj.createDiv();