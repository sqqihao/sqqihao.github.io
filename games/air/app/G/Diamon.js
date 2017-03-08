define(["app/C/Sprite"], function( Sprite ) {

    var Diamon = P(EventBase, function( diamon ) {

        diamon.init = function ( opt ) {

            var _this = this;
            this.x = opt.x || 0;
            this.y = opt.y || 0;
            this.w = opt.w || 10;
            this.h = opt.h || 10;
            this.canvas = opt.canvas || canvas;
            this.context = opt.context || context;
            this.speedX = opt.speedX || 1;
            this.speedY = opt.speedY || 1;
            this.task = opt.task || {};

            this.bg = window.gb.imgs[
                ["app/imgs/diamons/d0.png", "app/imgs/diamons/d1.png", "app/imgs/diamons/d2.png", "app/imgs/diamons/d3.png", "app/imgs/diamons/d4.png"][ _.random(0,4) ]
                ];

            //相对于是>160毫秒执行一次;
            this.sprite = new Sprite("testData", 16, 10);

            this.taskFn = function() {
                _this.setup();
                _this.draw();
            };

            this.task.addTask( this.taskFn );

            this.removeTask = function() {
                this.task.removeTask( this.taskFn );
            };

        };

        diamon.setup = function() {

            var _this = this;
            //改变x和y的位置;
            this.x += this.speedX;
            this.y += this.speedY;

            //和plane进行碰撞检测, 碰到了就从taskList中删除自己, 同时执行plane实例的 addScore方法;
            var plane = this.task.plane;
            if( util.canvasCollision(
                //子弹的信息;
                {
                    left : this.x,
                    top : this.y,
                    right : this.x+this.w,
                    bottom : this.y+this.h
                },
                {
                    left : plane.x,
                    top : plane.y,
                    right : plane.x+plane.width,
                    bottom : plane.y+plane.height
                }
            )) {
                diamonAudio.play();
                _this.removeTask();
                plane.addScore();
                return  "既然碰到了就不要循环了，直接退出";;
            };

            //如果超过界面，那么也删除自己;
            if(_this.x<-_this.w||_this.x>_this.canvas.width||_this.y<-_this.h||_this.y>_this.canvas.height) {
                _this.removeTask();
            };
        };

        diamon.draw = function() {

            try{
                this.context.drawImage(this.bg , 0, 0, 65, 65, this.x, this.y, this.w, this.h);
            }catch(e) {
                console.log(e);
            }
        };

    });


    return Diamon;

});