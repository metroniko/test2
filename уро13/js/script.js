window.addEventListener('DOMContentLoaded', function() {
    "use strict"
    let calc = require('./js/parts/calc.js'),
        form = require('./js/parts/forms.js'),
        modal = require('.js/parts/modal.js'),
        slider = require('./js/parts/slider.js'),
        tabs = require('./js/parts/tabs.js'),
        timer = require('./js/parts/timer.js');
    
    calc();
    form();
    modal();
    slider();
    tabs();
    timer();
});