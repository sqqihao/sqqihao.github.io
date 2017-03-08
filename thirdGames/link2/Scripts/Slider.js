DOTA.Slider = function(config){
	this.config = DOTA.Extend({
		container: document.body,
		start: 1,
		end: 100,
		size: 2,
		value: 1,
		onChange : function(){}
	}, config || {});
	
	this.value = this.config.value;
	this.init();
};

DOTA.Slider.prototype = {
	init : function(){
		var cfg = this.config, evt = DOTA.Event, bw = 8;
		var e = this.element = document.createElement("div"), width = (cfg.end - cfg.start + 1) * cfg.size;
		e.className = "DOTA_Slider";
		e.style.width = width + 30 + bw + "px";
		
		var l = this.line = document.createElement("div");
		l.className = "DOTA_Slider_Line";
		l.style.width = width + bw + "px";
		e.appendChild(l);
		
		var t = this.text = document.createElement("div");
		t.className = "DOTA_Slider_Text";
		t.style.width = 25 + "px";
		t.innerHTML = cfg.value;
		e.appendChild(t);
		
		var b = this.box = document.createElement("div");
		b.className = "DOTA_Slider_Box";
		b.style.left = cfg.size * (cfg.value - cfg.start) + "px";
		b.style.width = bw + "px";
		b.innerHTML = "&nbsp;"
		e.appendChild(b);
		DOTA.F.setOpacity(b, 95);
		e.onselectstart = function(){return false;};
		
		DOTA.$(cfg.container).appendChild(e);
		
		this._onClick = evt.bindEvent(this, this.onClick);
		evt.addEvent(this.element, "click", this._onClick);
		this.drag = new DOTA.Drag(b, {
			limit: true, 
			mxLeft : 0,
			mxRight : width + bw + 1, 
			lockY: true, 
			transparent: false, 
			onMove: evt.bindEvent(this, this.onMove)
		});
		
	},
	
	onClick : function(oEvent){
		var cfg = this.config, width = (cfg.end - cfg.start + 1) * cfg.size;
		var left  = DOTA.F.getOffset(this.line).x + DOTA.F.getScrollLeft();
		left = Math.min(oEvent.pageX - left, width - 1);
		left = left < cfg.size ? 0 : left;
		this.box.style.left = left + "px";
		this.onMove();
	},
	
	onMove : function(){
		var cfg = this.config, val = parseInt(parseInt(this.box.style.left) / cfg.size );
		this.text.innerHTML = cfg.start + val ;
		if(val != this.value){
			this.value = val;
			cfg.onChange(cfg.start + val + "");
		}
	},
	
	setPosition : function(x, y){
		this.element.style.left = x + "px";
		this.element.style.top = y + "px";
	},
	
	getValue : function(){
		return this.value + this.config.start;
	},
	
	setValue : function(val){
		var cfg = this.config;
		if(val < cfg.end || val > cfg.start){
			return;
		}
		this.value = val - cfg.start;
		this.text.innerHTML = val;
		this.box.style.left = val * cfg.size + "px";
	},
	
	dispose : function(){
		DOTA.Event.removeEvent(this.element, "click", this._onClick);
		this.line = this.box = this.text = null;
		this.element.innerHTML = "";
		this.config.container.removeChild(this.element);
		this.config = null;
	}
};
