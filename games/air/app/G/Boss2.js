define(["app/G/Boss", "app/Model/wilddog"], function (Boss, wilddog) {

    var Boss2 = P(Boss, function (boss2, boss) {

        boss2.init = function (opt) {
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

        boss2.setup = function () {
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

        boss2.shot = function() {
            this.shot1();
        };

        boss2.shot1 = function () {

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

        boss2.shot2 = function () {

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

        boss2.shot3 = function() {
            this.shot1();
            this.shot2();
        };

        boss2.destory = function () {

            $.dialog({
                content : '恭喜闯关成功， 谢谢您的支持, 最后输入您的大名吧<input name="hero" id="hero" />',
                title : '提示信息',
                ok : function() {
                    wilddog.set( $("#hero").val().substr(0,4), "闯关成功");
                    location.reload();
                },
                cancel : function(){
                    location.reload();
                },
                lock : true
            });
            this.task.clearInterval();
        }
    });

    return Boss2;

});