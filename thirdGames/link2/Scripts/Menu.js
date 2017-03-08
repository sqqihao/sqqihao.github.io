/***********************************************
// DOTA.Menu v0.1
// 作者：黄健
// 日期：2009.09.20
// ＱＱ：573704282
// Email: freewind22@163.com
// 转载请保留此信息.
************************************************/

DOTA.MENU = {};

DOTA.MENU.MenuItem = function(text, handle, level, isChecked, isFolder){
	this.text = text;
	this.handle = handle || function(){};
	this.level = level || 0;
	this.isChecked = !!isChecked;
	this.isFolder = !!isFolder;
	this.subMenu = null;
	this.element = null;
	this.check = null;
};

DOTA.MENU.MenuItem.prototype = {
	renderTo : function(container){
		var s, e = this.element = document.createElement("div");
		e.className = "DOTA_MenuItem";
		
		if(this.text == "-"){ 
			e.className = "DOTA_MenuSeparator"
			e.innerHTML = "&nbsp;";
		}else if( this.level > 0 ){
			s = this.check = document.createElement("span");
			s.innerHTML = this.isChecked ? "√" : "&nbsp;";
			s.className = "DOTA_MenuItem_Check"
			e.appendChild(s);
			
			s = this.menu = document.createElement("span");
			s.innerHTML = this.text;
			s.className = "DOTA_MenuItem_Text";
			e.appendChild(s);
			
			s = this.more = document.createElement("span");
			s.innerHTML = this.isFolder ? '►' : '&nbsp;';
			s.className = "DOTA_MenuItem_More";
			e.appendChild(s);
		
		}else{
			e.innerHTML = this.text;
		}
		
		container.appendChild(e);
	},
	setText : function(text){
		this.menu.innerHTML = text;
	},
	getText : function(){
		return this.menu.innerHTML;
	},
	dispose : function(){
		if(this.element){
			this.element.innerHTML = "";
			this.element = null;
		}
	}
};

//主菜单
DOTA.MENU.MainMenu = function(menu){
	this.menuID = "";
	this.menu = menu || {items : []};
	this.menus = [];
	this.events = [];
	this.isRender = false;
	this.isClick = false;
	this.element = null;
	this.subMenu = null;
	this.currentIndex = -1;
	
	this.ondocumentclick = DOTA.Event.bindEvent(this, this.onDocumentClick);
};
DOTA.MENU.MainMenu.prototype = {
	renderTo : function(container){
		var i, s, o = this.menu.items, e, evt = DOTA.Event;
		var e = this.element = document.createElement("div");
		e.className = "DOTA_MainMenu";
		container.appendChild(e);			
		
		for(i = 0; i < o.length; i++){
			s = this.menus[i] = new DOTA.MENU.MenuItem(o[i].text ? o[i].text : o[i]);
			s.renderTo(e);
			if( !this.events[i] ){
				this.events[i] = {};
				this.events[i].onmouseover = evt.bindEvent(this, this.onMouseOver, i, s.element);
				this.events[i].onmouseout = evt.bindEvent(this, this.onMouseOut, i, s.element);
				this.events[i].onclick = evt.bindEvent(this, this.onClick, i, s.element);
			}
			evt.addEvent(s.element, "mouseover", this.events[i].onmouseover);
			evt.addEvent(s.element, "mouseout", this.events[i].onmouseout);
			evt.addEvent(s.element, "click", this.events[i].onclick);
			if(o[i].menu){
				s.subMenu = new DOTA.MENU.SubMenu( o[i].menu );
				s.subMenu.renderTo( container );
			}
		}
		evt.addEvent(document, "click", this.ondocumentclick);
		
		this.isRender = true;
	},
	onMouseOver : function(oEvent, index, el){
		var i = this.currentIndex, o = this.menus;
		//同一菜单
		if(i == index){
			return;
		}
		if(this.isClick){
			el.className += " click";
			//隐藏前一个菜单
			if(i >= 0){
				o[i].subMenu.hide();
				o[i].element.className = o[i].element.className.replace(/(hover)|(click)/ig, "");
			}
			//显示当前菜单
			o[index].subMenu.show(el, 0);
			this.currentIndex = index;
		}else{
			el.className += " hover";
		}
	},
	onMouseOut : function(oEvent, index, el){
		if( !this.isClick){
			el.className = el.className.replace(/(hover)|(click)/ig, "");
		}
	},
	onClick : function(oEvent, index, el){
		this.isClick = true;
		
		el.className += " click";
		oEvent.stopPropagation();
		
		this.currentIndex = index;
		this.menus[index].subMenu.show(el, 0);
	},
	onDocumentClick : function(){
		var i = this.currentIndex, o = this.menus;
		if(this.isClick && o){
			this.isClick = false;
			o[i].element.className = o[i].element.className.replace(/(hover)|(click)/ig, "");
			o[i].subMenu.hide();
		}
		this.currentIndex = -1;
	},
	dispose : function(){
		var i, evt = DOTA.Event, o = this.menus, e = this.events;
		if(this.subMenu){
			this.subMenu.dispose();
		}
		
		evt.removeEvent(document, "click", this.ondocumentclick);
		for( i = 0; i < e.length; i++ ){
			evt.removeEvent(o[i].element, "mouseover", e[i].onmouseover);
			evt.removeEvent(o[i].element, "mouseout", e[i].onmouseout);
			evt.removeEvent(o[i].element, "click", e[i].onclick);
		}
		
		for( i = 0; i < o.length; i++ ){
			o[i].subMenu && o[i].subMenu.dispose();
			o[i].dispose();
		}
				
		this.menu = this.menus = this.events = null;
		if(this.element){
			this.element.innerHTML = "";
			this.element = null;
		}
	}
};

