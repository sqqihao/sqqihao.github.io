define(function() {
    var width = cfg.width-1;
    var height = cfg.height-1;
    var mid = Math.ceil(width/2);

    var Block = function() {
        this.callbacks = [];
        //保存Block的数据, 包含了x，y;
        this.block = getBlock();
        this.start();
    };

    //随机地生成方块
    var getBlock = function() {
        //竖线
        var s = [
            {x:mid , y : 0},
            {x:mid , y : 1},
            {x:mid , y : 2}
        ];
        //作为标识，在做旋转的时候会特殊判断;
        s.name = "s";

        //Z
        var z = [
            {x:mid, y:0},
            {x:mid+1, y:0},
            {x:mid+1, y:1},
            {x:mid+2, y:1}
        ];
        //相反的Z, 随便起个名字叫做n;
        var n = [
            {x:mid+2, y:0},
            {x:mid+1, y:0},
            {x:mid+1, y:1},
            {x:mid, y:1}
        ];

        //L
        var l = [
            {x:mid,y:0},
            {x:mid,y:1},
            {x:mid,y:2},
            {x:mid+1,y:2}
        ];

        // 土字形;
        var t = [
            {x:mid+1,y:0},
            {x:mid,y:1},
            {x:mid+1,y:1},
            {x:mid+2,y:1}
        ];
        //田字形
       var p = [
           {x:mid,y:0},
           {x:mid+1,y:0},
           {x:mid+1,y:1},
           {x:mid,y:1}
       ];
        var d = [
            {x:mid,y:0}
        ];
        d.name = p.name = "d";
        //return s
        return [s, z, l, t, p, d, n][Math.floor(Math.random()*7)];
    };

    $.extend(Block.prototype, {
        newBlock : function() {
            this.callbacks = [];
            //保存Block的数据, 包含了x，y;
            this.block = getBlock();
            this.start();
        },
        //生成blok
        get : function() {
            return this.block;
        },
        //旋转, 这玩意儿麻烦,各种循环;
        rotate : function() {
            var block = this.get();
            //是dot这玩意儿的话，就直接return;
            if(block.name === "d") {
                return;
            };
            var minX = 1000;
            var minY = 1000;
            for(var p =0; p<block.length; p++) {
                if(block[p].x<minX) {
                    minX = block[p].x;
                };
                if(block[p].y<minY) {
                    minY = block[p].y;
                };
            };
            //要用临时的block，否者会影响到界面中的值；
            var tempBlock = [];
            for(var p =0; p<block.length; p++) {
                tempBlock[p] = {
                    x:block[p].x-minX,
                    y:block[p].y-minY
                };
            };
            //把x，y轴转化为数组;
            var arr = [[0,0,0],[0,0,0],[0,0,0]];
            for(var i=0; i<tempBlock.length; i++) {
                arr[tempBlock[i].y] = arr[tempBlock[i].y] || [];
                arr[tempBlock[i].y][tempBlock[i].x] = 1;
            };
            //我们要旋转数组;
            var _result = [];
            for(var i=0 ; i<arr.length; i++){
                var temp = [];
                for(var j=0 ; j<arr.length; j++){
                    temp.push(arr[j][i]);
                };
                _result.unshift( temp );
            };
            var result = [];
            //重新把数组转化为x, y轴形式;
            for(var i=0; i<_result.length; i++ ) {
                for(var j=0; j< _result[i].length ;j++) {
                    if(_result[j][i] === 1) {
                        var valX = i+minX;
                        var valY = j+minY;
                        if(block.name === "s") {valY-=1;result.name="s"};
                        //如果计算出来的值超过了地图的边界;
                        if(valX<0||valX>width||valY<0||valY>height||!this.testTouch(valX,valY)){
                            return;
                        };
                        result.push({x:valX,y:valY});
                    };
                };
            };
            this.block = result;
        },
        //左移动
        moveLeft : function() {
            var _this = this;
            with(_this) {

                //只要有一个边超过左边就允许左移动;
                for(var i=0; i<block.length; i++) {
                    var valX = block[i]["x"]-1;
                    //如果界面超过了，或者碰撞到了别的元素;
                    if(valX <0 || !testTouch(valX, block[i]["y"])) {
                        return ;
                    };
                };

                //计算新的左边距
                for(var i=0; i<block.length; i++) {
                    var valX = block[i]["x"]-1;
                    block[i]["x"]=valX;
                };
            };
        },
        moveRight : function() {
            var _this = this;
            with( _this ) {

                for (var i = 0; i < block.length; i++) {
                    var valX = block[i]["x"] + 1;
                    //如果界面超过了，或者碰撞到了别的元素;
                    if (valX > width || !testTouch(valX, block[i]["y"])) {
                        return ;
                    };
                };

                //计算新的右边距;
                for (var i = 0; i < block.length; i++) {
                    var valX = block[i]["x"] + 1;
                    block[i]["x"] = valX;
                };
            };
        },
        moveDown : function() {
            var block = this.block;

            for(var i=0; i<block.length; i++) {
                var valY = block[i]["y"]+1;
                //如果超过了最大的高度，就返回false;
                if(valY > height || !this.testTouch(block[i]["x"], valY)) {
                    return false;
                };
            };

            for(var i=0; i<block.length; i++) {
                var valY = block[i]["y"]+1;
                block[i]["y"]= valY;
            };

            return true;
        },
        //state "left","right","down" ,按向下方向键的时候我们不做限制次数;
        add : function(fn,state) {
            if(state === "left" && this.stateLeft=== true ) {return };
            if(state === "right" && this.stateRight=== true ) {return };
            //更改状态;
            this["state" + state[0].toUpperCase()+state.slice(1)] = true;
            this.callbacks.push(fn);
        },
        //每一次定时器都会调用这个方法;
        queue : function(){
            var len = this.callbacks.length;
            while( len-- ) {
                this.callbacks[len].call(this);
            };
            //清空callbacks列表;
            this.callbacks = [];
            this.stateLeft = false;
            this.stateRight = false;
            //为了链式调用;
            return this;
        },
        onupdate : function(callback) {
            this.onupdate = callback;
        },
        destory : function() {
            clearInterval(this.timer);
            $.dialog({
                content : '游戏失败',
                title : 'ok',
                ok : function() {
                    location.reload();
                },
                cancel : function(){
                },
                lock : true
            });

        },
        start : function() {
            var _this = this;
            this.timer = setInterval(function() {
                //执行左移动和右移动;
                _this.queue();
                if( !_this.moveDown() ) {
                    _this.onupdate();
                    clearInterval(_this.timer);
                    return _this.onend();
                };
                //走到了下面说明block的位置有发生改变就要更新界面了;
                _this.onupdate();
            }, cfg.time);
        },
        onend : function(callback) {
            this.onend  = callback;
        },
        remove : function() {}
    });
    return Block;
});