define(function() {
    var mapData =  (function() {
        var arr = [];
        for(var i=0; i<cfg.height;i++) {
            arr.push(new Array(cfg.width));
        };
        return arr;
    })();
    //转化block数据;
    var format = function(data, block) {
        for(var i=0; i<block.length; i++) {
            data[block[i].y][block[i].x] = 1;
        };
        return data;
    };
    return {
        //原始的地图信息
        mapData : mapData,
        //设置地图
        set : function( _mapData ) {
            mapData = _mapData;
        },
        //获取地图
        get : function() {
            return mapData;
        },
        //生成一个新的题图数据, 这个地图作为数据渲染到view中;
        extend : function(block) {
            //结构化复制mapData;
            var data = JSON.parse( JSON.stringify(mapData) );
            //我们需要把block变成适合mapData使用的格式;
            format(data, block);
            return data;
        },
        oncalculate : function( fn, overFn ) {
            if(  mapData[0].join("").indexOf(1)!==-1 ) {
                overFn();
            };
            for(var i=0; i<mapData.length; i++) {
                if( mapData[i].join("").length==cfg.width && mapData[i].join("").indexOf(0)===-1 ) {
                    mapData.splice(i,1);
                    mapData.unshift(new Array(cfg.width));
                    fn();
                };
            };
        },
        testTouch : function(x,y) {
            if( mapData[y][x] === 1 ) {
                return false;
            };
            return true;
        }
    };
});