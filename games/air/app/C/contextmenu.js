define(function( ) {
    return function( canvas ) {

        if(typeof document.ontouchstart==="object") {
            canvas.addEventListener("touchstart", function (ev) {
                ev.preventDefault&&ev.preventDefault();
            },false);
            canvas.addEventListener("touchmove", function (ev) {
                ev.preventDefault&&ev.preventDefault();
            },false);
        }else{
            canvas.addEventListener("contextmenu", function(ev) {
                ev.preventDefault&&ev.preventDefault();
                return false;
            },false);
        }

    }
})