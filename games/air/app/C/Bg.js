define(["app/C/Sprite"], function( Sprite ) {

    /**
     * @desc 界面的滚动;
     */
    var Bg = P(EventBase, function ( bg ) {
        var canvas;
        var sprite;
        var context;
        var now;
        var backgrond;
        /**
         * @desc
         */
        bg.init = function ( can, ctx , level) {
            this.context = ctx;
            this.canvas = can;
            this.level = level || 0;
            //就直接2551帧， 30毫秒走一个像素;
            this.sprite = [new Sprite( window.gb.imgs["app/imgs/back_img.png"] , 3551-500, 30),
                //1140帧;
                new Sprite( window.gb.imgs["app/imgs/back_img1.png"] , 1640-500, 30),
                //1140帧;
                new Sprite( window.gb.imgs["app/imgs/back_img2.png"] , 1640-500, 30),
                //1140帧;
                new Sprite( window.gb.imgs["app/imgs/back_img.png"] , 3551-500, 30)
            ][this.level];
            this.backgrond = this.sprite.calc().bg;
        };

        /**
         * @desc 随着时间的增加， 地图界面的改变;
         */
        bg.setup = function (  ) {
            this.now = this.sprite.calc().now;
        };

        /**
         * @desc 在canvas中绘制这个地图;
         */
        bg.draw = function () {
            //随着now的增加, background往上移动;
            this.context.drawImage(this.backgrond, 0, [3051, 1640, 1640, 3551][this.level]-this.now-500, 400,500, 0, 0, this.canvas.width, this.canvas.height);
        };

    });

    return Bg;
});