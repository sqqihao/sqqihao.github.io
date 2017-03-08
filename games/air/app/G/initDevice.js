define(function() {
    return function( document , window, canvas) {
        //自动适配低屏幕分辨率的手机;
        (function (doc, win) {
            if( typeof window.ontouchstart === "object") {
                var docEl = doc.documentElement
                var clientHeight = docEl.clientHeight;
                if (!clientHeight) return;
                canvas.height = clientHeight-20;
                if(canvas.width<canvas.height){
                    canvas.width = window.innerWidth;
                }
            };
        })(document, window);

        //取消ios手机，iospad和小米pad中坑爹的上下滚动；
        document.addEventListener("touchmove",function(e){
            e.preventDefault();
            e.stopPropagation();
        },false);

    }
})
