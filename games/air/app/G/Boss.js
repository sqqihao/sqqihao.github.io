define(["app/G/Plane", "app/G/EMissile", "app/C/Sprite"], function( Plane, EMissile, Sprite ) {

    var Boss = P(Plane, function (boss, plane) {

        boss.init = function ( opt ) {

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
            this.bg = opt.bg || window.gb.imgs["app/imgs/enmey0.png"];
            this.money = opt.money || 1;
            this.task = opt.task;
            this.x = opt.x || 0;
            this.y = opt.y || 0;
            this.speedX = typeof opt.speedX === "number" ? opt.speedX : 1;
            this.speedY = opt.speedY || 1;
            this.w = opt.w || 40;
            this.h = opt.h || 40;
            this.blood = opt.blood || 2;
            this.speed = opt.speed || 2;
            this.sprite = new Sprite("testData", 20, 500);
            var taskFn = function() {
                _this.setup();
                _this.draw();
            };

            this.task.addTask( taskFn );
            this.remove = function() {
                _this.task.removeTask( taskFn );
            }
        };

        boss.setup = function () {

        };

        boss.draw = function () {

            this.context.drawImage(this.bg, this.x, this.y ,this.w, this.h);

        };

        boss.destory = function () {
            var _this = this;
            plane.destory.apply(_this, arguments);
            setTimeout(function() {
                plane.destory.apply(_this, arguments);

                plane.destory.apply(_this, arguments);

                setTimeout(function() {
                    plane.destory.apply(_this, arguments);

                    plane.destory.apply(_this, arguments);

                    setTimeout(function() {
                        plane.destory.apply(_this, arguments);

                        plane.destory.apply(_this, arguments);

                        setTimeout(function() {

                            plane.destory.apply(_this, arguments);

                            setTimeout(function() {
                                plane.destory.apply(_this, arguments);

                                plane.destory.apply(_this, arguments);

                                setTimeout(function() {
                                    plane.destory.apply(_this, arguments);

                                    plane.destory.apply(_this, arguments);

                                    setTimeout(function() {
                                        plane.destory.apply(_this, arguments);

                                        setTimeout(function() {
                                            plane.destory.apply(_this, arguments);
                                            window.gb.level++;

                                                $.dialog({
                                                    content : '游戏成功, 进入下一关!',
                                                    title : 'alert',
                                                    ok : function() {
                                                        _this.task.clearInterval();
                                                        g( window.gb.level );
                                                    },
                                                    cancel : function(){
                                                        location.reload();
                                                    },
                                                    lock : true
                                                });

                                        },1000);

                                    },1000);

                                },1000);

                            },1000);

                        },1000);

                    },1000);

                },1000);

            },1000);
        };
    });

    return Boss;
})