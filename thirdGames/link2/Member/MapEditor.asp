<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>Map Editor v.01</title>
<link rel="stylesheet" type="text/css" href="../Skin/QQ/Option.css"/>
<link rel="stylesheet" type="text/css" href="../Skin/QQ/DOTA_All.css"/>
<style type="text/css">
html, body{
	margin:0px; padding:0px; font-size:12px; color:#eee; overflow:hidden;
}
.text{
	border:1px solid #2B4A84; background:#E4F4FD; color:#2B4A84; height:17px; line-height:16px; width:60px;
}
.btnx{
	height:22px; width:50px; background:#555; color:#fff;
}
form{
	margin:0px; padding:0px;
}
#container{
	width:600px; height: 460px; margin:0px auto;
}
#menu{
	height:26px;
}
#content{
	height:377px; padding:4px;
}
#content table{
	border-collapse:collapse; background:#6b8bbb;
}
#content table td{
	width:30px; height:34px; border:1px solid #2B4A84;
}
#content table .sett{
	background:#2980BE;
}
#mapMsg, #userInfo{
	padding-left:5px; padding-right:5px; line-height:22px;
}
#userInfo div{
	float:left; margin-right:10px;
}
#formAbout{
	display:none;
}
#about{
	padding-left:20px; line-height:20px; color:#fff; letter-spacing:1px;
}
#saveMap{
	display:none;
}
</style>
<script type="text/javascript" src="../Scripts/Base.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Menu.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Animation.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Toolbar.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Button.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Drag.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Window.js" charset="utf-8"></script>
<script type="text/javascript">
var MapEditor = {
	initMap : function(){
		var html = ["<table border='0' cellpadding='0' cellspacing='0'>"];
		html.push(new Array(12).join("<tr>" + new Array(20).join("<td style='height:33px;'></td>") + "</tr>"));
		html.push("</table>");
		DOTA.$("content").innerHTML = html.join("");
		
		this.Table = DOTA.$("content").getElementsByTagName("table")[0];
	},
	initMenu : function(){
		this.menu = new DOTA.MENU.Menu({id : "mainMenu", items : [
			{
				text : '文件(F)',
				menu : {
					items : [
						{
							text : '新建',
							hotKey : 'Ctrl + D',
							handle : DOTA.Event.bindEvent(this, this.handler, 'New')
						},{
							text : '保存', handle : DOTA.Event.bindEvent(this, this.handler, 'Save')
						}, '-' , {
							text : '退出', handle : DOTA.Event.bindEvent(this, this.handler, 'Exit')
						}
					]
				}
			}, {
				text : '编辑(E)',
				menu : {
					items : [
						{ text : '清空' , handle : DOTA.Event.bindEvent(this, this.handler, 'Clear') },
						{ text : '全选' , handle : DOTA.Event.bindEvent(this, this.handler, 'SelectAll') }
					]
				}
			}, {
				text : '帮助(H)',
				menu : {
					items : [
						 { text : '关于', handle : DOTA.Event.bindEvent(this, this.handler, 'About') }
					]
				}
			}
		]});
		this.menu.renderTo("menu");
	},
	initEvent : function(){
		DOTA.Event.addEvent(this.Table, "click", DOTA.Event.bindEvent(this, this.onClick));
		DOTA.Event.addEvent(this.Table, "mousedown", DOTA.Event.bindEvent(this, this.onMouseDown));
		DOTA.Event.addEvent(this.Table, "mousemove", DOTA.Event.bindEvent(this, this.onMouseMove));
		DOTA.Event.addEvent(this.Table, "mouseup", DOTA.Event.bindEvent(this, this.onMouseUp));
		
		DOTA.Event.addEvent(document, "contextmenu", DOTA.Event.bindEvent(this, this.onContext));
	},
	init : function(){
		this.mouseDown = true;
		this.flag = false;
		this.isSaving = false;
		DOTA.$("num").value = this.num = 0;
		
		this.initMenu();
		this.initMap();
		this.initEvent();
	},
	setFlag : function(oEvent, flag){
		var target = oEvent.target;
		if(target.tagName && target.tagName.toLowerCase() == "td"){
			if(flag){
				if(target.className != "set"){
					target.className = "set";
					this.num++;
				}
			}else{
				if(target.className == "set"){
					target.className = "";
					this.num--;
				}
			}
			DOTA.$("num").value = this.num;
		}
	},
	onMouseDown : function(oEvent){
		this.flag = oEvent.button == 2 ? false : true;
		this.mouseDown = true;
		this.setFlag(oEvent, this.flag);
	},
	onMouseMove : function(oEvent){
		if(this.mouseDown){
			this.setFlag(oEvent, this.flag);
		}
	},
	onMouseUp : function(){
		this.mouseDown = false;
	},
	onClick : function(oEvent){
		if(oEvent.button != 2){
			this.setFlag(oEvent, true);		
		}
	},
	onContext : function(oEvent){
		this.setFlag(oEvent, false);
		oEvent.preventDefault();
	},
	handler : function(oEvent, type){
		switch(type.toLowerCase()){
			case "new":
				this.setMap(false);
				DOTA.$("mapName").value = "";
				DOTA.$("authorName").value = "";
				break;
			case "save":
				this.saveMap();
				break;
			case "exit":
				this.dispose();
				parent.closeDialog();
				break;
			case "clear":
				this.setMap(false);
				break;
			case "selectall":
				this.setMap(true);
				break;
			case "about":
				this.showHelp();
				break;
		}
		this.mouseDown = false;
	},
	setMap : function(flag){
		var T = this.Table, css = flag ? "set" : "";
		for(var i = 0; i < T.rows.length; i++){
			for(var j = 0; j < T.rows[i].cells.length; j++){
				T.rows[i].cells[j].className = css;
			}
		}
		this.num = flag ? 11 * 19 : 0;
		DOTA.$("num").value = this.num;
	},
	saveMap : function(){
		var T = this.Table, map = [], num = parseInt(DOTA.$("num").value, 10);
		if(this.isSaving){
			alert("正在保存地图，请稍候再试！");
			return;
		}
		if(num < 40 || num > 200 || num % 2 == 1){
			alert("地图中方块数错误，请修改后再保存！");
			return;
		}
		if(DOTA.$("mapName").value == ""){
			alert("请输入地图名称!");
			return;
		}
		if(DOTA.$("authorName").value == ""){
			alert("请输入您的名称!");
			return;
		}
		for(var i = 0; i < T.rows.length; i++){
			for(var j = 0; j < T.rows[i].cells.length; j++){
				map.push(T.rows[i].cells[j].className == "" ? "_" : "1");
			}
		}
		DOTA.$("mapString").value = map.join("");
		this.isSaving = true;
		DOTA.$("form1").submit();
	},
	showHelp : function(){
		if(!this.help){
			this.help = new DOTA.Dialog({title: "关于", width:300, height:190});
		}
		this.help.show(DOTA.$("formAbout").innerHTML);
	},
	dispose : function(){
		this.menu.dispose();
		if(this.help){
			this.help.dispose();
		}
	}
}
function addMap(id, name, data, author, time){
	parent.addMap(id, name, data, author, time);
}
function callback(success, msg){
	MapEditor.isSaving = false;
	alert(msg);
}
window.onload = function(){
	MapEditor.init();
	new DOTA.Button({text: "保 存", onClick: function(){
		MapEditor.handler(null, 'save');
	}}).renderTo(DOTA.$("btnList"));
	new DOTA.Button({text: "清 空", onClick: function(){
		MapEditor.handler(null, 'clear');
	}}).renderTo(DOTA.$("btnList"));
	new DOTA.Button({text: "全 选", onClick: function(){
		MapEditor.handler(null, 'selectAll');
	}}).renderTo(DOTA.$("btnList"));
	new DOTA.Button({text: "退 出", onClick: function(){
		MapEditor.handler(null, 'exit');
	}}).renderTo(DOTA.$("btnList"));
};

