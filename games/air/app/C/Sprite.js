define(function () {

    /**
     * @desc 精灵类;
     * */
    var Sprite = P(EventBase, function( sprite ) {


        sprite.init = function (bg, frames, time) {
            this.date = Date.now();
            this.now = 0;
            this.bg = bg;
            this.frames = frames;
            this.time = time;
        };

        sprite.calc = function () {
            //如果在间隔的时间外，frame就增加;
            if( Date.now() - this.date >= this.time ) {
                this.now++;
                //如果now超过了固定帧，就把now重置为0;
                if (this.now > this.frames) {
                    this.now = 0;
                };
            };
            return {
                bg : this.bg,
                now : this.now
            }
        };

        sprite.destory = function () {

        };
    });

    return Sprite;
})
