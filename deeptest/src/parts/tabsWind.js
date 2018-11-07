export default function tabsWind () {
    ////////////////////////Табы с окнами
    let windowPicrute = document.querySelectorAll(".row"),//c 3 по 7 включительно
        glazingSlider = document.querySelectorAll(".glazing_slider")[0],
        windowTab = document.querySelectorAll(".glazing_block");
    
    
    // windowWithTabs(windowTab[0]);
    // windowWithTabs(windowTab[1]);
    // windowWithTabs(windowTab[2]);
    // windowWithTabs(windowTab[3]);
    // windowWithTabs(windowTab[4]);

    // function windowWithTabs(a) {
    //     a.addEventListener("click", function(e) {
    //         let target = e.target;
    
    //         for(let i = 0; i < windowTab.length; i++) {
    //             if (target == windowTab[i].querySelector("a") || target == windowTab[i] || target == windowTab[i].querySelector("img") ) {
    //                 windowTab[i].querySelector("a").focus();
    //                 removeClass();
    //                 addClass(i);
    //                 hideWindow(i);
    //                 showWindow(i+3)
    //             }
    //         }
    //     });
    // }
    function removeClass() {
        for(let i = 0; i < windowTab.length; i++) {
            windowTab[i].querySelector("a").classList.remove("active");
        }
    }
    function addClass(i) {
        windowTab[i].querySelector("a").classList.add("active");
    }
    function hideWindow() {
        for(let i = 3; i < (windowTab.length + 3); i++) {
            windowPicrute[i].classList.remove("show");
            windowPicrute[i].classList.add("hide");
        }
    }
    function showWindow(i) {
        windowPicrute[i].classList.remove("hide");
        windowPicrute[i].classList.add("show");
    }
    glazingSlider.addEventListener("click", function(e) {
        let target = e.target;
       
        for(let i = 0; i < windowTab.length; i++) {
            if (target == windowTab[i].querySelector("a") || target == windowTab[i] || target == windowTab[i].querySelector("img") ) {
                windowTab[i].querySelector("a").focus();
                removeClass();
                addClass(i);
                hideWindow(i);
                showWindow(i+3)
            }
        }
        

    })

}