</script>
</head>
<body onselectstart="return false;">
<form method="post" id="form1" name="form1" action="saveMap.asp" target="saveMap">
	<input type="hidden" name="mapString" id="mapString" value="" />
    <div id="container">
        <div id="menu"></div>
        <div id="content">
            
        </div>
        <div id="mapMsg">
            方块数量: <input type="text" class="text" id="num" readonly="readonly" maxlength="4" size="2" style="width:25px;" />
            <b>&nbsp;注</b>：当方块数在40-200间且为双数时有效。
        </div>
        <div id="userInfo">
        	<div>
                地图名称: <input type="text" class="text" id="mapName" name="mapName" maxlength="20" size="10" /> &nbsp;
                您的姓名：<input type="text" class="text" id="authorName" name="authorName" maxlength="20" size="10" /> &nbsp;
            </div>
            <div id="btnList"></div>
        </div>
    </div>
</form>
<div id="formAbout">
	<div id="about">
        <div>连连看地图编辑器</div> 
        <div>版本：v0.1</div> 
        <div>作者：Freewind</div> 
        <div>ＱＱ：573704282</div> 
        <div>版权所有 Copyright&copy; 2010</div> 
	</div>
</div>
<iframe frameborder="0" name="saveMap" id="saveMap" style="width:0px; height:0px; overflow:hidden; line-height:0px;"></iframe>
</body>
</html>
