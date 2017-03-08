/***********************************************
// DOTA.Progress v0.1
// 作者：黄健
// 日期：2009.08.26
// ＱＱ：573704282
// Email: freewind22@163.com
// 转载请保留此信息.
************************************************/

DOTA.Progress = function(parentID, config){	
	this._position = 0;
	this._parent = DOTA.$(parentID);
	this._oProgress = null
	this._oBg = null;
	this._oText = null;
	this.config = DOTA.Extend({
		width : "300px", 		//进度条宽度
		height : "22px", 		//高度
		isShowRG : true, 		//是否显示圆角
		RGColor : "#888888",	//圆角颜色
		isShowBorder : false, 	//是否显示边框 ---- 圆角和边框只能有一项, 圆角优先
		borderColor : "#005000",//边框颜色
		bgColor : "#2980BE", 	//背景色
		foreColor : "#364F75", 	//进度条颜色
		filter : "",			//进度条滤镜, IE only
		isShowText : true,		//是否显示当前进度文本
		textColor : "#FFFFFF" 	//文字颜色
	}, config || {});
	
	this.config.isShowBorder = !this.config.isShowRG && this.config.isShowBorder;
	this._init();
};
DOTA.Progress.prototype = {
	_getRandomID : function(){
		return "ID_" + parseInt(Math.random() * 10000);
	},
	
	_init : function(){
		var id = this._getRandomID();
		var cfg = this.config;
		
		//创建进度条对象
		this._oProgress = document.createElement("div");
		this._oProgress.className = "progress" + id;
		
		var html =  '	<div id="progressBg' + id + '" class="rg">&nbsp;</div>' + 
					'	<div id="progressText' + id + '" class="rg_text"></div>';
		if( cfg.isShowRG ){
			html +=	'	<div class="lt"><div class="rg_1"></div><div class="rg_2"></div><div class="rg_3"></div></div>' + 
					'	<div class="rt"><div class="rg_1"></div><div class="rg_2"></div><div class="rg_3"></div></div>' + 
					'	<div class="lb"><div class="rg_3"></div><div class="rg_2"></div><div class="rg_1"></div></div>' + 
					'	<div class="rb"><div class="rg_3"></div><div class="rg_2"></div><div class="rg_1"></div></div>' ;
		}
		
		this._oProgress.innerHTML = html;
		this._parent.appendChild(this._oProgress);
		this._oBg = DOTA.$("progressBg" + id);
		this._oText = DOTA.$("progressText" + id);
		
		DOTA.CSS.add(".progress" + id + "{ position:relative; width:" + cfg.width + "; height:" + cfg.height + "; line-height:" + cfg.height + "; background:" + cfg.bgColor + ";" + (cfg.isShowBorder ? "border:1px solid " + cfg.borderColor : "") + "}\
			.progress" + id + " .lt{	position:absolute; left:0px; top:0px;}\
			.progress" + id + " .rt{	position:absolute; right:0px; top:0px;}\
			.progress" + id + " .lb{	position:absolute; left:0px; bottom:0px;}\
			.progress" + id + " .rb{	position:absolute; right:0px; bottom:0px;}\
			.progress" + id + " .rt div, .progress" + id + " .rb div{	float:right; clear:both;}\
			.progress" + id + " .rg_1, .progress" + id + " .rg_2, .progress" + id + " .rg_3{	height:1px; overflow:hidden; background:" + cfg.RGColor + ";			}\
			.progress" + id + " .rg_1{ width:4px;}\
			.progress" + id + " .rg_2{ width:2px;}\
			.progress" + id + " .rg_3{ width:1px;}\
			.progress" + id + " .rg{ background:" + cfg.foreColor + "; width:0px; overflow:hidden; " + (document.all && cfg.filter ? "filter:" + cfg.filter + ";" : "") + "}\
			.progress" + id + " .rg_text{	position:absolute; left:0px; top:0px; text-align:center; width:100%; color:" + cfg.textColor + ";}", document);

		this._oBg.style.width = "0px";
		
		if(cfg.isShowText){

			this._oText.innerHTML = "0%";
		}
	},
	
	setPosition : function(n){
		this._oBg.style.width = n + "%";
		if(this.config.isShowText){
			this._oText.innerHTML = n + "%";
		}
	},
	
	progress : function(current, count){
		this.setPosition(parseInt(current * 100 / count, 10));
	},
	
	dispose : function(){
		this._oProgress.innerHTML = "";
		this._parent.removeChild(this._oProgress);
		this._oProgress = null;
		this._oBg = null;
		this._oText = null;
	}
};