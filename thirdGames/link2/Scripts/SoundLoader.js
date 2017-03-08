soundManager.url = 'swf/';
soundManager.debugMode = false; 
soundManager.waitForWindowLoad = true;

DOTA.SoundLoader = function(sounds, onStep, onLoad){
	this.config = sounds.sounds ? sounds : {
		preLoad: true,
		sounds : sounds || [],
		onStep : onStep || function(){},
		onLoad : onLoad || function(){}
	};
	this.sounds = [];
	
	this.soundCount = this.config.sounds.length;
	this.currentLoad = 0;
	
	if(this.config.preLoad){
		this.loadSound();
	}
};
DOTA.SoundLoader.prototype = {
	loadSound : function(){
		var c = this.config, i, sounds = this.sounds, rnd = parseInt(Math.random() * 1000, 10);
		var self = this;
		for( i = 0; i < c.sounds.length; i++ ){
			sounds[i] = soundManager.createSound({
				id: c.sounds[i][1] ? c.sounds[i][1] : 'Name' + rnd + i,
				url: c.sounds[i][0],
				onload: DOTA.Event.bind(this, this.onLoad),
				onfinish: function(){self.onFinish(this.sID);}
			});
			sounds[i].load();
		}
	},
	onLoad : function(){
		this.currentLoad++;
		this.config.onStep(this.currentLoad, this.soundCount);
		
		if( this.currentLoad === this.soundCount ){
			this.config.onLoad(this.currentLoad);
		}
	},
	onFinish : function(index){
		var i = this.findIndex(index);
		if(i >= 0){
			if(this.sounds[i].onfinish){
				this.sounds[i].onfinish();
			}
		}
	},
	findIndex : function(index){
		var s = this.config.sounds;
		if(typeof index === "number"){ // index
			return index;
		}else{ // name
			for( var i = 0; i < s.length; i++ ){
				if( s[i][1] === index ){
					return i;
				}
			}
		}
		return -1;
	},
	play : function(index, onfinish){
		var i = this.findIndex(index), self = this;
		var c = this.config, i, sounds = this.sounds, rnd = parseInt(Math.random() * 1000, 10);
		if(i >= 0){
			if(!this.sounds[i]){
				this.sounds[i] = soundManager.createSound({
					id: c.sounds[i][1] ? c.sounds[i][1] : 'Name' + rnd + i,
					url: c.sounds[i][0],
					onload: function(){ this.play();},
					onfinish: function(){self.onFinish(this.sID);}
				});
				this.sounds[i].load();
			}else{
				this.sounds[i].play();
			}
			this.sounds[i].onfinish = onfinish;
		}
	},
	pause : function(index){
		var i = this.findIndex(index);
		if(i >= 0){
			this.sounds[i].pause();
		}
	},
	stop : function(index){
		var i = this.findIndex(index);
		if(i >= 0){
			this.sounds[i].stop();
		}
	},
	dispose : function(){
		var i, sounds = this.sounds;
		for( i = 0; i < sounds.length; i++ ){
			if(sounds[i]){
				sounds[i].stop();
				sounds[i] = null;
			}
		}
		sounds.length = 0;
		this.config = null;
	}
};
