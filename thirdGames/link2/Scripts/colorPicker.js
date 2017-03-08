/***********************************************
// ColorPicker v0.1
// 作者：黄健
// 日期：2009.08.26
// ＱＱ：573704282
// Email: freewind22@163.com
// 转载请保留此信息.
************************************************/

DOTA.ColorPicker = function(){	
	this.nMaxRow = 12;
	this.nMaxCol = 21;
	this.colorTable = null;
	this.colorPicker = null;
	this.target = null;
	this.callBack = null;
	this.isShow = true;
	
	this.initialize();
};
DOTA.ColorPicker.prototype = {	
	stopPropagation : function(oEvent){
		if(oEvent){
			oEvent.stopPropagation();
		}else{
			window.event.cancelBubble = true;
		}
	},
	toHexColor : function(nColor){
		return "#" + ("000000" + nColor.toString(16)).slice(-6);
	},
	toRGBColor : function(sColor){
		sColor = sColor.replace("#", "");
		var rgb = {R : 0, G : 0, B : 0};
		if(/^#(\w{2})(\w{2})(\w{2})$/.test(sColor)){
			rgb.R = parseInt(RegExp.$1, 16);
			rgb.G = parseInt(RegExp.$2, 16);
			rgb.B = parseInt(RegExp.$3, 16);
		}
		return rgb;
	},
	getBGColor : function(td){
		var bgColor = td.style.backgroundColor.toString().toUpperCase();
		if(bgColor.indexOf("RGB") >= 0){ //FF
			var rgb = bgColor.match(/RGB\((\d+).?,.?(\d+).?,.?(\d+)\)/);
			bgColor = "#";
			for(var i=1; i<rgb.length; i++){
				val = parseInt(rgb[i]).toString(16).toUpperCase();
				if(val.length < 2){
					val = "0" + val;
				}
				bgColor += val;
			}
		}
		return bgColor;
	},
	
	hideSelect : function(val){
		if(document.all){
			var selects = document.getElementsByTagName("select"),
				nLen = selects.length;
			for(var i=0; i < nLen; i++){
				if(selects[i].id != "CPType"){
					selects[i].style.visibility = val;
				}
			}
		}
	},
	
	initPosition : function(){
		if(!this.target ){
			return;
		}
		var offset = DOTA.F.getOffset(this.target);
		
		var nWidth = this.colorPicker.offsetWidth,
			nHeight = this.colorPicker.offsetHeight,
			objWidth = this.target.offsetWidth + 1,
			objHeight = this.target.offsetHeight + 1,
			bodyWidth = document.body.clientWidth || document.documentElement.clientWidth,
			bodyHeight = document.body.clientHeight || document.documentElement.clientHeight;
		
		if(offset.x + objWidth + nWidth > bodyWidth && offset.x - nWidth > 0){
			x = offset.x - nWidth;
		}else{
			x = offset.x + objWidth;
		}
		if(offset.y + objHeight + nHeight > bodyHeight && offset.y - nHeight + objHeight > 0){
			y = offset.y - nHeight + objHeight;
		}else{
			y = offset.y;
		}
		
		this.colorPicker.style.left = x + "px";
		this.colorPicker.style.top = y  + "px";
	},
	
	initHtml : function(){
		var sHtml = '<div id="FWColorPicker"><div id="CPTitle"><div id="CPPrevView"></div><div id="CPValue">#FFFFFF</div><div id="CPButton"><select hideFocus="hideFocus" id="CPType"><option value="1" selected="selected">立方色</option><option value="2">连续色调</option><option value="3">灰度等级</option></select></div></div><div id="CPTable" ></div><div id="CPBorder"></div></div>';
		
		this.colorPicker = document.createElement("div");
		this.colorPicker.innerHTML = sHtml;
		this.colorPicker.style.position = "absolute";
		this.colorPicker.style.top = "-1000px";
		this.colorPicker.style.zIndex = 1000;
		document.body.appendChild(this.colorPicker);
		
		var html = [];
		html.push("<table border='1' cellpadding='0' cellspacing='0' id='CPColorTable' >");
		for(var i=0; i < this.nMaxRow; i++){
			html.push("<tr>");
			for(var j=0; j < this.nMaxCol; j++){
				html.push("<td>&nbsp;</td>");
			}
			html.push("</tr>");
		}
		html.push("</table>");
		DOTA.$("CPTable").innerHTML = html.join("");
		
		DOTA.CSS.add("\
			#FWColorPicker{ position:relative; width:231px !important; width:232px; height:161px !important; height:162px; border:1px solid #333; font-size:12px; font-family:'宋体', Arial;}\
			#FWColorPicker #CPTitle{ height:25px; padding-top:4px; background:#E4E4E4; }\
			#FWColorPicker #CPPrevView{ float:left; width:50px; height:20px; border:1px solid #333; background:#FFF; margin-left:5px; }\
			#FWColorPicker #CPValue{ float:left; margin-left:20px; line-height:20px; }\
			#FWColorPicker #CPButton{ float:right; }\
			#FWColorPicker #CPButton select{ margin-right:10px; }\
			#FWColorPicker #CPColorTable{ border-collapse:collapse; border-color:#000; cursor:default; -moz-user-select:none; }\
			#FWColorPicker #CPColorTable td{ width:10px; height:10px; line-height:10px; border-color:#000;}\
			#FWColorPicker #CPBorder{ display:none; position:absolute; width:10px; height:10px; border:1px solid #FFFFFF; line-height:10px; }", document);
	},
	
	initEvent : function(){
		this.colorTable = DOTA.$("CPColorTable");
		var self = this;
		this.colorTable.onmousemove = function(oEvent){
			self.onmouseover(window.event ? window.event.srcElement : oEvent.target);
		};
		this.colorTable.onclick = function(oEvent){
			self.onclick(window.event ? window.event.srcElement : oEvent.target);
			self.stopPropagation(oEvent);
		};
		DOTA.$("CPBorder").onclick = function(oEvent){
			self.onclick(DOTA.$("CPPrevView"));
			self.stopPropagation(oEvent);
		};
		this.colorPicker.onclick = function(oEvent){
			self.stopPropagation(oEvent);
		};
		DOTA.$("CPButton").getElementsByTagName("select")[0].onchange = function(){
			var val = parseInt(this.value, 16);
			switch(val){
				case 1:
					self.setColor_Cube(); break;
				case 2:
					self.setColor_Series(); break;
				case 3:
					self.setColor_Gray(); break;
			}
			self.colorTable.focus();
		};
		DOTA.Event.addEvent(document, "click", function(){ self.Hide(); });
	},
	
	initialize : function(){
		this.hideSelect("hidden");
		this.initHtml();
		this.initEvent();
		this.setColor_Cube();		
	},
	
	onmouseover : function(td){
		if(td.tagName.toLowerCase() != "td"){
			return;
		}
		var bgColor = this.getBGColor(td),
			offset = DOTA.F.getOffset(td, DOTA.$("FWColorPicker")),
			CPBorder = DOTA.$("CPBorder");
			
		CPBorder.style.display = "block";
		CPBorder.style.left = offset.x - (document.all ? 0 : 1 ) + "px";
		CPBorder.style.top = offset.y - (document.all ? 0 : 1 ) + "px";
		
		DOTA.$("CPPrevView").style.backgroundColor = bgColor;
		DOTA.$("CPValue").innerHTML = bgColor;
	},
	
	onclick : function(td){
		var bgColor = this.getBGColor(td);
		var nColor = parseInt(bgColor.replace("#", ""), 16);
		this.Hide();

		this.target.style.backgroundColor = bgColor;
		//this.target.style.color = (nColor < 0x888888) ? "#FFFFFF" : "#000000";
	
		if(this.callBack){
			this.callBack(bgColor, this.target);
		}
	},
	
	setColor_Left : function(){
		var table = this.colorTable;
		var colors = ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
		for(var i=0; i < this.nMaxRow; i++){
			table.rows[i].cells[0].style.backgroundColor = table.rows[i].cells[2].style.backgroundColor = "#000000";
			table.rows[i].cells[1].style.backgroundColor = colors[i];
		}
	},
	setColor_Cube : function (){
		this.setColor_Left();
		
		var table = this.colorTable, start = 0x0, step = 0x330000;
		for(var i=0; i< this.nMaxRow; i++){
			if(i > 5){
				color = start = 0x990000 + (i-6) * 0x000033;
			}else{
				color = start = 0x0 + i * 0x000033;
			}
			for(var j=3; j < this.nMaxCol; j++){
				table.rows[i].cells[j].style.backgroundColor =  this.toHexColor(color);
				color += 0x003300;
				if((j - 2) % 6 == 0){
					start += step, color = start;
				}
			}
		}
	},
	setColor_Series : function (){
		this.setColor_Left();
		
		var table = this.colorTable, start = 0xCCFFFF, step = 0x660000, flag = 1;
		for(var i=0; i < this.nMaxRow; i++){
			if(i > 5){
				color = start = 0xFF00FF + (i-6) * 0x003300;
			}else{
				color = start = 0xCCFFFF - i * 0x003300;
			}
			flag = 1;
			for(var j=3; j < this.nMaxCol; j++){
				table.rows[i].cells[j].style.backgroundColor = this.toHexColor(color);
				color -= 0x000033 * flag;
				if((j - 2) % 6 == 0){
					flag *= -1;
					start -= step ;
					color = start - ((flag > 0) ? 0 : 0x0000FF);
				}
			}
		}
	},
	setColor_Gray : function (){
		var table = this.colorTable, color = 0xffffff;
		
		for(var i=0; i < this.nMaxRow; i++){
			for(var j=0; j < this.nMaxCol; j++){
				table.rows[i].cells[j].style.backgroundColor = this.toHexColor(color);
				if(color <= 0) {
					color = 0x000000;
				}else{
					color -= 0x010101;
				}
			}
		}
	},
	
	Show : function(obj, fnCallBack){
		this.target = obj;
		this.callBack = fnCallBack;
		this.isShow = true;
		this.colorPicker.style.display = "block";
		this.initPosition();
		this.hideSelect("hidden");
	},
	
	Hide : function(){
		if(this.isShow){
			this.colorPicker.style.display = "none";
			this.isShow = false;
			this.hideSelect("visible");
		}
	}
};
		

function selectColor (obj, fnCallBack){
	if(typeof DOTA.$colorPicker == "undefined"){
		DOTA.$colorPicker = new DOTA.ColorPicker();
	}
	DOTA.$colorPicker.Show(obj, fnCallBack);
	DOTA.$colorPicker.stopPropagation(selectColor.caller.arguments[0]);
}