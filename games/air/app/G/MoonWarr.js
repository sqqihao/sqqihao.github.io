define( ["app/G/Plane", "app/G/Missile" , "app/C/Sprite", "app/util/CommonController","app/Model/wilddog"],  function ( Plane, Missile, Sprite, CommonController ,wilddog) {

    /**
     * @desc 主角的飞机模型;
     * */
    var MoonWarr = P(Plane, function ( moon, plane ) {

        // 如果把变量定义在这里，会导致一个问题， 所有的实例都会共享这个变量 ， 闭包的另外一种存在方式;
        // 然后导致fireEffect播放出问题的问题，弄了半天;

        moon.init = function ( opt ) {

            opt = opt || {
            };
            plane.init.apply(this, arguments);
            this.opt = opt;
            this.task = opt.task;
            this.y = opt.canvas.height-40;
            this.x = (opt.canvas.width-40)/2;
            this.canvas = opt.canvas;
            this.context = opt.context;
            this.w = 40;
            this.h = 40;
            this.dis = 20;

            this.money = 0;
            this.blood = 10;
            this.lifes = 4;

            this.speed = opt.speed || 2;
            this.equitsFlag =
                [true] ;
               /* [
                    true ,true, true, true ,
                true ,true, true, true ,
                true,true,
                true,
                    true, true
            ];
*/
            this.equits = [
                {
                    bg:"app/imgs/hole.png",
                    damage : 2,
                    speedX : 0,
                    speedY : -5,
                    dx : 4,
                    dy : -20,
                    w : 30,
                    h : 30
                },
                {
                    bg : "app/imgs/mybullet1.png",
                    damage : 1,
                    speedX : 0,
                    speedY : -3,
                    dx : 2,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet1.png",
                    damage : 1,
                    speedX : 0,
                    speedY : -3,
                    dx : 30,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet1.png",
                    damage : 1,
                    speedX : -0.2,
                    speedY : -3,
                    dx : 2,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet1.png",
                    damage : 1,
                    speedX : 0.2,
                    speedY : -3,
                    dx : 30,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet2.png",
                    damage : 1,
                    speedX : -0.4,
                    speedY : -4,
                    dx : 2,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet2.png",
                    damage : 1,
                    speedX : 0.4,
                    speedY : -4,
                    dx : 30,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet2.png",
                    damage : 1,
                    speedX : -0.6,
                    speedY : -4,
                    dx : 2,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg : "app/imgs/mybullet2.png",
                    damage : 1,
                    speedX : 0.6,
                    speedY : -4,
                    dx : 30,
                    dy : -10,
                    w : 9,
                    h : 15
                },
                {
                    bg:"app/imgs/mybullet3.png",
                    damage : 3,
                    speedX : -0.3,
                    speedY : -4,
                    dx : 4,
                    dy : -20,
                    w : 10,
                    h : 14
                },
                {
                    bg:"app/imgs/mybullet3.png",
                    damage : 3,
                    speedX : 0.3,
                    speedY : -4,
                    dx : 24,
                    dy : -20,
                    w : 10,
                    h : 14
                },{
                    bg : "app/imgs/bomb.png",
                    damage : 4,
                    speedX : -0.5,
                    speedY : -2,
                    dx : 0,
                    dy : -20,
                    w : 20,
                    h : 20,
                    fn : (function () {
                        var flag = 1;
                        var temp = 0.01;
                        return function( speedX ) {
                            if( flag === 1 ) {
                                return speedX-temp;
                            }
                            flag = -flag;
                        };
                    })()
                },{
                    bg : "app/imgs/bomb.png",
                    damage : 4,
                    speedX : 0.5,
                    speedY : -2,
                    dx : 36,
                    dy : -20,
                    w : 20,
                    h : 20,
                    fn : (function () {
                        var flag = 1;
                        var temp = 0.01;
                        return function( speedX ) {
                            if( flag === 1 ) {
                                return speedX+temp;
                            }
                            flag = -flag;
                        };
                    })()
                }
            ];
            this.bg = opt.bg;
            this.sprite = new Sprite( this.bg , window.gb.userData.frames, 400);
            this.bindEv();

            //初始话子弹的发射, 300毫秒自动发射;
            this.missileSprite = new Sprite("testData", 20, 800);
        };

        moon.setup = function () {
            if( this.missileSprite.calc().now === 1 ) {
                var _this = this;
                for(var i=0; i<this.equits.length; i++ ) {

                    if( this.equitsFlag[i] ) {

                        var equit = this.equits[i];

                        //产生子弹;
                        (function(equit) {

                            var missile2 = new Missile( this.opt.canvas, this.opt.context, window.gb.imgs[equit.bg],this.x + equit.dx, this.y + equit.dy, equit.w, equit.h, { speedX : equit.speedX, speedY : equit.speedY, damage : equit.damage, fn : equit.fn, task : _this.task});

                            var missileTask = function () {
                                missile2.setup();
                                missile2.draw();
                                missile2.draw();
                                if( missile2.outOfArea() ) {
                                    missile2.destory();
                                    //从task列表删除该函数;
                                    _this.task.removeTask( arguments.callee );
                                };
                            };
                            missile2.remove = function() {
                                _this.task.removeTask( missileTask );
                            };

                            _this.task.addTask( missileTask );

                        }).call(_this,equit);
                    }

                };
                fireEffect.play();

            };
        };

        moon.draw = function () {

            var dx = this.sprite.calc().now;
            try{
                this.opt.context.drawImage(this.opt.bg , dx*78 || 0, 0, 78, 85, this.x, this.y, this.w, this.h);
            }catch(e) {
                this.opt.context.drawImage(this.opt.bg , 0, 0, 78, 85, this.x, this.y, this.w, this.h);
                //console.log(e);
            }

        };

        /**
         * @desc
         * */
        moon.raiden = function () {
            //raiden 雷达;
            var orginalDraw = this.draw;
            var _this = this;
            var date = Date.now();
            var frame = 11;
            var dx = 0;
            this.draw = function() {
                orginalDraw.apply(_this, arguments);
                if( Date.now() - date>4000/11) {
                    dx++;
                    date = Date.now();
                };
                _this.opt.context.drawImage( window.gb.imgs["app/imgs/flash.png"],dx*_this.w ,0, 100, 100,_this.x, _this.y, _this.w, _this.h);
            };
            setTimeout( function() {
                _this.draw = orginalDraw;
            },4000);
        };

        /**
         * @desc 让飞机变红;
         * */
        moon.red = function() {
            var orginalDraw = this.draw;
            var _this = this;
            this.draw = function() {
                //_this.opt.context.fillStyle = "rgba(255, 255, 255, "+Math.random()+")";
                _this.opt.context.fillStyle = "#f00";
                _this.opt.context.globalCompositeOperation = "lighter";
                _this.opt.context.fillRect(_this.x, _this.y, _this.w, _this.h);
                orginalDraw.apply(_this, arguments);
            };
            setTimeout( function() {
                _this.draw = orginalDraw;
            },4000);
        };

        /**
         *  @desc flash the plant;
         * */
        moon.flash = function () {
            var orginalDraw = this.draw;
            var _this = this;
            this.draw = function() {
                var random = Math.random();
                _this.opt.context.fillStyle = "rgba(255, 255, 255, "+random+")";
                if( random> 0.3) {
                    orginalDraw.apply(_this, arguments);
                };
            };
            setTimeout( function() {
                _this.draw = orginalDraw;
            },4000);
        };


        /**
         * @desc draw equipment;
         * */
        /**
         * {
         *      bg:"app/imgs/hole.png",
         *      damage : 3,
         *      speedX : 0,
         *      speedY : -3
         *  }
         * */
        var equits = [];
        moon.equits = function () {

            [].splice.call(arguments,0,0,this.x, this.y, this.width, this.height);
            for(var i= 0, len = equits.length; i<len; i++) {
                equits[i].apply( this, arguments);
            };

        };

        /**
         * @desc 为主机添加额外的属性;
         * */
        moon.addEquit = function ( obj ) {
            equits.push( obj );
            return this;
        };

        /**
         * @desc 删除额外属性;
         * */
        moon.removeEquit = function (obj) {
            var index = equits.indexOf( obj );
            if( index !== -1 ) {
                equits.splice(index,1);
            };
            return this;
        };


        moon.drawDashLine = function() {
            var draw = (function () {

                if( Math.random()*10>6 ) {

                    this.opt.context.save();
                    this.opt.context.beginPath();
                    this.opt.context.setLineDash([5]);
                    this.opt.context.strokeStyle = "#EEEEEE";
                    this.opt.context.arc( arguments[0], arguments[1], arguments[2], 0, 2*Math.PI, true );
                    this.opt.context.stroke();
                    this.opt.context.restore();

                };

            }).bind(this);
            var _this = this;

            this.addEquit(draw);
            setTimeout(function() {
                _this.removeEquit( draw );
            }, 4000);
        };

        /**
         * @desc 设置Left值;
         * */
        moon.setLeft = function( left ) {
            moon.x = left;
        };

        /**
         * @desc 设置Top值;
         * */
        moon.setTop = function ( top ) {
            moon.y = top;
        };

        /**
         * @desc 绑定事件, 主要是方向键的绑定;
         * */
        moon.bindEv = function () {
            var _this = this;

            //绑定移动的四个方向;
            var commonControll = new CommonController();
            commonControll.run(function( disX, objX, disY ) {
                var speed =  Math.abs(( (objX - disX)*_this.speed ) / Math.pow((objX-disX)*(objX-disX)+(_this.y-disY)*(_this.y-disY) , 1/2));
                if( isNaN(speed) ) speed = _this.speed;
                _this.x-=speed;
                if( _this.x<0 ) _this.x = 0;
                if( _this.x< disX) _this.x = disX;
                if( _this.x+_this.w> _this.canvas.width) _this.x = _this.canvas.width-_this.w;

            }, function ( disY, objY , disX) {

                //根据2px的距离进行换算到y的实际速度;
                var speed = Math.abs(((objY - disY)*_this.speed)/Math.pow((objY - disY)*(objY - disY)+(disX-_this.x)*(disX-_this.x), 1/2));
                //var speed = Math.abs((_this.speed*(disY-_this.y))/(disX-_this.x));
                if( isNaN(speed) ) speed = _this.speed;
                _this.y-=speed;
                if( _this.y<0 ) _this.y=0;
                if( _this.y<disY )_this.y = disY;

            }, function ( disX, objX, disY ) {

                var speed =  Math.abs(( (objX - disX)*_this.speed ) / Math.pow((objX-disX)*(objX-disX)+(_this.y-disY)*(_this.y-disY) , 1/2));
                if( isNaN(speed) ) speed = _this.speed;
                _this.x+=speed;
                if( _this.x>disX ) _this.x = disX;
                if( _this.x>_this.canvas.width-_this.w) _this.x = _this.canvas.width-_this.h;

            }, function ( disY, objY , disX) {

                //根据2px的距离进行换算到y的实际速度;
                var speed = Math.abs(((objY - disY)*_this.speed)/Math.pow((objY - disY)*(objY - disY)+(disX-_this.x)*(disX-_this.x), 1/2));
                //var speed =  Math.abs((_this.speed*(disY-_this.y))/(disX-_this.x));
                if( isNaN(speed) ) speed = _this.speed;
                _this.y+=speed;
                if( _this.y>disY )_this.y = disY;
                if( _this.y>_this.canvas.height - _this.h ) _this.y = _this.canvas.height - _this.h;

            }, function(){},_this);
        };

        moon.remove = function() {
            var _this = this;
            this.blood = 10;
            this.lifes--;
            if( this.lifes === -1 ) {
                $.dialog({
                    content : '游戏失败，英雄，写上你的大名<input name="hero" id="hero" />',
                    title : '提示信息',
                    ok : function() {
                        wilddog.set( $("#hero").val().substr(0,4), _this.money);
                        location.reload();
                    },
                    cancel : function(){
                        location.reload();
                    },
                    lock : true
                });
                this.task.clearInterval();
            };
            this.flash();
        };

        moon.judge = function () {
            this.blood--;
            this.destory&&this.destory();
            if( (this.blood--)<=0 ) {
                this.remove&&this.remove();
            };
        }
    });

    return MoonWarr;
})