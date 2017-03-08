DOTA.Tooltip = function(config){
	this.config = DOTA.Extend({
		target: document.body,
		renderTo: document.body,
		contentEl: null,
		url: "",
		html: "",
		showDelay: 300,
		hideDelay: 200,
		showEvent: "mouseover",
		hideEvent: "mouseout",
		trackMouse: true,
		contentPadding: 2,
		anchor: "auto",
		width: 0,
		height: 0,
		scroll: "auto"
	}, config || {});
	
	this.init();
};

DOTA.Tooltip.prototype = {
	init : function(){
		var cfg = this.config, evt = DOTA.Event;
		cfg.target = DOTA.$(cfg.target);
		
		var e = this.element = document.createElement("div");		
		e.className = "DOTA_Tooltip";
		e.style.padding = cfg.contentPadding + "px";
		e.style.paddingLeft = e.style.paddingRight = cfg.contentPadding * 3 + "px";
		if( cfg.width > 0 && cfg.height > 0){
			e.style.width = cfg.width - cfg.contentPadding * 6 + "px";
			e.style.height = cfg.height - cfg.contentPadding * 2 + "px";
			this.display = "block";
		}
		e.style.display = "none";
		e.style.overhidden = cfg.scroll;
		
		if( cfg.url != "" ){
			e.style.paddingLeft = e.style.paddingRight = cfg.contentPadding + "px";
			e.style.width = cfg.width - cfg.contentPadding * 2 + "px";
			
			var frame = document.createElement("iframe");
			frame.frameBorder = 0;
			frame.style.width = Math.max(cfg.width, 200) - cfg.contentPadding * 2 + "px";
			frame.style.height = Math.max(cfg.height, 150) - cfg.contentPadding * 2 + "px";
			frame.src = cfg.url;
			e.appendChild(frame);
			
			this.display = "block";
		}else if( cfg.contentEl ){
			e.appendChild( DOTA.$(cfg.contentEl) );
		}else{
			e.innerHTML = cfg.html;
		}
		DOTA.$(cfg.renderTo).appendChild(e);
		
		this._showEvent = evt.bindEvent(this, this.onMouseOver);
		this._hideEvent = evt.bindEvent(this, this.onMouseOut);
		this._moveEvent = evt.bindEvent(this, this.onMouseMove);
		
		evt.addEvent(cfg.target, cfg.showEvent, this._showEvent);
		evt.addEvent(cfg.target, cfg.hideEvent, this._hideEvent);
	},
	
	clearTimer : function(){
		if( this.timer ){
			clearTimeout(this.timer);
			this.timer = null;
		}
	},
	
	onMouseOver : function(oEvent){
		this.clearTimer();
		this.oEvent = oEvent;
		this.timer = setTimeout(DOTA.Event.bind(this, this.show), this.config.showDelay);
	},
	
	onMouseMove : function(oEvent){
		this.oEvent = oEvent;
		this.setPosition();
	},
	
	onMouseOut : function(){
		this.clearTimer();
		this.timer = setTimeout(DOTA.Event.bind(this, this.hide), this.config.hideDelay);
	},
	
	setPosition : function(){
		var cfg = this.config, offset = {}, e = this.element, x = 0, y = 0, oEvent = this.oEvent;
		
		if( cfg.trackMouse ){
			offset.x = oEvent.pageX + 2;
			offset.y = oEvent.pageY + 2;
		}else{
			offset = DOTA.F.getOffset(cfg.target);
			switch( cfg.anchor ){
				case "left":
					x = -e.offsetWidth - 1; break;
				case "top":
					y = -e.offsetHeight - 1; break;
				case "bottom":
					y = cfg.target.offsetHeight + 1; break;
				default: //right
					x = cfg.target.offsetWidth + 1;
					break;
			}
		}			
		if( offset.x + x + e.offsetWidth > DOTA.F.getClientWidth() ){
			x = -e.offsetWidth - 1;
		}
		if( offset.y + y + e.offsetHeight > DOTA.F.getClientHeight() ){
			y = -e.offsetHeight - 1;
		}

		e.style.left = offset.x + x + "px";
		e.style.top = offset.y + y + "px";
	},
	
	show : function(){
		this.element.style.top = "-1000px";
		this.element.style.display = this.display || "inline-block";
		this.setPosition();
		
		if( this.config.trackMouse ){
			DOTA.Event.addEvent( this.config.target, "mousemove", this._moveEvent);
		}
	},
	
	hide : function(){
		this.element.style.display = "none";
		
		if( this.config.trackMouse ){
			DOTA.Event.removeEvent( this.config.target, "mousemove", this._moveEvent);
		}
	},
	
	setOpacity : function(n){
		DOTA.F.setOpacity( this.element, n );
	},
	
	dispose : function(){
		var cfg = this.config;
		DOTA.Event.removeEvent( cfg.target, cfg.showEvent, this._showEvent);
		DOTA.Event.removeEvent( cfg.target, cfg.hideEvent, this._hideEvent);
		
		this.element.innerHTML = "";
		cfg.renderTo.removeChild(this.element);

		
		this.element = null;
		this._showEvent = null;
		this._hideEvent = null;
		this._moveEvent = null;
	}
};
