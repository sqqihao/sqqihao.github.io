define(["app/G/Plane", "app/G/EMissile", "app/C/Sprite", "app/G/Diamon" , "app/G/Power"], function(Plane, EMissile, Sprite, Diamon, Power) {

    //敌机要走的随机路径参数;
    var route = {
        straight: { x: 0,   y: -50 ,
            E: 100 },
        ltr:      { x: 0,   y: -100,
            B: 75, C: 1, E: 100 },
        circle:   { x: 250,   y: -50,
            A: 0,  B: -100, C: 1, E: 20, F: 100, G: 1, H: Math.PI/2 },
        wiggle:   { x: 100, y: -50,
            B: 50, C: 4, E: 100 },
        step:     { x: 0,   y: -50,
            B: 150, C: 1.2, E: 75 }
    };

    /**
     * @desc 敌人飞机模型;
     * */
    var Enemy = P(Plane, function ( enemy, plane ) {

        enemy.init = function ( opt ) {

            var _this = this;
            plane.init.apply(this, arguments);
            this.opt = opt || {};
            this.canvas = opt.canvas;
            this.context = opt.context;
            this.task = opt.task;
            this.EMissile = opt.EMissile || EMissile;
            this.eMissileBg = opt.eMissileBg || window.gb.imgs["app/imgs/enemybullet1.png"];
            this.eMissileW = opt.eMissileW || 8;
            this.eMissileH = opt.eMissileH || 8;
            this.eMissileSpeedX = opt.eMissileSpeedX || 0;
            this.eMissileSpeedY = opt.eMissileSpeedY || 3;
            this.eMissileDamage = opt.eMissileDamage || 1;
            this.bg = opt.bg || window.gb.imgs["app/imgs/enemy0.png"];
            this.money = opt.money || 1;
            this.task = opt.task;
            this.x = opt.x || 0;
            this.y = opt.y || 0;
            this.speedX = typeof opt.speedX === "number" ? opt.speedX : 1;
            this.speedY =  typeof opt.speedY === "number" ? opt.speedY : 1;
            this.w = opt.w || 40;
            this.h = opt.h || 40;
            this.blood = opt.blood || 2;
            this.speed = opt.speed || 2;
            this.sprite = new Sprite("testData", _.random(30,60), 800);
            this.createTime = Date.now();
            var taskFn = function() {
                _this.setup();
                _this.draw();
                if(_this.x<-_this.w||_this.x>_this.canvas.width||_this.y<-_this.h||_this.y>_this.canvas.height) {
                    _this.task.removeTask( arguments.callee );
                };
            };

            this.task.addTask( taskFn );
            this.remove = function() {

                if( _.random(0,10)>4 ) {

                    var diamon = new Diamon({
                        task : _this.task,
                        canvas : _this.canvas,
                        context : _this.context,
                        x : _this.x,
                        y : _this.y,
                        w : 20,
                        h : 20,
                        speedX : _this.speedX/2,
                        speedY : _this.speedY/2
                    });

                };

                if( _.random(0,10)>7 ) {

                    new Power({
                        task : _this.task,
                        canvas : _this.canvas,
                        context : _this.context,
                        x : _this.x,
                        y : _this.y,
                        speedX : _this.speedX/2,
                        speedY : _this.speedY/2
                    });
                };

                _this.task.removeTask( taskFn );
            }
        };

        enemy.setup = function () {
            var _this = this;
            this.x += this.speedX;
            this.y += this.speedY;
            //canvas, context, bg, x, y, w ,h , info
            //info { speedX, speedY, damage}
            if( this.sprite.calc().now==4 ) {
                var eMissile = new this.EMissile(this.canvas, this.context, this.eMissileBg , this.x+(this.w/2), this.y, this.eMissileW, this.eMissileH, {
                    speedX : this.eMissileSpeedX,
                    speedY : this.eMissileSpeedY,
                    damage : this.eMissileDamage,
                    task : this.task
                });
                var eMTask = function () {
                    eMissile.setup();
                    eMissile.draw();
                    if( eMissile.outOfArea() ) {
                        eMissile.destory();
                        //从task列表删除该函数;
                        _this.task.removeTask( arguments.callee );
                    };
                };
                eMissile.remove = function() {
                    _this.task.removeTask( eMTask );
                };
                _this.task.addTask( eMTask );
            };

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
                    right : plane.x+plane.w,
                    bottom : plane.y+plane.h
                }
            )) {
                //被一个子弹射中以后， 只要子弹不消失;还会被这个子弹射中
                if( (this.blood--)===0 ) {
                    window.gb.userData.score++;
                    this.remove&&this.remove();
                    this.destory&&this.destory();
                };
                plane.judge();

                //播放音乐;
                explodeEffect.play();
            }

        };

        enemy.draw = function () {

            this.context.drawImage(this.bg, this.x, this.y ,this.w, this.h);

        };

    });

    return Enemy;
})