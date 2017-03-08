define( ["app/util/loadImgs"], function( loadImgs ) {

    var Progress = P(EventBase, function ( progress ) {

        progress.init = function ( ) {

        };

        progress.load = function( arr , prog) {

            var _this = this;
            var obj = loadImgs( arr ,function() {

                _this.fireEvent("done", obj);

            }, function( percent ) {

                _this.fireEvent("load", percent);

            });
        };

    });
    return Progress;

})