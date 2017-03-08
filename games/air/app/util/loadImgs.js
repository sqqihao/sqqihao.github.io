
/**
 * @desc 进度的加载, 图片的预加载;
 * @param array;
 * @param func ==>> this's callback;
 * @return Object;
 */

define( function() {

    return function (arr, cb, prog, errorCb) {

        var obj = {};

        for (var i = 0; i < arr.length; i++) {

            (function(i) {
                var img = new Image();
                img.onload = function () {
                    console.log(this.src);
                    obj[arr[i]] = img;
                    done&&done();
                };
                img.src = arr[i];
                img.onerror = function ( ) {
                    console.log("图片加载失败");
                    errorCb&&errorCb();
                };
            })(i);

        };

        var len = arr.length;

        function done(  ){
            len--;
            prog&&prog( (arr.length-len) / arr.length );
            if( len===0 ) {
                cb&&cb( obj );
            };
        };

        return obj;

    };
});
