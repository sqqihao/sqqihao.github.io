var util = {

    domCollision : function ( oDiv, oDiv2 ) {

        var t1 = oDiv.offsetTop;
        var l1 = oDiv.offsetLeft;
        var r1 = oDiv.offsetLeft + oDiv.offsetWidth;
        var b1 = oDiv.offsetTop + oDiv.offsetHeight;

        var t2 = oDiv2.offsetTop;
        var l2 = oDiv2.offsetLeft;
        var r2 = oDiv2.offsetLeft + oDiv2.offsetWidth;
        var b2 = oDiv2.offsetTop + oDiv2.offsetHeight;
        if(b1<t2 || l1>r2 || t1>b2 || r1<l2){// 表示没碰上
            return false;
        }else{
            return true;
        };

    },

    canvasCollision : function(obj0, obj1) {
        if( obj0.left>obj1.right || obj0.right<obj1.left || obj0.top>obj1.bottom || obj0.bottom< obj1.top) {
            return false;
        }else{
            return true;
        }
    },

    pointInRect : function ( pointX ,pointY, left, top, width, height ) {
        if( left<pointX && pointX<(left+width) && pointY>top&&(pointY<top+height) ) {
            return true;
        };
        return false
    },

    text : function (canvas, context, left, top, message ) {
        context.save();
        context.font="40px ";
        context.textBaseline = "bottom";
        context.textAlign="center";
        context.fillText( message, left, top);
        context.save();
    },

    fnId : 0,

    button : function(canvas, context, left, top, message, callback ) {
        callback = callback || function () {

        };
        context.save();
        context.fillStyle = "#fff";
        context.font="20px Jocoba";
        context.textBaseline = "top";
        context.textAlign="center";
        context.strokeStyle = "#2980B9";
        //context.fillStyle = "#3498DB";
        context.roundRect(left-40,top-8,80,40, 10);
        //context.fill();
        context.stroke();
        //context
        //context.strokeStyle = "#3498DB";
        context.fillText( message, left, top );
        //context.stroke();
        context.restore();
        var fn = function(ev) {
            var mouseX = ev.pageX ||  ev.touches[0].pageX - this.offsetLeft;
            var mouseY = ev.pageY ||  ev.touches[0].pageY - this.offsetTop;
            if( util.pointInRect(mouseX, mouseY, left-40, top-8, 80, 40) ) {
                callback&&callback();
                //console.log("on point");
            }else{
                //console.log("on false")
            }
        };
        util.addEv(canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", fn);
        return fn;
    },

    drawImage : function( canvas, context, img, left, top, width, height, callback ) {

        callback = callback || function () {

        };
        context.save();
        context.drawImage(img, left, top, width, height );
        context.restore();
        var fn = function(ev) {
            var mouseX = ev.pageX || ev.touches[0].pageX - this.offsetLeft;
            var mouseY = ev.pageY || ev.touches[0].pageY - this.offsetTop;
            if( util.pointInRect(mouseX, mouseY,left, top, width, height) ) {
                callback&&callback();
                //console.log("on point");
            }else{
                //console.log("on false")
            }
        };
        util.addEv(canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", fn);
        return fn;

    },

    addEv : function(el, name ,fn) {
        el.addEventListener(name, fn, false);
    },

    removeEv : function (el, name ,fn) {
        el.removeEventListener(name, fn, false);
    },

    clear : function( canvas ) {
        canvas.width = canvas.width;
        canvas.height = canvas.height;
    }
};

