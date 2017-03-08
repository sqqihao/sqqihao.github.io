/***********************************************
// DOTA.Animation v0.1
// 作者：黄健
// 日期：2010.01.16
// ＱＱ：573704282
// Email: freewind22@163.com
// 转载请保留此信息.
************************************************/
DOTA.Animation = function(config){
	this.config = DOTA.Extend({
		element : document.body,
		speed	: 200,
		opacity : 100,
		fps		: DOTA.Browser.ie ? 20 : 50,
		css		: ""
	}, config || {});
	
	this.init();
};

DOTA.Animation.prototype = {
	init : function(){
		var cfg = this.config;
		this.element = DOTA.$(cfg.element);
		var bg = this.moveBG = document.createElement("div");
		bg.appendChild(document.createElement("div"));	
		if(cfg.css){
			bg.className = cfg.css;
		}else{
			bg.style.cssText = "display:none; position:absolute; background:#888; border:1px solid #ccc;"
		}
		document.body.appendChild(bg);
	},
	show : function(speed, callback){
		this.animate(true, speed, callback);		
	},
	hide : function(speed, callback){
		this.animate(false, speed, callback);
	},
	animate : function(show, speed, callback){
		show && (this.element.style.display = "block");	
		var cfg = this.config, el = this.element, style = DOTA.F.currentStyle(el), bg = this.moveBG,
			width = parseInt(style.width), height = parseInt(style.height), offset = DOTA.F.getOffset(el),
			x = parseInt(style.left) + width / 2, y = parseInt(style.top) + height / 2,
			maxFrame = (speed || cfg.speed) * cfg.fps / 1000, frame = 1;

		el.style.display = "none";		
		bg.style.display = "block";
		bg.style.zIndex = el.style.zIndex;
		if(show){
			bg.style.width = "0px";
			bg.style.height = "0px";
			bg.style.left = style.left;
			bg.style.top = style.top;
		}

		var timerID = setInterval(function(){
			if(show){
				w = frame * width / maxFrame, h = frame * height / maxFrame;
			}else{
				w = (maxFrame - frame) * width / maxFrame, h = (maxFrame - frame) * height / maxFrame;
			}
			bg.style.left = x - w / 2 + "px";
			bg.style.top = y - h / 2 + "px";
			bg.style.width = w + "px";
			bg.style.height = h + "px";
			DOTA.F.setOpacity(bg, w / width * 100);
			if(++frame > maxFrame){
				clearInterval(timerID);
				bg.style.display = "none";
				if(!show){
					el.style.display = "none";
				}else{
					el.style.display = "block";
				}
				callback && callback();
			}
		}, 1000 / cfg.fps);
	},
	dispose : function(){
		this.moveBG.innerHTML = "";
		document.body.removeChild(this.moveBG);
	}
};