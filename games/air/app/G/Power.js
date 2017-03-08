define(["app/G/Diamon", "app/C/Sprite"], function( Diamon, Sprite ) {
    var objs = [{
        img : "app/imgs/addbomb.png"
    }, {
        img : "app/imgs/addlife.png"
    }, {
        img : "app/imgs/addhealth.png"
    }, {
        img : "app/imgs/addpower.png"
    },{
        img : "app/imgs/speed.png"
    }];

    var diamonAudio = new GT.Sound({
        id: "Diamon-3",
        src: "./app/audio/Diamon.mp3",
        loop: false,
        volume: 1,
        tag: "Diamon3",
        channel: 2
    });

    var Power = P(Diamon, function( power ,diamon) {
        power.init = function(opt) {
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

            var type = _.random(0,4);
            this.type = type;
            var obj = objs[type];
            this.bg = window.gb.imgs[
                obj.img
            ];

            this.w = 40;
            this.h = 40;
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

        power.setup = function() {
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
                if( this.type == 4) {
                    plane.speed++;
                };

                if( this.type ===3 ) {
                    plane.equitsFlag.push(true);
                    plane.equitsFlag.push(true);
                };

                if( this.type ===2 ) {
                    plane.blood++;
                };

                if( this.type ===1 ) {
                    plane.lifes++;
                };

                if( this.type ===0 ) {
                    plane.raiden();
                };
                //plane.raiden();
                //plane.addScore();
                return "既然碰到了就不要循环了，直接退出";;
            };
            //如果超过界面，那么也删除自己;
            if(_this.x<-_this.w||_this.x>_this.canvas.width||_this.y<-_this.h||_this.y>_this.canvas.height) {
                _this.removeTask();
            };
        };

        power.draw = function() {

            try{
                this.context.drawImage(this.bg , 0, 0, this.bg.width, this.bg.height, this.x, this.y, 24, 24);
            }catch(e) {
                console.log(e);
            }
        };
    });

    return Power;

});