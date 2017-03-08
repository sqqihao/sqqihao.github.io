define(["app/C/Page","app/Model/wilddog"], function ( Page, wilddog ) {

    var selectPage = P(Page, function ( page ) {
        var plant0,plant1, canvas , context, backFn;
        page.init = function ( can, con ) {
            canvas = can;
            context = con;
        };

        page.create = function () {
            var _this = this;
            //创建两个图片的按钮;

            context.drawImage( window.gb.imgs["app/imgs/background1.jpg"], 0 , 0 ,window.gb.imgs["app/imgs/background1.jpg"].width, window.gb.imgs["app/imgs/background1.jpg"].height, 0, 0 ,canvas.width, canvas.height);
            context.fillStyle = "#ffffff";
            context.font = "20px Arial";
            context.fillText("选择作战飞机", 20 , 90);
            plant0 = util.drawImage(canvas, context, window.gb.imgs["app/imgs/plane11.png"], canvas.width/2-40, canvas.height/2 - 100 ,80, 80 ,function() {
                _this.destory();
                window.gb.initUserData("app/imgs/plane8.png");
                window.gb.start();
            });

            plant1 = util.drawImage(canvas, context, window.gb.imgs["app/imgs/plane12.png"], canvas.width/2-40, canvas.height/2 ,80, 80 ,function() {
                _this.destory();
                window.gb.initUserData("app/imgs/plane9.png");
                window.gb.start();
            });

            backFn = util.button(canvas, context, 60, 10 , "back", function() {
                pages.back();
            });
        };

        page.destory = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            //清除图片的点击事件;
            util.removeEv(canvas,typeof window.ontouchstart === "object" ? "touchstart" : "click", plant0);
            util.removeEv(canvas,typeof window.ontouchstart === "object" ? "touchstart" : "click", plant1);
            util.removeEv(canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", backFn);
        };

    });

    var HelpPage = P(Page, function ( page ) {

        var backFn, canvas, context;

        page.init = function ( can, con ) {
            canvas = can;
            context = con;
        };

        page.create = function () {
            util.clear( canvas );

            //context.drawImage(window.gb.imgs["app/imgs/g2.jpg"],0 , 0 , canvas.width, canvas.height);

            var grad  = context.createLinearGradient(0,0, 0,canvas.height);
            grad.addColorStop(0,'#34495E');
            grad.addColorStop(1,'#000');
            context.fillStyle = grad;
            context.rect(0,0 ,canvas.width, canvas.height);
            context.fill();
            context.fillStyle = "#ffffff";
            context.font = "30px Arial";
            context.fillText("help", canvas.width/2, 30);
            context.font = "16px Arial";
            context.fillText("游戏共三关：每一关对应的BOSS为", 30, 80);
            context.drawImage(window.gb.imgs["app/imgs/boss.png"], 60 , 100)
            context.drawImage( window.gb.imgs["app/imgs/boss0.png"], 80 , 200);
            context.drawImage(  window.gb.imgs["app/imgs/boss3.png"], 70 , 360);
            context.fillText("在电脑端通过方向键或者鼠标可移动", 0 , canvas.height-60);
            context.fillText("在手机或者平板上直接触屏飞机可移动 ~_~", 0 , canvas.height-30);

            backFn = util.button(canvas, context, 60, 10 , "back", function() {
                pages.back();
            });
        };

        page.destory = function () {
            util.clear( canvas );
            util.removeEv(canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", backFn);
        };

    });

    var NamePage = P(Page, function ( namePage ) {

        var backFn , canvas, context;

        namePage.init = function ( can ,con) {
            canvas = can;
            context = con;
        };

        namePage.create = function () {

            util.clear( canvas );
            context.drawImage(window.gb.imgs["app/imgs/author.png"],0 , 0 , canvas.width, canvas.height);

            context.fillStyle = "#ffffff";
            backFn = util.button(canvas, context, 60, 10 , "back", function() {
                pages.back();
            });
            context.font = "20px Arial";
            context.fillText("About", canvas.width/2-20, 20);
            context.fillText("Author qihao", canvas.width/2-20, 40);
            context.fillText("Designer qihao", canvas.width/2-20, 60);
            context.fillText("Music producer no", canvas.width/2-20, 80);
            context.font = "12px Arial";
            context.fillText("版本更新:2015.8.12: 初始版本", 4, canvas.height-80);
            context.fillText("版本更新:2015.9: 第二次版本，优化代码以及UI界面", 4, canvas.height-60);
            context.fillText("最后版本:2015.10.18: 使用wilddog", 4, canvas.height-40);

        };

        namePage.destory = function () {

            util.clear( canvas );
            util.removeEv(canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", backFn);

        };

    });

    function sortByScore( datas ) {
        var objs = {};
        var result = [];
        for(var item in datas ) {
            var data = datas[item];
            objs[data.score] = data;
        };

        for(var item in objs ) {
            result.push( objs[item] );
        }
        return result.reverse();
    };

    var List = P(Page, function( list ) {


        var backFn , canvas, context;

        list.init = function ( can ,con) {
            canvas = can;
            context = con;
        };

        list.create = function () {


            var grad  = context.createLinearGradient(0,0, 0,canvas.height);
            grad.addColorStop(0,'#34495E');
            grad.addColorStop(1,'#000');
            util.clear( canvas );
            context.fillStyle = grad;
            context.rect(0,0 ,canvas.width, canvas.height);
            context.fill();
            context.fillStyle = "#ffffff";
            backFn = util.button(canvas, context, 60, 10 , "back", function() {
                pages.back();
            });

            context.font = "20px Arial";
            context.fillText("名字", canvas.width/2-120, 80);
            context.fillText("总分", canvas.width/2-50, 80);
            context.fillText("上榜时间", canvas.width/2+20, 80);
            wilddog.get(function( datas ) {
                datas = sortByScore(datas);

                for(var i=0; i< datas.length; i++) {
                    var data = datas[i];
                    var date = (new Date(parseInt(data.time)));
                    context.fillText(data.name, canvas.width/2-120, 100+30*(i+1));
                    context.fillText(data.score+"分", canvas.width/2-50, 100+30*(i+1));
                    var m = date.getMonth()+1;
                    context.fillText(date.getFullYear()+"年"+ m + "月"+ date.getDate()+"日", canvas.width/2+20, 100+30*(i+1));
                    if(i>10) return;
                };

            })

        };

        list.destory = function () {

            util.clear( canvas );
            util.removeEv(canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", backFn);

        };
    });

    var StartPage =  P(Page, function( startPage ){

        //var audio = new Audio;
        var canvas,context;
        var startHandle, helpHandle, namesHandle, listHandle;

        var start = function () {

            pages.add( new selectPage( canvas , context) );

        };

        var help = function() {

            pages.add( new HelpPage( canvas, context ) );

        };

        var names = function() {

            pages.add( new NamePage( canvas, context ) );

        };

        var list = function() {

            pages.add( new List( canvas, context ) );

        };

        startPage.init = function( can ,con) {

            canvas = can;
            context = con;
            //audio.playmp3("./app/audio/mainMainMusic.mp3");

        };

        startPage.create = function() {
            util.clear( canvas );
            context.save();
            context.fillStyle = "#f00";
            context.drawImage(window.gb.imgs["app/imgs/start.png"], 0, 0, canvas.width, canvas.height);
            //util.text(canvas, context, canvas.width/2, 4 , "地球保卫战");
            context.globalCompositeOperation="source-atop";
            context.drawImage(window.gb.imgs["app/imgs/inva.png"], canvas.width/2-85, 40, 170, 41);
            startHandle = util.button(canvas, context, canvas.width/2, canvas.height/2-100 , "start", start);
            helpHandle = util.button(canvas, context, canvas.width/2, canvas.height/2-20 , "help", help);
            namesHandle = util.button(canvas, context, canvas.width/2, canvas.height/2+60 , "about", names);
            listHandle = util.button(canvas, context, canvas.width/2, canvas.height/2+140 , "用户排名", list);
            context.restore();
        };

        startPage.destory = function () {
            //audio.pause();
            util.removeEv( canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", startHandle );
            util.removeEv( canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", helpHandle );
            util.removeEv( canvas, typeof window.ontouchstart === "object" ? "touchstart" : "click", namesHandle );
            util.clear( canvas );
        };

    });

    return {
        SelectPage : selectPage,
        HelpPage : HelpPage,
        NamePage : NamePage,
        StartPage : StartPage
    }
})