/***********************************************
// DOTA.Button v0.1
// 作者：黄健
// 日期：2009.09.26
// ＱＱ：573704282
// Email: freewind22@163.com
// 转载请保留此信息.
************************************************/

DOTA.Button = function(config){
	this.config = DOTA.Extend({
		text : "按钮",
		position : "",
		left : 0,
		top : 0,
		width : 0,
		height : 0,
		className : ["DOTA_Button", "DOTA_Button_Hover", "DOTA_Button_Down"],
		onMouseOver : function(){},
		onMouseOut : function(){},
		onClick : function(){}
	}, config || {});
	
	this.init();
};
DOTA.Button.prototype = {
	init : function(){
		var b = this._button = document.createElement("div"), c = this.config, evt = DOTA.Event;
		b.className = c.className[0];
		b.innerHTML = c.text;
		b.hideFocus = "hideFocus";
		if(c.position){
			b.style.position = c.position;
			b.style.left = c.left + "px";
			b.style.top = c.top + "px";
		}
		if(c.width > 0){
			b.style.width = c.width + "px";
			b.style.height = c.height + "px";
			b.style.lineHeight = c.height + "px";
		}
		
		this._onMouseOver = evt.bindEvent(this, this.onMouseOver);
		this._onMouseOut = evt.bindEvent(this, this.onMouseOut);
		this._onClick = evt.bindEvent(this, this.onClick);
		this._onMouseDown = evt.bindEvent(this, this.onMouseDown);
		this._onMouseUp = evt.bindEvent(this, this.onMouseUp);
		
		evt.addEvent(b, "mouseover", this._onMouseOver);
		evt.addEvent(b, "mouseout", this._onMouseOut);
		evt.addEvent(b, "click", this._onClick);
		evt.addEvent(b, "mousedown", this._onMouseDown);
		evt.addEvent(b, "mouseup", this._onMouseUp);
	},
	getWidth : function(){
		return parseInt(DOTA.F.currentStyle(this._button).width);
	},
	getHeight : function(){
		return parseInt(DOTA.F.currentStyle(this._button).height);
	},
	setText : function(text){
		this._button.innerHTML = text;
	},
	setPosition : function(x, y){
		this._button.style.left = x + "px";
		this._button.style.top = y + "px";
	},
	show : function(){
		this._button.style.display = "";
	},
	hide : function(){
		this._button.style.display = "none";
	},
	renderTo : function(container){
		container.appendChild(this._button);
	},
	onMouseOver : function(){
		this._button.className = this.config.className[1];
		this.config.onMouseOver();
	},
	onMouseOut : function(){
		this._button.className = this.config.className[0];
		this.config.onMouseOut();
	},
	onClick : function(){
		this.config.onClick();
	},
	onMouseDown : function(){
		this._button.className += " " + this.config.className[2];
	},
	onMouseUp : function(){
		this._button.className = this._button.className.replace(new RegExp(" " + this.config.className[2], "ig"), "");
	},
	dispose : function(){
		var b = this._button, evt = DOTA.Event;
		
		evt.removeEvent(b, "mouseover", this._onMouseOver);
		evt.removeEvent(b, "mouseout", this._onMouseOut);
		evt.removeEvent(b, "click", this._onClick);
		evt.removeEvent(b, "mousedown", this._onMouseDown);
		evt.removeEvent(b, "mouseup", this._onMouseUp);
		
		b.innerHTML = "";
		b.parentNode && b.parentNode.removeChild(b);
	}
};
