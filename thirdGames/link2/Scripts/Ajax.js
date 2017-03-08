// JavaScript Document
DOTA.Ajax = function(){};

DOTA.Ajax.prototype = {
	createHttpRequest : function(){
		if(window.ActiveXObject){
			//var ver = ["MSXML5.XMLHTTP","MSXML4.XMLHTTP","MSXML3.XMLHTTP","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
			var ver = ["Microsoft.XMLHTTP","MSXML.XMLHTTP"];
			for(var i=0; i<ver.length; i++){
				try{
					return new window.ActiveXObject(ver[i]);
				}catch(e){}
			}		
		}else{
			try{
				return new XMLHttpRequest();		
			}catch(e){}
		}
		alert("Failure to create HttpRequest!");
	},
	
	get : function(url, async, fnCallBack){
		var xmlHttp = this.createHttpRequest();
		xmlHttp.open("GET", url, async);

		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState == 4 ){
				if(xmlHttp.status == 200){
					fnCallBack(xmlHttp);
				}else{
					xmlHttp = null;
					fnCallBack(false);
				}
			}
		};
		xmlHttp.setRequestHeader("If-Modified-Since","0");
		xmlHttp.send(null);
	},
	
	post : function(url, para, async, fnCallBack){
		var xmlHttp = this.createHttpRequest();
		xmlHttp.open("POST", url, async);
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState == 4 ){
				if(xmlHttp.status == 200){
					fnCallBack(xmlHttp);
				}else{
					xmlHttp = null;
					fnCallBack(false);
				}
			}
		};
		xmlHttp.setRequestHeader("If-Modified-Since","0");
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//this.xmlHttp.setRequestHeader("Content-Type","text/html; charset=gb2312");
		xmlHttp.send(para);	
	}
};