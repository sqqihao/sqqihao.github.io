DOTA.Draw = function(config){
	this.config = DOTA.Extend({
		container: document.body,
		borderColor: "#333333",
		backgroundColor: "#FFFFFF",
		penColor: "#FF0000",
		penSize : 1,
		brushColor: "#006699",
		width: 400,
		height: 300,
		buffer: false
	}, config || {});
	
	this.x = this.y = 0;
	this.doc = document.createDocumentFragment();
	
	this.init();
};

DOTA.Draw.prototype = {
	init : function(){
		var cfg = this.config;
		var e = this.element = document.createElement("div");
		e.style.cssText = "position:relative; overflow:hidden; width:" + cfg.width + "px; height:" + cfg.height + "px; background:" + cfg.backgroundColor + "; border:1px solid " + cfg.borderColor + ";";

		DOTA.$(cfg.container).appendChild(e);
	},
	
	insert : function(isFlush){
		if( isFlush || !this.config.buffer ){
			this.element.appendChild(this.doc);
			this.doc.innerHTML = "";
		}
		return this;
	},
	
	flush : function(){
		this.insert(true);
	},
	
	create : function(x, y, width, height, bgColor, returnHtml){
		var cfg = this.config;
		x = x || this.x, y = y || this.y;
		width = width || 1, height = height || 1;
		
		var el = document.createElement("div");
		el.style.cssText = "position:absolute; overflow:hidden; left:" + x + "px; top:" + y + "px;"
		if( width == 1 || height == 1 ){
			el.style.width = (width == 1 ? cfg.penSize : width) + "px";
			el.style.height = (height == 1 ? cfg.penSize : height) + "px";
			el.style.backgroundColor = cfg.penColor;
		}else{
			el.style.width = width - cfg.penSize * 2 + "px";
			el.style.height = height - cfg.penSize * 2 + "px";
			el.style.border = cfg.penSize + "px solid " + cfg.penColor;
		}
		if( bgColor ){
			el.style.backgroundColor = bgColor;
		}
		if( returnHtml ){
			var tmp = document.createElement("div");
			tmp.appendChild(el);
			this.doc.innerHTML += tmp.innerHTML;
			tmp.innerHTML = "";
			tmp = null;
		}else{
			this.doc.appendChild(el);
		}
		return this;
	},
	
	setPixel : function(x, y){
		this.create(x, y).insert();
		this.x = x, this.y = y;
		return this;
	},
	dot : function(x, y){
		return this.setPixel(x, y);
	},
	
	line : function(x1, y1, x2, y2){
		var tmp, n, doc, diff, i, saveBuffer;
        x1 > x2 ? (tmp = x1, x1 = x2, x2 = tmp) : "";
        y1 > y2 ? (tmp = y1, y1 = y2, y2 = tmp) : "";
       
        if (x1 == x2){
           	this.create(x1, y1, 1, y2 - y1).insert();
        } else if (y1 == y2){ 
            this.create(x1, y1, x2 - x1, 1).insert();
        } else{ 
            n = (x2 - x1) / (y2 - y1);
            saveBuffer = this.config.buffer;
			this.config.buffer = true;
            if (n >= 1){
                diff = x2 - x1;
                for ( i = 0; i < diff; i++ ){
                    this.create(x1 + i, y1 + parseInt(i / n)).insert();
                }
            } else{
                diff = y2 - y1;
                for ( i = 0; i < diff; i++ ){
                    this.create(x1 + parseInt(i * n), y1 + i).insert();
                }
            }
			!saveBuffer && this.flush();
			this.config.buffer = saveBuffer;
        }
		
		return this;
	},
	
	lineTo : function(x, y){
		this.line(this.x, this.y, x, y);
		return this;
	},
	
	rectangle : function(x1, y1, x2, y2, bgColor){
		this.create(x1, y1, x2 - x1, y2 - y1, bgColor).insert();
		return this;
	},
	
    circle: function(x, y, r){
        var radio, xx, yy, Pi = Math.PI, saveBuffer;
       	saveBuffer = this.config.buffer;
		this.config.buffer = true;
		
        for (var i = 0.0; i < 360; i += 0.5){
            radio = i * Pi / 180;
            xx = r * Math.cos(radio) + x;
            yy = r * Math.sin(radio) + y;
            this.create(xx, yy).insert();
        }
		
       	!saveBuffer && this.flush();
		this.config.buffer = saveBuffer;
		return this;
    },
	
	moveTo : function(x, y){
		this.x = x;
		this.y = y;
		return this;
	},
	
	setBuffer : function(val){
		this.config.buffer = val;
		return this;
	},
	
	setSize : function(nSize){
		this.config.penSize = nSize;
		return this;
	},
	
	setColor : function(sColor){
		this.config.penColor = sColor;
		return this;
	},
	
	setBrushColor : function(sColor){
		this.config.brushColor = sColor;
		return this;
	},
	
	toString : function(){
		return this.element.innerHTML;
	},
	
	clear : function(){
		this.element.innerHTML = "";
	},
	
	dispose : function(){
		this.doc.innerHTML = "";
		this.doc = null;
		this.element.innerHTML = "";
		this.config.container.removeChild(this.element);
		this.config = null;
	}
};