define(["app/G/Enemy", "app/G/EMissile", "app/G/Boss", "app/G/Boss0", "app/G/Boss1", "app/G/Boss2"], function ( Enemy ,EMissile, Boss, Boss0, Boss1, Boss2) {
    return function ( canvas ,context) {
        //野怪地图
        var LEVELS = {
            //一级;
            0 : {
            },
            //二级;
            1 : {

            },
            //三级;
            2 : {

            },
            //四级;
            3 : {

            }
        };

        //生成一组野怪的方法;
        function group(obj, timeStart, timeEnd , Enemys) {
            for(var i=parseInt(timeStart) ; i<parseInt(timeEnd); i+=1000) {
                if( typeof obj[i] ==="object"  ) {
                    obj[i].push( Enemys[0] );
                }else{
                    obj[i] = Enemys;
                };
            };
        };

        //随机怪物;
        for(var i=0; i<200; i++ ) {
            var positionX = [-10,canvas.width-10][_.random(0,1)];
            var positionY = _.random(-20,100);
            var speedX = positionX <0 ? [1, 2, 3, 4, 5, 6][_.random(0,6)] : [-1,-2,-3,-5, -4][_.random(0,5)];
            var speedY = [1, 2, 3, 4, 5][_.random(0,4)];

            //200秒内出现的飞机;
            LEVELS[0][ parseInt( Math.floor(Math.random()*200)+"000")  ] = [[Enemy, {
                canvas : canvas,
                context : context,
                bg : window.gb.imgs[
                    [
                        //"app/imgs/enemy6.png","app/imgs/enemy7.png","app/imgs/enemy8.png","app/imgs/enemy9.png
                        "app/imgs/enemy0.png","app/imgs/enemy1.png","app/imgs/enemy2.png","app/imgs/enemy3.png","app/imgs/enemy4.png","app/imgs/enemy5.png"][_.random(0,6)]
                    ],
                w : 40,
                h : 40,
                x : positionX,
                y : positionY ,
                speedX : speedX,
                speedY : speedY,
                blood : 2,
                eMissileSpeedX : speedX+2,
                eMissileSpeedY : speedY+2,
                eMissileBg : window.gb.imgs[["app/imgs/enemybullet1.png","app/imgs/enemybullet.png","app/imgs/blastz1.png","app/imgs/blastz2.png","app/imgs/blastz3.png","app/imgs/blastz4.png","app/imgs/blastz5.png","app/imgs/blastz6.png"][_.random(0.7)]],
                EMissile : EMissile,
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileDamage : 1
            }]];
            //
        };

        //一到四秒出现的野怪
        group(LEVELS[0], 1000, 4000, [
            [Enemy,{
                canvas : canvas,
                context :context,
                bg : window.gb.imgs["app/imgs/enemy0.png"],
                w : 40,
                h : 40,
                x : 0,
                y : 0,
                speedX : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet1.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //7到11秒出现的野怪
        group(LEVELS[0], 7000, 11000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy1.png"],
                w : 40,
                h : 40,
                x : 0,
                y : 100,
                speedX : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //12到18秒出现的野怪
        group(LEVELS[0], 12000, 18000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy1.png"],
                w : 40,
                h : 40,
                x : canvas.width/2,
                y : -10,
                speedX : 0,
                speedY : 2,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : -3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //20到26秒出现的野怪
        group(LEVELS[0], 20000, 26000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy3.png"],
                w : 40,
                h : 40,
                x : 0,
                y : canvas.width-1,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet1.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //30到36秒出现的野怪
        group(LEVELS[0], 30000, 36000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy4.png"],
                w : 40,
                h : 40,
                x : 1,
                y : canvas.width-1,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //37到40秒出现的野怪
        group(LEVELS[0], 37000, 40000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy5.png"],
                w : 40,
                h : 40,
                x : canvas.width-1,
                y : 0,
                speedX : 2,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 2,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);


        //41到50秒出现的野怪
        group(LEVELS[0], 41000, 50000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy2.png"],
                w : 50,
                h : 50,
                x : canvas.width-1,
                y : 100,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //50到55秒出现的野怪
        group(LEVELS[0], 50000, 55000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy5.png"],
                w : 50,
                h : 50,
                x : canvas.width-1,
                y : 0,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //55到60秒出现的野怪
        group(LEVELS[0], 55000, 60000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy4.png"],
                w : 50,
                h : 50,
                x : canvas.width-1,
                y : 0,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]

        ]);

        //第一关的boss要出现了;
        LEVELS[0][ "210000" ] = [[Boss0, {
            canvas : canvas,
            context : context,
            bg : window.gb.imgs["app/imgs/boss.png"],
            w : 176,
            h : 80,
            x : (canvas.width-176)/2,
            y : -79 ,
            speedX : 0,
            speedY : 1,
            blood : 200,
            eMissileSpeedX : 0,
            eMissileSpeedY : 4,
            eMissileBg : window.gb.imgs["app/imgs/bossbullet2.png"],
            EMissile : EMissile,
            eMissileH : 41,
            eMissileW : 16,
            eMissileDamage : 1
        }]];


        //第二关;

        //随机怪物;
        for(var i=0; i<400; i++ ) {
            var positionX = [-10,canvas.width-10][_.random(0,1)];
            var positionY = _.random(-20,100);
            var speedX = positionX <0 ? [1, 2, 3, 4, 5, 6][_.random(0,5)] : [-1,-2,-3,-5, -4][_.random(0,5)];
            var speedY = [1, 2, 3, 4, 5][_.random(0,4)];

            //200秒内出现的飞机;
            LEVELS[1][ parseInt( Math.floor(Math.random()*200)+"000")  ] = [[Enemy, {
                canvas : canvas,
                context : context,
                bg : window.gb.imgs[
                    [
                        "app/imgs/enemy6.png","app/imgs/enemy7.png","app/imgs/enemy8.png","app/imgs/enemy9.png"][_.random(0,3)]
                    ],
                w : 40,
                h : 40,
                x : positionX,
                y : positionY ,
                speedX : speedX,
                speedY : speedY,
                blood : 2,
                eMissileSpeedX : speedX+2,
                eMissileSpeedY : speedY+2,
                eMissileBg : window.gb.imgs[["app/imgs/enemybullet1.png","app/imgs/enemybullet.png","app/imgs/blastz1.png","app/imgs/blastz2.png","app/imgs/blastz3.png","app/imgs/blastz4.png","app/imgs/blastz5.png","app/imgs/blastz6.png"][_.random(0.7)]],
                EMissile : EMissile,
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileDamage : 1
            }]];
            //
        };
        //一到四秒出现的野怪
        group(LEVELS[1], 1000, 4000, [
            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy5.png"],
                w : 40,
                h : 40,
                x : 0,
                y : 0,
                speedX : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet1.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //7到11秒出现的野怪
        group(LEVELS[1], 7000, 11000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy6.png"],
                w : 40,
                h : 40,
                x : 0,
                y : 100,
                speedX : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //12到18秒出现的野怪
        group(LEVELS[1], 12000, 18000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy7.png"],
                w : 40,
                h : 40,
                x : canvas.width/2,
                y : -10,
                speedX : 0,
                speedY : 2,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : -3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //20到26秒出现的野怪
        group(LEVELS[1], 20000, 26000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy8.png"],
                w : 40,
                h : 40,
                x : 0,
                y : canvas.width-1,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet1.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //30到36秒出现的野怪
        group(LEVELS[1], 30000, 36000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy9.png"],
                w : 40,
                h : 40,
                x : 1,
                y : canvas.width-1,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //37到40秒出现的野怪
        group(LEVELS[1], 37000, 40000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy6.png"],
                w : 40,
                h : 40,
                x : canvas.width-1,
                y : 0,
                speedX : 2,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 2,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);


        //41到50秒出现的野怪
        group(LEVELS[1], 41000, 50000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy8.png"],
                w : 50,
                h : 50,
                x : canvas.width-1,
                y : 100,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //50到55秒出现的野怪
        group(LEVELS[1], 50000, 55000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy9.png"],
                w : 50,
                h : 50,
                x : canvas.width-1,
                y : 0,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //55到60秒出现的野怪
        group(LEVELS[1], 55000, 60000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy7.png"],
                w : 50,
                h : 50,
                x : canvas.width-1,
                y : 0,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]

        ]);

        //第二关;
        LEVELS[1]["210000"] = [[Boss1, {
            canvas : canvas,
            context : context,
            bg : window.gb.imgs["app/imgs/boss0.png"],
            w : 176,
            h : 80,
            x : (canvas.width-176)/2,
            y : -30 ,
            speedX : 1,
            speedY : 2,
            blood : 400,
            eMissileSpeedX : 0,
            eMissileSpeedY : 4,
            eMissileBg : window.gb.imgs["app/imgs/pd30.png"],
            EMissile : EMissile,
            eMissileH : 41,
            eMissileW : 16,
            eMissileDamage : 1
        }]];

        //第三关;

        //随机怪物;
        for(var i=0; i<500; i++ ) {
            var positionX = [-10,canvas.width-10][_.random(0,1)];
            var positionY = _.random(-20,100);
            var speedX = positionX <0 ? [1, 2, 3, 4, 5, 6][_.random(0,5)] : [-1,-2,-3,-5, -4][_.random(0,5)];
            var speedY = [1, 2, 3, 4, 5][_.random(0,4)];

            //200秒内出现的飞机;
            LEVELS[2][ parseInt( Math.floor(Math.random()*200)+"000")  ] = [[Enemy, {
                canvas : canvas,
                context : context,
                bg : window.gb.imgs[
                    [
                        "app/imgs/enemy0.png","app/imgs/enemy4.png","app/imgs/enemy6.png","app/imgs/enemy8.png","app/imgs/enemy9.png"][_.random(0,4)]
                    ],
                w : 60,
                h : 60,
                x : positionX,
                y : positionY ,
                speedX : speedX,
                speedY : speedY,
                blood : 2,
                eMissileSpeedX : speedX+2,
                eMissileSpeedY : speedY+2,
                eMissileBg : window.gb.imgs[["app/imgs/enemybullet1.png","app/imgs/enemybullet.png","app/imgs/blastz1.png","app/imgs/blastz2.png","app/imgs/blastz3.png","app/imgs/blastz4.png","app/imgs/blastz5.png","app/imgs/blastz6.png"][_.random(0.7)]],
                EMissile : EMissile,
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileDamage : 1
            }]];
            //
        };
        //一到四秒出现的野怪
        group(LEVELS[2], 1000, 4000, [
            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy0.png"],
                w : 60,
                h : 60,
                x : 0,
                y : 0,
                speedX : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz1.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //7到11秒出现的野怪
        group(LEVELS[2], 7000, 11000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy8.png"],
                w : 60,
                h : 60,
                x : 0,
                y : 100,
                speedX : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //12到18秒出现的野怪
        group(LEVELS[2], 12000, 18000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy9.png"],
                w : 60,
                h : 60,
                x : canvas.width/2,
                y : -10,
                speedX : 0,
                speedY : 2,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : -3,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //20到26秒出现的野怪
        group(LEVELS[2], 20000, 26000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy0.png"],
                w : 60,
                h : 60,
                x : 0,
                y : canvas.width-1,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/enemybullet1.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //30到36秒出现的野怪
        group(LEVELS[2], 31000, 36000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy9.png"],
                w : 60,
                h : 60,
                x : 10,
                y : -40,
                speedX : 1,
                speedY : 3,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //37到40秒出现的野怪
        group(LEVELS[2], 37000, 40000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy8.png"],
                w : 60,
                h : 60,
                x : canvas.width/2,
                y : -10,
                speedX : 0,
                speedY : 2,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 2,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);


        //41到50秒出现的野怪
        group(LEVELS[2], 38000, 50000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy8.png"],
                w : 60,
                h : 60,
                x : canvas.width-1,
                y : -40,
                speedX : -1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //50到55秒出现的野怪
        group(LEVELS[2], 50000, 55000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy9.png"],
                w : 60,
                h : 60,
                x : canvas.width-1,
                y : 0,
                speedX : -1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]
        ]);

        //55到60秒出现的野怪
        group(LEVELS[2], 55000, 60000, [

            [Enemy,{
                canvas : canvas,
                context : context,
                bg : window.gb.imgs["app/imgs/enemy7.png"],
                w : 60,
                h : 60,
                x : -10,
                y : -10,
                speedX : 1,
                speedX : 1,
                EMissile : EMissile,
                eMissileBg :  window.gb.imgs["app/imgs/blastz3.png"],
                eMissileH : 8,
                eMissileW : 8 ,
                eMissileSpeedX : 0,
                eMissileSpeedY : 5,
                eMissileDamage : 1
            }]

        ]);

        //第三关;
        LEVELS[2]["210000"] = [[Boss2, {
            canvas : canvas,
            context : context,
            bg : window.gb.imgs["app/imgs/boss3.png"],
            w : 149,
            h : 193,
            x : (canvas.width-176)/2,
            y : -30 ,
            speedX : 1,
            speedY : 2,
            blood : 400,
            eMissileSpeedX : 0,
            eMissileSpeedY : 4,
            eMissileBg : window.gb.imgs["app/imgs/pd30.png"],
            EMissile : EMissile,
            eMissileH : 41,
            eMissileW : 16,
            eMissileDamage : 1
        }]];

        return LEVELS;
    };

})