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
        div.style.height = this.height ;
        div.style.width = this.width;
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        // div.style.cssText = "width:" + this.width;
        // div.style.cssText = "width:" + this.width + "height:" + this.height;
        // div.style.cssText = 'height: this.height ; width: this.width; ' ;
       
    }
    
}
const obj = new Options("25px","68px","red","medium","center");
obj.createDiv();