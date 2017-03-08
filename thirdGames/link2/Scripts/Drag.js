/***********************************************
// Dota.Drag.js v0.1
// 日期：2009.09.15
// 修改自cloudgamer的Drag.js
************************************************/

DOTA.Drag = function(dragElement, config){
	this.drag = DOTA.$(dragElement);
	this._x = this._y = 0;
	this._martinLeft = this._marginTop = 0;
	this.config = DOTA.Extend({
		handle:			null,//设置触发对象（不设置则使用拖放对象）
		limit:			false,//是否设置范围限制(为true时下面参数有用,可以是负数)
		mxLeft:			0,//左边限制
		mxRight:		9999,//右边限制
		mxTop:			0,//上边限制
		mxBottom:		9999,//下边限制
		mxContainer:	"",//指定限制在容器内
		lockX:			false,//是否锁定水平方向拖放
		lockY:			false,//是否锁定垂直方向拖放
		lock:			false,//是否锁定
		transparent:	true,//拖动时是否半透明
		cancelBubble:	true, //取消冒泡
		onStart:		function(){},//开始移动时执行
		onMove:			function(){},//移动时执行
		onStop:			function(){}//结束移动时执行
	}, config || {});
	this.config.handle = this.config.handle || this.drag;
	this.config.mxContainer = DOTA.$(this.config.mxContainer) || null;
	
	this.drag.style.position = "absolute";
	//如果有容器必须设置position为relative或absolute来相对或绝对定位，并在获取offset之前设置
	!this.config.mxContainer || DOTA.F.currentStyle(this.config.mxContainer).position == "relative" || DOTA.F.currentStyle(this.config.mxContainer).position == "absolute" || (this.config.mxContainer.style.position = "relative");
	
	this._startHandler = DOTA.Event.bindEvent(this, this.start);
	this._moveHandler = DOTA.Event.bindEvent(this, this.move);
	this._stopHandler = DOTA.Event.bindEvent(this, this.stop);
	this._clickHandler = DOTA.Event.bindEvent(this, this.onClick);
	
	DOTA.Event.addEvent(this.config.handle, "mousedown", this._startHandler);
	DOTA.Event.addEvent(this.config.handle, "click", this._clickHandler);
};
DOTA.Drag.prototype = {
	setOpacity : function(opacity){
		DOTA.F.setOpacity(this.drag, opacity);
	},
	onClick : function(oEvent){
		if(this.config.cancelBubble){
			oEvent.stopPropagation();
		}
	},
	start : function(oEvent){
		var cfg = this.config;
		if(cfg.lock){
			return;
		}
		var evt = DOTA.Event.getEvent();
		this._x = evt.pageX;
		this._y = evt.pageY;	
		
		//半透明
		if(cfg.transparent){
			this.oldOpacity = DOTA.F.getOpacity(this.drag);
			this.setOpacity(50);
		}
		
		DOTA.Event.addEvent(document, "mousemove", this._moveHandler);
		DOTA.Event.addEvent(document, "mouseup", this._stopHandler);
		
		if(cfg.cancelBubble){
			oEvent.stopPropagation();
		}
		cfg.onStart(evt);
	},
	
	move : function(){
		var cfg = this.config,
			evt = DOTA.Event.getEvent();
		var x = evt.pageX - this._x, y = evt.pageY - this._y, o, c;
		
		var s = DOTA.F.currentStyle(this.drag);
		x += parseInt(s.left, 10), y += parseInt(s.top,  10);
		x = isNaN(x) ? this.drag.offsetLeft : x, y = isNaN(y) ? this.drag.offsetTop : y;
		
		//清除选择
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

		//限制范围
		if(cfg.limit || cfg.mxContainer){
			o = DOTA.Extend({}, cfg);
			if(cfg.mxContainer){
				if(!this.limit){
					o.mxLeft = 0, o.mxTop = 0, o.mxBottom = 9999, o.mxRight = 9999;
				}
				c = DOTA.F.currentStyle(cfg.mxContainer);
				
				o.mxLeft = Math.max(o.mxLeft, (isNaN(parseInt(c.left, 10)) ? 0 : parseInt(c.left, 10)));
				o.mxTop = Math.max(o.mxTop, (isNaN(parseInt(c.top, 10)) ? 0 : parseInt(c.top, 10)));
				o.mxRight = Math.min(o.mxRight, cfg.mxContainer.offsetWidth);
				o.mxBottom = Math.min(o.mxBottom, cfg.mxContainer.offsetHeight);
			}
			x = Math.min(Math.max(x, o.mxLeft), o.mxRight - this.drag.offsetWidth);
			y = Math.min(Math.max(y, o.mxTop ), o.mxBottom - this.drag.offsetHeight);
		}
		cfg.lockX || (this.drag.style.left = x + "px");
		cfg.lockY || (this.drag.style.top  = y + "px");
		
		this._x = evt.pageX, this._y = evt.pageY;
		
		cfg.onMove(evt);
	},
	
	stop : function(){
		var cfg = this.config;
		//取消半透明
		if(cfg.transparent){
			this.setOpacity(this.oldOpacity);
		}
		
		DOTA.Event.removeEvent(document, "mousemove", this._moveHandler);
		DOTA.Event.removeEvent(document, "mouseup", this._stopHandler);
		
		//回调事件
		cfg.onStop();
	},
	
	dispose : function(){
		DOTA.Event.removeEvent(this.config.handle, "mousedown", this._startHandler);
		DOTA.Event.removeEvent(this.config.handle, "click", this._clickHandler);
		
		this.drag = this.config.handle = null;
		this._moveHandler = null;
		this._stopHandler = null;
		this._startHandler = null;
		this._clickHandler = null;
	}
};