/***********************************************
// DOTA.Base.js
// 作者：黄健
// 日期：2009.08.26
// ＱＱ：573704282
// Email: freewind22#163.com
// 转载请保留此信息.
// 最后修改: 2009-12-07
************************************************/

if(typeof DOTA == "undefined" || !DOTA){
	window.DOTA = {};
}

//常用函数
DOTA.$ = function(id){
	return "string" == typeof id ? document.getElementById(id) : id;
};
DOTA.Extend = function(dest, sour){
	for(var property in sour){
		dest[property] = sour[property];
	}
	return dest;
};

//功能函数
DOTA.F = {};
DOTA.F.getOffset = function (obj, parentObj){
	var x = 0, y = 0;
	do{
		x += obj.offsetLeft;
		y += obj.offsetTop;
		
		obj = obj.offsetParent;
	}while(obj && obj != parentObj);
	return {x:x, y:y};
};

DOTA.F.currentStyle = function(element){
	return element.currentStyle || document.defaultView.getComputedStyle(element, null);
};

DOTA.F.getOffsetWidth = function(){
	return document.documentElement.offsetWidth || document.body.offsetWidth || 0;
};
DOTA.F.getOffsetHeight = function(){
	return document.documentElement.offsetHeight || document.body.offsetHeight || 0;
};
DOTA.F.getClientWidth = function(){
	return document.documentElement.clientWidth || document.body.clientWidth || 0;
};
DOTA.F.getClientHeight = function(){
	return document.documentElement.clientHeight || document.body.clientHeight || 0;
};
DOTA.F.getScrollLeft = function(){
	return document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
DOTA.F.getScrollTop = function(){
	return document.documentElement.scrollTop || document.body.scrollTop || 0;
};
DOTA.F.getScrollWidth = function(){
	return Math.max(document.documentElement.scrollWidth || document.body.scrollWidth ) || 0;
};
DOTA.F.getScrollHeight = function(){
	return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) || 0;
};
DOTA.F.setOpacity = function(element, opacity){
	var b = DOTA.Browser;		
	if( b.ie ){
		element.style.filter = opacity == 100 ? "" : "alpha(opacity=" + opacity + ")";
	}else if( b.safari ){
		element.style.KhtmlOpacity = opacity / 100;
	}else if( b.firefox ){
		element.style.MozOpacity = opacity / 100;
	}else{
		element.style.opacity = opacity / 100;
	}
};
DOTA.F.getOpacity = function(element){
	var b = DOTA.Browser, ret = 100, style = DOTA.F.currentStyle(element);
	if( b.ie ){
		if(/alpha\(opacity\s*=\s*(\d+)\)/i.test(style.filter)){
			ret = RegExp.$1;
		}
	}else if( b.safari ){
		ret = style.KhtmlOpacity * 100;
	}else if( b.firefox ){
		ret = style.MozOpacity * 100;
	}else{
		ret = style.opacity * 100;
	}
	return (isNaN(parseInt(ret)) ? 100 : parseInt(ret));
};

//CSS类, 动态添加CSS
DOTA.CSS = {
	add : function(cssText, doc){
		doc = doc || document;
		var style = null, 
			styles = doc.getElementsByTagName("head")[0].getElementsByTagName("style");	
		if(styles && styles.length == 0){
			style = doc.createElement("style");
			style.type = "text/css";
			doc.getElementsByTagName("head")[0].appendChild(style);
		}else{
			style = styles[0];
		}
		if(style.styleSheet){
			style.styleSheet.cssText += cssText;
		}else{
			style.appendChild(doc.createTextNode(cssText));
		}
	}
};

DOTA.Browser = (function(){
	var Sys = {};
	var ua = navigator.userAgent.toLowerCase();
	if (window.ActiveXObject)
		Sys.ie = ua.match(/msie ([\d.]+)/)[1];
	else if (/firefox/.test(ua))
		Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1];
	else if (/chrome/.test(ua))
		Sys.chrome = ua.match(/chrome\/([\d.]+)/)[1];
	else if (window.opera)
		Sys.opera = ua.match(/opera.([\d.]+)/)[1];
	else if (window.openDatabase)
		Sys.safari = ua.match(/version\/([\d.]+)/)[1];
	return Sys;
})();

DOTA.Cookie = {
	setCookie: function(name, value, expries){ //保存Cookie expries 分钟
		expries =  expries || (30 * 24 * 60); //默认保存30天
		var exp = new Date(new Date().getTime() + expries * 1000);
		document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString();
	},
	getCookie: function(name){ //读取Cookie
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		return (arr ? unescape(arr[2]) : null);
	},
	delCookie: function(name){//删除Cookie
		if(this.getCookie(name)){
			document.cookie= name + "=;expires=" + new Date(new Date().getTime() - 1).toGMTString();
		}
	}
};

//事件处理对象
DOTA.Event = {
	bind : function(object, fun){
		return function(){
			return fun.apply(object, arguments);
		}
	},
	bindEvent : function(object, fun) {
		var args = Array.prototype.slice.call(arguments).slice(2);
		return function(event) {
			return fun.apply(object, [DOTA.Event.formatEvent(event || window.event)].concat(args));
		}
	},
	addEvent : function(oTarget, sEventType, fnHandler){
		if( oTarget.addEventListener){
			oTarget.addEventListener(sEventType, fnHandler, false);
		}else if( oTarget.attachEvent ){
			oTarget.attachEvent("on" + sEventType, fnHandler);
		}else{
			oTarget["on" + sEventType] = fnHandler;
		}
	},
	
	removeEvent : function(oTarget, sEventType, fnHandler){
		if( oTarget.removeEventListener){
			oTarget.removeEventListener(sEventType, fnHandler, false);
		}else if( oTarget.detachEvent ){
			oTarget.detachEvent("on" + sEventType, fnHandler);
		}else{
			oTarget["on" + sEventType] = null;
		}
	},
	
	formatEvent : function(oEvent){
		if(document.all && oEvent){
			oEvent.charCode = ( oEvent.type == "keypress" ) ? oEvent.keyCode : 0;
			oEvent.eventPhase = 2;
			oEvent.isChar = ( oEvent.charCode > 0 );
			oEvent.pageX = oEvent.clientX + DOTA.F.getScrollLeft();
			oEvent.pageY = oEvent.clientY + DOTA.F.getScrollTop();
			oEvent.preventDefault = function(){
				this.returnValue = false;
			};
			
			if( oEvent.type == "mouseout" ){
				oEvent.relatedTarget = oEvent.toElement;
			}else if( oEvent.type == "mouseover" ){
				oEvent.relatedTarget = oEvent.fromElement;
			}
			
			oEvent.stopPropagation = function(){
				this.cancelBubble = true;
			};
			
			oEvent.target = oEvent.srcElement;
			oEvent.time = (new Date()).getTime();
		}
		
		return oEvent;
	},
	
	getEvent : function(){
		if( window.event ){
			return this.formatEvent(window.event);
		}
		else{
			return DOTA.Event.getEvent.caller.arguments[0];
		}
	}
};