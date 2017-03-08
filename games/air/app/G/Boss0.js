define(["app/G/Boss"], function (Boss) {

    var Boss0 = P(Boss, function (boss0, boss) {

        boss0.init = function () {
            var _this = this;
            boss.init.apply(this, arguments);


            //在飞船出现的两秒钟以后让他的y轴移动速度变为0, 即只要水平移动;
            setTimeout(function () {
                _this.speedY = 0;
            }, 2000);

            setTimeout(function () {
                _this.shot = _this.shot2;
            }, 3000);

            setTimeout(function () {
                _this.shot =  _this.shot3;
            }, 6000);

        };

        boss0.setup = function () {
            var _this = this;
            this.x += this.speedX;
            this.y += this.speedY;
            if(this.y)
            //canvas, context, bg, x, y, w ,h , info
            //info { speedX, speedY, damage}
            var now = this.sprite.calc().now;

            if (now == 4) {
                this.shot();
            };

            if (now == 20) {

                if (_this.speedX == 0) {
                    _this.speedX = 2;
                } else {
                    _this.speedX = -_this.speedX;
                };

            };

        };

        boss0.shot = function() {
            this.shot1();
        };

        boss0.shot1 = function () {

            var _this = this;
            var eMissile = new this.EMissile(this.canvas, this.context, this.eMissileBg, this.x + ((this.w) / 2) - (this.eMissileW / 2), this.y, this.eMissileW, this.eMissileH, {
                speedX: this.eMissileSpeedX,
                speedY: this.eMissileSpeedY,
                damage: this.eMissileDamage,
                task: this.task
            });

            var eMTask = function () {
                eMissile.setup();
                eMissile.draw();
                if (eMissile.outOfArea()) {
                    eMissile.destory();
                    //从task列表删除该函数;
                    _this.task.removeTask(arguments.callee);
                };
            };
            eMissile.remove = function () {
                _this.task.removeTask(eMTask);
            };
            _this.task.addTask(eMTask);

        };

        boss0.shot2 = function () {

            var _this = this;
            //第一枚子弹;
            var eMissile = new this.EMissile(this.canvas, this.context, this.eMissileBg, this.x, this.y, this.eMissileW, this.eMissileH, {
                speedX: this.eMissileSpeedX,
                speedY: this.eMissileSpeedY,
                damage: this.eMissileDamage,
                task: this.task
            });

            var eMTask = function () {
                eMissile.setup();
                eMissile.draw();
                if (eMissile.outOfArea()) {
                    eMissile.destory();
                    //从task列表删除该函数;
                    _this.task.removeTask(arguments.callee);
                };
            };
            eMissile.remove = function () {
                _this.task.removeTask(eMTask);
            };
            _this.task.addTask(eMTask);

            //第二枚子弹;
            var eMissile1 = new this.EMissile(this.canvas, this.context, this.eMissileBg, this.x+this.w, this.y, this.eMissileW, this.eMissileH, {
                speedX: this.eMissileSpeedX,
                speedY: this.eMissileSpeedY,
                damage: this.eMissileDamage,
                task: this.task
            });

            var eMTask0 = function () {
                eMissile1.setup();
                eMissile1.draw();
                if (eMissile1.outOfArea()) {
                    eMissile1.destory();
                    //从task列表删除该函数;
                    _this.task.removeTask(arguments.callee);
                };
            };
            eMissile1.remove = function () {
                _this.task.removeTask( eMTask0 );
            };
            _this.task.addTask( eMTask0 );

        };

        boss0.shot3 = function() {
            this.shot1();
            this.shot2();
        };

        boss0.destory = function () {
            boss.destory.apply(this, arguments);
        }
    });

    return Boss0;

});