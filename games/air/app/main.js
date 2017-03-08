/**
 * @desc 这个是属于整体的配置对象
 * */
var cfg = cfg || {

};

window.gb = window.gb || {

    //所有的用户信息保存这里面
    users : ["app/imgs/start.png","app/imgs/background1.jpg","app/imgs/plane11.png", "app/imgs/plane12.png", "app/imgs/plane8.png","app/imgs/plane9.png",
        "app/imgs/back_img.png","app/imgs/back_img1.png","app/imgs/back_img2.png",
        "app/imgs/flash.png", "app/imgs/life.png", "app/imgs/money.png", "app/imgs/power.png","app/imgs/speed.png",
        "app/imgs/mybullet1.png", "app/imgs/mybullet2.png", "app/imgs/mybullet3.png",
        "app/imgs/enemy0.png","app/imgs/enemy1.png","app/imgs/enemy2.png","app/imgs/enemy3.png","app/imgs/enemy4.png","app/imgs/enemy5.png",
        "app/imgs/enemy6.png","app/imgs/enemy7.png","app/imgs/enemy8.png","app/imgs/enemy9.png",
        "app/imgs/enemybullet1.png","app/imgs/enemybullet.png","app/imgs/blastz1.png","app/imgs/blastz2.png","app/imgs/blastz3.png","app/imgs/blastz4.png","app/imgs/blastz5.png","app/imgs/blastz6.png",
        "app/imgs/hole.png","app/imgs/bomb.png",
        "app/imgs/explosion0.png","app/imgs/explosion1.png","app/imgs/explosion2.png","app/imgs/explosion3.png","app/imgs/explosion4.png",
        "app/imgs/diamons/d0.png", "app/imgs/diamons/d1.png", "app/imgs/diamons/d2.png", "app/imgs/diamons/d3.png", "app/imgs/diamons/d4.png",
        "app/imgs/addbomb.png","app/imgs/addlife.png","app/imgs/addhealth.png","app/imgs/addpower.png",
        "app/imgs/boss.png","app/imgs/boss0.png","app/imgs/boss3.png",
        "app/imgs/bossbullet2.png","app/imgs/pd30.png",
        "app/imgs/g2.jpg", "app/imgs/author.png","app/imgs/inva.png"
    ],

    //当用户选择的信息， 这要初始化用户的生命值， 声明条数， 速度， 分数， 金钱数等信息;
    initUserData : function( user ) {
        user = user || "app/imgs/s.gif";
        //重新值用户的值;
        gb.userData = {

            "app/imgs/plane8.png" : {
                blood : 10,
                lifes : 4,
                speed : 1,
                score : 0,
                money : 0,
                bg : "app/imgs/plane8.png",
                frames : 2,
                superBomb : 2
            },

            "app/imgs/plane9.png" : {
                blood : 10,
                lifes : 4,
                speed : 1,
                score : 0,
                money : 0,
                bg : "app/imgs/plane9.png",
                frames : 1,
                superBomb : 2
            }

        }[user];

    },

    userData : {
        blood : 10,
        lifes : 4,
        speed : 1,
        score : 0,
        frames : 3,
        money : 0,
        bg : "app/imgs/plane8.png"
    }

};

require(["app/util/Event","app/util/EventBase", "app/util/global", "app/util/requestAnimationFrame", "app/Model/Audios","app/util/patch" ], function() {

});

require(["app/G/initDevice","app/util/loadImgs", "app/C/ExTaskList", "app/C/Pages", "app/G/Pages",
        "app/C/Page", "app/C/Bg" , "app/G/Info", "app/G/MoonWarr",
        "app/C/loadGImgsModule", "app/Model/Levels", "app/G/Diamon" ,"app/C/FPS","app/C/contextmenu","app/util/Param","app/Model/wilddog"],
    function(initDevice, loadImgs, TaskList , Pages, gPages, Page ,Bg, Info, MoonWarr, loadGImgsModule, Levels, Diamon, FPS, contextmenu, getParam, wilddog) {

        var canvas = document.getElementsByTagName("canvas")[0];
        var context = canvas.getContext("2d");

        //初始化设备兼容性问题;
        initDevice(document , window, canvas);
        //初始化, 阻止右键菜单;
        contextmenu (canvas);

        window.g = function ( level ) {

            //生成关卡数据;
            var LEVELS = Levels( canvas, context );

            window.gb.level = level || 0;

            var now = Date.now();

            //创建人物列表;
            var task = new TaskList();

            //显示fps;
            var fps = new FPS({
                canvas : canvas,
                context : context
            });

            //飞船的初始化
            var moonWarr = new MoonWarr({
                bg : window.gb.imgs[window.gb.userData.bg],
                canvas : canvas,
                context : context,
                task  : task
            });

            //幕布初始化
            var bg = new Bg(canvas, context,  window.gb.level + 1);

            //触发flash;
            moonWarr.flash();

            var info = new Info( canvas, context );

            //把战斗机保存到任务列表中;
            task.plane( moonWarr );

            moonWarr.drawDashLine();
            //test
            var steupDraw = function() {
                //计算飞机的移动;
                moonWarr.setup.bind(moonWarr)();
            };

            task.addTask( function() {
                util.clear(canvas);
            }).addTask(function() {
                //计算幕布的移动;
                bg.setup();
            }).addTask(function () {
                window.gb.userData.money = moonWarr.money;
                window.gb.userData.blood = moonWarr.blood;
                window.gb.userData.lifes = moonWarr.lifes;
                //计算用户生命值, 金币值等信息;
                info.setup( window.gb.userData );
            }).addTask(steupDraw).addTask(function() {
                var times = Date.now() - now;
                var timeLine =  (times+"").replace(/\d{3,3}$/,"000");
                var enemys = LEVELS[ window.gb.level ] [ timeLine ];
                if( enemys ) {
                    for(var i=0; i< enemys.length; i++ ) {
                        var enemyObj = enemys[i];

                        //根据数据信息实例化生成敌机数据;
                        enemyObj[1].task = task;
                        var enemy =new enemyObj[0]( enemyObj[1] );

                        //把敌机的数据保存到task的缓存里面;
                        task.addEnemy( enemy );
                    };
                    delete LEVELS[ window.gb.level ] [ timeLine ];
                };
                /*
                 enemy.setup();
                 enemy.draw();*/
            }).addTask(function() {

                //计算fps;
                fps.step();

            }).addTask(function() {

                //绘制幕布
                bg.draw();

                //绘制fps;
                fps.draw();

                //绘制用户信息;
                info.draw.bind( info )();

                //绘制飞船;
                moonWarr.draw.bind(moonWarr)();

            }).setInterval(30);

        };

        window.gb.start = function() {
            //console.log(window.gb.userData);
            //跳过去了;
            g();
        };

        loadGImgsModule(canvas, context ,function () {

            //通过url中的参数设定是否打开测试模式;
            var test = getParam("test");
            if( !!test ) {
                g(0);
            }else{
                window.pages = new Pages();
                pages.add( new gPages.StartPage( canvas, context ) );
                pages.start();
            };

        });

        /*var ev = new MouseEvent("click",{
         bubbles: true,
         cancelable: true,
         view: window,
         pageX : 205,
         pageY : 190
         });*/
        /*
         var ev = document.createEvent();
         ev.initEvent("click", true, false);
         canvas.dispatchEvent(ev);
         */
    });
