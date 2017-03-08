DOTA.Tab = function(config){
	this.config = DOTA.Extend({
		container: document.body,
		width: 450,
		height: 0,
		scroll: false,
		activeTab: 0,
		contentPadding : 2,
		items: []
	}, config || {});
	
	this.titles = [];
	this.contents = [];
	
	this.init();
};
DOTA.Tab.prototype = {
	init : function(){
		var e = this.element = document.createElement("div");
		var cfg = this.config, evt = DOTA.Event, tmp, frame;
		e.className = "DOTA_Tab";
		e.style.width = cfg.width + "px";
		
		var t = this.title = document.createElement("div");
		t.className = "DOTA_Tab_Title";
		e.appendChild(t);
		
		var c = this.content = document.createElement("div");
		c.className = "DOTA_Tab_Content";
		c.style.padding = cfg.contentPadding + "px";
		c.style.overflow = cfg.scroll ? "scroll" : "";
		e.appendChild(c);
		
		DOTA.$(cfg.container).appendChild(e);
		if( cfg.height ){
			c.style.height = cfg.height - t.offsetHeight + "px";
		}
		
		//items
		for(var i = 0; i < cfg.items.length; i++ ){
			tmp = this.titles[i] = document.createElement("a");
			tmp.innerHTML = cfg.items[i].title || "Tab" + i;
			if(cfg.activeTab == i){
				tmp.className = "click";
			}
			evt.addEvent(tmp, "click", evt.bindEvent(this, this.onClick, i));
			t.appendChild(tmp);
			
			tmp = this.contents[i] = document.createElement("div");
			if(cfg.items[i].url){
				frame = document.createElement("iframe")
				frame.frameBorder = 0;
				frame.style.width = cfg.width - 2 - cfg.contentPadding * 2 + "px";
				if( cfg.height ){
					frame.style.height = cfg.height - t.offsetHeight - 2 + "px";
				}else{
					frame.style.height = (cfg.items[i].height || 100) + "px";
				}
				frame.src = cfg.items[i].url;
				tmp.appendChild(frame);
			}else if(cfg.items[i].contentEl){
				tmp.appendChild(DOTA.$(cfg.items[i].contentEl));
			}else{
				tmp.innerHTML = cfg.items[i].html || "";
			}
			if(cfg.activeTab != i){
				tmp.style.display = "none";
			}
			c.appendChild(tmp);
		}
		
	},
	
	onClick : function(oEvent, i){
		var cfg = this.config;
		if(i === cfg.activeTab){
			return;
		}
		
		this.titles[cfg.activeTab].className = "";
		this.contents[cfg.activeTab].style.display = "none";
		
		cfg.activeTab = i;
		this.titles[i].className = "click";
		this.contents[i].style.display = "";
		
		if(cfg.items[i].activeHandler){
			cfg.items[i].activeHandler();
		}
	},
	
	dispose : function(){
		this.element.innerHTML = "";
		this.config.container.removeChild(this.element);
		this.titles = null;
		this.contents = null;
		this.config = null;
	}
};
