define(["app/G/Boss"], function (Boss) {

    var Boss0 = P(Boss, function (boss0, boss) {

        boss0.init = function (opt) {
            var _this = this;
            boss.init.apply(this, arguments);

            this.eMissileBg = opt.eMissileBg || window.gb.imgs["app/imgs/pd30.png"];
            this.bg = opt.bg || window.gb.imgs["app/imgs/boss0.png"];

            setTimeout(function () {
                _this.shot = _this.shot2;
            }, 3000);

            setTimeout(function () {
                _this.shot =  _this.shot3;
            }, 6000);

        };

        boss0.setup = function () {
            var _this = this;
            if(this.y>300)this.speedY = -this.speedY;
            if(this.y<0)this.speedY = Math.abs( this.speedY );
            if(this.x<0||this.x>this.canvas.width-this.w)this.speedX = -this.speedX;
            this.x += this.speedX;
            this.y += this.speedY;
            //canvas, context, bg, x, y, w ,h , info
            //info { speedX, speedY, damage}
            var now = this.sprite.calc().now;

            if (now == 4) {
                this.shot();
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