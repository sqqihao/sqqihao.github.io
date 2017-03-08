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

+function() {
    function addEvent( obj, type, fn ) {
        if (obj.addEventListener)
            obj.addEventListener( type, fn, false );
        else if (obj.attachEvent) {
            obj["e"+type+fn] = fn;
            obj.attachEvent( "on"+type, function() { obj["e"+type+fn](); } );
        };
    };
    function removeEvent( obj, type, fn ) {
        if (obj.removeEventListener)
            obj.removeEventListener( type, fn, false );
        else if (obj.detachEvent) {
            obj.detachEvent( "on"+type, obj["e"+type+fn] );
            obj["e"+type+fn] = null;
        };
    };

    var CommonControl = function() {
        this.timer = null;
    };

    CommonControl.prototype.run = function(leftFn, upFn, rightFn, bottomFn ,callback) {
        typeof document.ontouchstart == "object" ?
            this.mobile.apply(this, arguments) :
            this.PC.apply(this, arguments);
        return this;
    };

    CommonControl.prototype.PC = function(leftFn, upFn, rightFn, bottomFn ,callback) {
        var _this = this;
        var fn;
        //系统默认的keydown是第一次触发，然后间隔一些毫秒再持续重新触发;
        addEvent(window, "keydown", function(ev) {
            clearInterval( _this.timer );
            switch  (ev.keyCode) {
                case 37 :
                    fn = leftFn;
                    break;
                case 38 :
                    fn = upFn;
                    break;
                case 39 :
                    fn =  rightFn;
                    break;
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
    };

    CommonControl.prototype.mobile = function(leftFn, upFn, rightFn, bottomFn ,callback) {
        var _this = this;
        var disX = 0,disY = 0, dirX , dirY;
        addEvent(document,"touchstart", function(ev) {
            disX = ev.touches&&ev.touches[0].clientX;
            disY = ev.touches&&ev.touches[0].clientY;
        });
        addEvent(document,"touchmove", function(ev) {
            var nowX = ev.touches&&ev.touches[0].clientX;
            var nowY = ev.touches&&ev.touches[0].clientY;
            dirX = nowX - disX;
            dirY = nowY - disY;
            disX = ev.touches&&ev.touches[0].clientX;
            disY = ev.touches&&ev.touches[0].clientY;
            clearInterval( _this.timer );
            var fn;
            //x是变大，而且，x变大的绝对值大于y;
            if(dirX>0&&dirX>Math.abs(dirY)){
                fn = rightFn;
            }else if(dirX<0&&Math.abs(dirX)>Math.abs(dirY)){
                fn = leftFn;
            }else if( dirY>0&&dirY>Math.abs(dirX) ){
                fn = bottomFn;
            }else{
                fn = upFn;
            };
            _this.timer = setInterval(function() {
                fn&&fn();
                callback&&callback();
            }, 10);

        });
        addEvent(document,"touchend", function(ev) {
            clearInterval( _this.timer );
        });
    };

    //兼容AMD版本;
    if ( typeof define === "function" && define.amd ) {
        define( "CommonControl", [], function() {
            return CommonControl;
        });
    }else{
        window.CommonControl = CommonControl;
    };
}()