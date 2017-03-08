define(["app/C/Page"] , function( Page ) {

    //=====>>>>数据模型开始
    /**
     * @desc 所有界面都要填充到这里， 通过这个进行View的路由控制;
     * @param Page
     */
    var Pages =P(EventBase, function( pages ) {
        var list = [];
        var now = 0;
        /**
         * @desc 所有节目的初始化;
         */
        pages.init = function () {

        };

        /**
         *  @desc 添加page
         */
        pages.add = function ( obj ) {
            if( obj instanceof  Page) {
                if( list.length-1!==-1 ) {
                    list [ list.length-1 ].destory();;
                };
                list.push( obj );
                obj.create();
                return this;
            }else{
                alert("参数错误");
            };
            return this;
        };

        /**
         * @desc 删除page， 从当前的page中删除page， 并调用page的destory方法;
         */
        pages.remove = function ( obj ) {
            var index;
            if( (index = list.indexOf( obj )) !== -1) {
                list.splice(index, 1);
            };
            return this;
        };

        pages.run = function() {
            //把当前的界面删除;
            if( list.length>=2 ) {
                list[ list.length-2 ].destory && list [ list.length-2 ].destory();
            };
            //执行最后一个界面的create方法;
            list[ list.length-1 ].create && list [ list.length-1 ].create();
            return this;
        };

        /**
         * @desc 界面回退
         */
        pages.back = function () {
            var obj = list.pop();
            obj.destory();
            now = (now-1>=0) ? now-1 : 0;
            list[ now ].create.apply(list[ now ], arguments);
            return this;
        };

        /**
         * @desc 界面向前进
         */
        pages.forward = function () {
            if( list[now+1] ) {
                now++;
            };
            list[ now ].create().apply(list[ now ], arguments);
            return this;
        };

        /*
         * @desc 启动路由器;
         * */
        pages.start = function () {
            if( typeof list[ now ] === "function") {
                list[ now ].apply(list[ now ], arguments);
            };
            return this;
        };

        pages.clear = function() {
            list = [];
            now = 0;
            return this;
        };
    });

    return Pages;
})