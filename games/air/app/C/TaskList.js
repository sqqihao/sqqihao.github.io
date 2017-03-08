define(function () {

    /**
     * @desc 创建TaskList, 可以循环执行task;
     * @method addTask
     * @method removeTask
     * @method run
     * @method setInterval
     * @method clearInterval
     */
    var TaskList = function() {this.list = [], this.timer = 1};
    TaskList.tId = 0;


    /**
     * @param {function}
     * */
    TaskList.prototype.addTask = function (fn) {
        fn.tId = TaskList.tId++;
        if(typeof fn === "function")this.list.push(fn);
        return this;
    };

    /**
     * @param {function}
     * */
    TaskList.prototype.removeTask = function(fn) {
        var len = this.list.length;
        while(len--){
            if(fn === this.list[len] || fn.tId === this.list[len].tId) {
                this.list.splice(len,1);
            };
        };
    };

    /**
     * @desc  执行所有的任务
     * */
    TaskList.prototype.run = function() {
        for(var i=0; i<this.list.length; i++ ){
            this.list[i]();
        }
    };
    /**
     * @desc 循环执行任务
     * @param 间隔执行任务的时间
     * */
    TaskList.prototype.setInterval = function ( time ) {
        time = time || 33;
        var _this = this;
        //this.timer = setInterval(this.run.bind(this), time);
        window.t = this;
        var flag = true;
        var fn = function() {
            _this.timer&&requestAnimationFrame(function() {
/*
                //会少走一次;
                if(flag) {
                    flag = !flag;
                }else{
                    flag = !flag;
                    _this.run.bind(_this)();
                };
                fn();*/
                _this.run.bind(_this)();
                fn();
            });
        };
        fn();
    };
    /**
     * @desc 暂停执行任务列表
     * */
    TaskList.prototype.clearInterval = function() {
        this.timer = 0;
    };
    /**
     * TaskList主方法结束*/

    return TaskList;
})