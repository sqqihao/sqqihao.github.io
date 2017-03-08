

/**
 * @desc 这个插件是为了跨浏览器操作的操作而存在的， 在PC端和在移动端中会调用对应传进去的函数；
 * @desc 如果用户在PC端中按”上下左右“方向键， 或者在手机端中移动手势会调用对应方向的函数；
 * @desc 这个插件也解决了在PC端如果用户持续按住一个键时候， 会延迟一段时间触发事件的问题， 这个问题可以参考这里： http://www.w3cfuns.com/article-5593414-1-1.html  ；
 *
 * @param {funciton} 当方向为左时候调用的函数；
 * @param {funciton} 当方向为上时候调用的函数；
 * @param {funciton} 当方向为右时候调用的函数；
 * @param {funciton} 当方向为下时候调用的函数；
 * @param {function} 当函数执行完毕时候执行的回调;
 */
define(function() {

    var CommonControl = function() {
        this.timer = null;
    };

    CommonControl.prototype.run = function(leftFn, upFn, rightFn, bottomFn ,callback, obj) {
        typeof document.ontouchstart == "object" ?
            this.mobile.apply(this, arguments) :
            this.PC.apply(this, arguments);
        return this;
    };

    CommonControl.prototype.PC = function(leftFn, upFn, rightFn, bottomFn ,callback, obj) {
        var _this = this;
        var fn;
        //系统默认的keydown是第一次触发，然后间隔一些毫秒再持续重新触发;
        addEvent(window, "keydown", function(ev) {
            clearInterval( _this.timer );
            //65 85 68 83
            switch  (ev.keyCode) {
                case 65 :
                case 37 :
                    fn = leftFn;
                    break;
                case 85 :
                case 38 :
                    fn = upFn;
                    break;
                case 68 :
                case 39 :
                    fn =  rightFn;
                    break;
                case 83 :
                case 40 :
                    fn = bottomFn;
                    break;
            };
            _this.timer = setInterval(function() {
                fn&&fn();
                callback&&callback();
            }, 10);
        });
        addEvent(window, "keyup", function() {
            clearInterval( _this.timer );
        });


        //处理click的事件;
        var _this = this;
        var disX = 0,disY = 0, dirX , dirY;
        var evFn =  function(ev) {
            clearInterval( _this.timer );
            disX = ev.clientX;
            disY = ev.clientY;
            var fns = [];
            //如果点击的距离超过50像素触发事件;
            if( Math.abs(disX-obj.x)<obj.dis &&  Math.abs(disY-obj.y)<obj.dis) {

                return ;

            }else{

                //如果当前的x大于物体右侧, 就像右走;
                if(disX > obj.x ) {
                    fns.push( rightFn.bind(rightFn,disX, obj.x, disY) );
                }else{
                    fns.push( leftFn.bind(leftFn, disX, obj.x, disY) );
                };

                //如果当前的Y大于物体的y轴, 就像下走;
                if( disY > obj.y ) {
                    fns.push( bottomFn.bind(bottomFn,disY,obj.y, disX) );
                }else{
                    fns.push( upFn.bind(bottomFn,disY,obj.y, disX) );
                };
            };
            _this.timer = setInterval(function() {
                for(var i=0; i<fns.length; i++ ) {
                    fns[i].call(fns[i], obj.el);
                };
                callback&&callback();
            }, 10);
        };
        addEvent(obj.canvas, "mousedown", evFn);
        addEvent(obj.canvas, "mouseup", function() {
            clearInterval( _this.timer );
        });
    };

    /**
     * @param obj {
         *  dis : //在这个宽度以内不执行回调
         *  x : x轴方向的距离;
         *  y : y轴方向的距离;
         *  canvas : 绑定事件的元素;
         * }
     * */
    CommonControl.prototype.mobile = function(leftFn, upFn, rightFn, bottomFn ,callback, obj) {
        var _this = this;
        var disX = 0,disY = 0, dirX , dirY;
        var evFn =  function(ev) {
            clearInterval( _this.timer );
            disX = ev.touches&&ev.touches[0].clientX;
            disY = ev.touches&&ev.touches[0].clientY;
            var fns = [];
            //如果点击的距离超过50像素触发事件;
            if( Math.abs(disX-obj.x)<obj.dis &&  Math.abs(disY-obj.y)<obj.dis) {

                return ;

            }else{

                //如果当前的x大于物体右侧, 就像右走;
                if(disX > obj.x ) {
                    fns.push( rightFn.bind(rightFn,disX, obj.x, disY) );
                }else{
                    fns.push( leftFn.bind(leftFn, disX, obj.x, disY) );
                };

                //如果当前的Y大于物体的y轴, 就像下走;
                if( disY > obj.y ) {
                    fns.push( bottomFn.bind(bottomFn,disY,obj.y, disX) );
                }else{
                    fns.push( upFn.bind(bottomFn,disY,obj.y, disX) );
                };
            };
            _this.timer = setInterval(function() {
                for(var i=0; i<fns.length; i++ ) {
                    fns[i].call(fns[i], obj.el);
                };
                callback&&callback();
            }, 10);
        };
        addEvent(obj.canvas ,"touchstart", evFn);
        addEvent(obj.canvas ,"touchmove", evFn);

        addEvent(obj.canvas ,"touchend", function(ev) {
            clearInterval( _this.timer );
        });
    };
    return CommonControl;
});