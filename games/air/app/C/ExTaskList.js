define(["app/C/TaskList"], function( TaskList ) {
    /**
     * 扩展TaskList的存储方法;
     * */
    $.extend(TaskList.prototype, {
        /**
         * 用户飞机实例的缓存
         * */
        plane : function ( p ) {
            if( p ) {
                this.plane = p;
            };
            return this;
        },

        /**
         * getPlaneMissiles
         * 获取用户的子弹信息;
         * */
        getPlaneMissiles : function () {
            return this.planeMissiles;
        },
        /**
         * 用户Missile的缓存;
         * */
        addPlaneMissiles : function( pM ) {
            this.planeMissiles = this.planeMissiles || [];
            this.planeMissiles.push( pM );
            return this;
        },
        /**
         * 用户子弹的删除;
         * */
        removePlaneMissile : function () {
            if( _.contains(this.planeMissiles || [], e) ) {
                var index = this.planeMissiles.indexOf( e );
                this.planeMissiles.splice(index,1);
                return this;
            };
        },

        /**
         * 获取敌机信息
         * */
        getEnemy : function () {
            return this.enemys || [];
        },
        /***
         * 敌机的信息缓存
         * */
        addEnemy : function ( e ) {
            this.enemys = this.enemys || [];
            this.enemys.push( e );
            return this
        },
        removeEnemy : function ( e ) {
            if( _.contains(this.enemys || [], e) ) {
                var index = this.enemys.indexOf( e );
                this.enemys.splice(index,1);
                return this;
            };
        },

        /**
         * 获取敌机的子弹缓存
         * */
        getMissile : function () {
            return this.missiles;
        },
        /**
         * 敌机的子弹缓存
         * */
        addMissile : function ( m ) {
            this.missiles = this.missiles || [];
            this.missiles.push( m );
            return this;
        },
        removeMissile : function ( m ) {
            if( _.contains(this.missiles || [], e) ) {
                var index = this.missiles.indexOf( e );
                this.missiles.splice(index,1);
                return this;
            };
        },

        /**
         * 能量块的缓存
         * */
        getPowers : function () {
            return this.powers;
        },
        addPower : function ( power ) {
            this.powers = this.powers || [];
            this.powers.push( power );
            return this;
        },
        removePower : function ( p ) {
            if( _.contains(this.powers || [], p) ) {
                var index = this.powers.indexOf( p );
                this.powers.splice(index,1);
                return this;
            };
        }
    });

    return TaskList;
})