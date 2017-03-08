define(function() {
    var F = function( opt ) {

        this.canvas = opt.canvas;
        this.context = opt.context;
        this.fps = 0;
        this.nowFPS = 50;
        this.now = Date.now();

    };

    F.prototype.step = function() {

        this.fps++;

    };

    F.prototype.draw = function() {

        if(Date.now()-this.now>1000) {
            this.context.save();
            this.context.font = "bold 20px serif";
            this.context.restore();
            this.nowFPS = this.fps;
            this.fps = 0;
            this.now = Date.now();
        };

        this.context.fillText("fps:"+this.nowFPS, this.canvas.width-60, 10);

    };

    return F;

});
