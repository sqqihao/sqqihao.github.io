define(function () {

    /**
     * @desc Money 打死敌人获取的金钱;
     */
    var Money = P(EventBase , function ( money ) {

        /**
         * @desc 初始化x轴和y轴， 移动的速度，....等....
         */
        money.init = function () {
            this.bg = "";
            this.x = 0;
            this.y = 0;
            this.speedX = 0;
            this.speedY = 0;
            this.w = 1;
            this.h = 1;

        };

        money.setup = function () {

        };

        /**
         * @desc
         * */
        money.draw = function() {

        };

        money.destory = function () {

        }

    });
    return Money;
});