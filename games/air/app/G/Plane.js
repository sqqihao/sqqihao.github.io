define(["app/C/Sprite"], function( Sprite ) {
    /**
     * @desc 基本的飞机模型;
     * */
    var Plane = P(EventBase, function ( plane  ) {

        plane.init = function ( opt ) {
            this.opt = opt;
            this.bg = "";
            this.speed = 1;
            this.blood = 4;
            /**
             * 后面通过改变speedX和speedY的值，可以形成各种飞机的路线?
             * */
            this.speedX = 0;
            this.speedY = 0;
            this.def = 2;
            var _this = this;
            _this.imgData = [
                {name : window.gb.imgs["app/imgs/explosion1.png"], frames:6, w : 43 ,h : 41},
                {name : window.gb.imgs["app/imgs/explosion0.png"], frames: 8, w : 64 , h : 94},
                {name : window.gb.imgs["app/imgs/explosion2.png"], frames: 7, w : 50 , h : 50},
                {name : window.gb.imgs["app/imgs/explosion3.png"], frames: 6, w : 50 , h : 50},
                {name : window.gb.imgs["app/imgs/explosion4.png"], frames: 14, w : 82 , h : 68}
            ][ Math.floor(Math.random()*5) ];

            this.detorySprite = new Sprite( _this.imgData.name,  _this.imgData.frames, 140 );

        };

        plane.setup = function ( ) {

        };

        plane.draw = function ( ) {

        };

        plane.destory = function ( ) {
            var _this = this;
            //从list中删除飞机;
            shipDestroyEffect.play();
            _this.task.removeEnemy( _this );

            _this.task.addTask(function() {
                var now = _this.detorySprite.calc().now;
                try{
                    _this.opt.context.drawImage(_this.imgData.name, now*_this.imgData.w, 0, _this.imgData.w, _this.imgData.h , _this.x, (_this.y )-20,  _this.imgData.w, _this.imgData.h );
                }catch(e){
                    console.log(e);
                };
                if(now === _this.imgData.frames ) {
                    _this.task.removeTask( arguments.callee );
                };
            });
        };

        plane.addScore = function() {
            this.money++;
        };

    });

    return Plane;
})