//子菜单
DOTA.MENU.SubMenu = function(menu, container){
	this.menu = menu || {items : []};
	this.menus = [];
	this.events = [];
	this.element = null;
	this.subMenu = null;
	this.isShow = false;
	this.isSet = false;
	this.currentIndex = -1;
};
DOTA.MENU.SubMenu.prototype = {
	renderTo : function(container){
		var i, s, o = this.menu.items, e, evt = DOTA.Event;
		var e = this.element = document.createElement("div");
		e.className = "DOTA_SubMenu";
		container.appendChild(e);			
		
		for(i = 0; i < o.length; i++){
			s = this.menus[i] = new DOTA.MENU.MenuItem(o[i].text ? o[i].text : o[i], o[i].handle, 1, o[i].checked, o[i].menu);
			s.renderTo(e);
			if( !this.events[i] ){
				this.events[i] = {};
				this.events[i].onmouseover = evt.bindEvent(this, this.onMouseOver, i, s.element);
				this.events[i].onmouseout = evt.bindEvent(this, this.onMouseOut, i, s.element);
				this.events[i].onclick = evt.bindEvent(this, this.onClick, i, s.element);
			}
			if(o[i].text){
				evt.addEvent(s.element, "mouseover", this.events[i].onmouseover);
				evt.addEvent(s.element, "mouseout", this.events[i].onmouseout);
				evt.addEvent(s.element, "click", this.events[i].onclick);
			}
			
			if(o[i].menu){
				s.subMenu = new DOTA.MENU.SubMenu( o[i].menu );
				s.subMenu.renderTo( container );
			}
		}
	},
	onMouseOver : function(oEvent, index, el){
		var i = this.currentIndex, o = this.menus;
		if(i >= 0){
			o[i].element.className = o[i].element.className.replace(/hover/ig, "");
			if(o[i].subMenu){
				o[i].subMenu.hide();
			}
		}
		el.className += " hover";
		if(o[index].subMenu){
			o[index].subMenu.show(el);
		}
		this.currentIndex = index;
	},
	onMouseOut : function(oEvent, index, el){
		//el.parentNode.className = oEvent.target.parentNode.className.replace(/hover/ig, "");
	},
	onClick : function(oEvent, index, el){
		this.menus[index].handle();
		//oEvent.stopPropagation();
	},
	getParent : function(obj){
		while(obj && obj.className != "DOTA_Menu"){
			obj = obj.parentNode;
		}
		return obj;
	},
	show : function(parent, level){
		var x, y, hei, wid, root, pos;
		if( !this.isSet ){
			this.isSet = true;
			root = this.getParent(parent);
			if(level === 0){
				x = parent.offsetLeft, y = parent.offsetTop, hei = parent.offsetHeight;
				this.element.style.left = x + "px";
				this.element.style.top = y + hei + 1 + "px";
			}else{
				pos = DOTA.F.getOffset(parent, this.getParent(parent)), wid = parent.offsetWidth;
				this.element.style.left = pos.x + wid + "px";
				this.element.style.top = pos.y + "px";
			}
		}
		this.element.style.display = "block";
		this.isShow = true;
	},
	hide : function(){
		var i = this.currentIndex, o = this.menus;
		if(i >= 0){
			o[i].element.className = o[i].element.className.replace(/hover/ig, "");
		}
		this.element.style.display = "none";
		
		this.isShow = false;
		
		for(  i= 0; i < o.length; i++ ){
			if( o[i].subMenu && o[i].subMenu.isShow ){
				o[i].subMenu.hide();		
			}
		}
	},
	dispose : function(){
		var i, evt = DOTA.Event, o = this.menus, e = this.events;
		if(this.subMenu){
			this.subMenu.dispose();
		}
		
		for( i = 0; i < e.length; i++ ){
			evt.removeEvent(o[i].element, "mouseover", e[i].onmouseover);
			evt.removeEvent(o[i].element, "mouseout", e[i].onmouseout);
			evt.removeEvent(o[i].element, "click", e[i].onclick);
		}
		
		for( i = 0; i < o.length; i++ ){
			o[i].subMenu && o[i].subMenu.dispose();
			o[i].dispose();
		}
		
		this.menu = this.menus = this.events = null;
		if(this.element){
			this.element.innerHTML = "";
			this.element = null;
		}
	}
};


//菜单
DOTA.MENU.Menu = function(menu){	
	menu = menu || {};
	this.menuID = menu.id || "";
	this.mainMenu = new DOTA.MENU.MainMenu(menu);
};
DOTA.MENU.Menu.prototype = {
	renderTo : function(container){
		var e = this.element = document.createElement("div");
		e.className = "DOTA_Menu";
		e.id = this.menuID;
		
		DOTA.$(container).appendChild(e);
		this.mainMenu.renderTo(e);
	},
	setPosition : function(x, y){
		var el = this.element;
		el.style.left = x + "px";
		el.style.top = y + "px";
	},
	hide : function(){
		this.mainMenu.onDocumentClick();
	},
	dispose : function(){
		this.mainMenu.dispose();
		
		if(this.element){
			this.element.innerHTML = "";
			this.element.parentNode.removeChild(this.element);
			this.element = null;
		}
	}
};