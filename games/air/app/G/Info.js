define(function() {

    /**
     * @desc 这里应该包括score；
     * @desc 获取的金币数；
     * @desc 当前的生命值；
     * @desc 当前的生命条数， 这些都可以通过配置设置庅；
     *
     * @method  setup
     * @param Object {
            Number || blood : 10,
            Number || lifes : 4,
            Number || speed : 1,
            Number || score : 0,
            Number || money : 0,
            String || bg : "app/imgs/logo_small.gif"
        }
     * */
    var Info = P(EventBase, function (info) {
        var score = 0;
        var money = 0;
        var blood = 0;
        var lifes = 0;
        var bg = "";
        var canvas;
        var context;

        info.init = function ( can ,ctx ) {
            canvas = can;
            context = ctx;
        };

        /*
         * {
         Number || blood : 10,
         Number || lifes : 4,
         Number || score : 0,
         Number || money : 0,
         String || bg : "app/imgs/logo_small.gif"
         }
         */
        info.setup = function ( obj ) {
            score = obj.score;
            money = obj.money;
            blood = obj.blood;
            lifes = obj.lifes;
            bg = obj.bg;
        };

        info.draw = function () {
            context.save();
            context.font = "bold 15px ";
            context.fillStyle = "#f00";
            context.fillRect( 20, 2, 10 ,20);
            context.fillRect( 34, 2, 10 ,20);
            context.fillStyle = "#D35400";
            context.textBaseline = "top";
            context.fillText("bloods ： ", 52, 4);
            context.fillText(blood, 114, 4);

            context.drawImage( window.gb.imgs["app/imgs/life.png"], 0, 0 ,40, 40, 20, 28 , 20, 20 );
            context.fillText("lifes ： ", 52, 30);
            context.fillText(lifes, 114, 30);

            context.drawImage( window.gb.imgs["app/imgs/money.png"], 0, 0 , 40, 40, 20, 52, 20 , 20);
            context.fillStyle = "#8E44AD";
            context.fillText("money ： ", 52, 50);
            context.fillText(money, 114, 50);

            context.drawImage( window.gb.imgs["app/imgs/power.png"], 0 ,0 ,40, 40, 20, 76, 20, 20);
            context.fillText("score ： ", 52, 76);
            context.fillText(score, 114, 76);
            context.restore();
        };

    });

    return Info;
})