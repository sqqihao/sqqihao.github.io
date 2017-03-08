DOTA.ImageLoader = function(images, onStep, onLoad){
	this.config = images.images ? images : {
		images : images || [],
		onStep : onStep || function(){},
		onLoad : onLoad || function(){}
	};
	this.imgs = [];
	
	this.imgCount = this.config.images.length;
	this.currentLoad = 0;
	this.timerID = 0;
	
	this.loadImg();
};
DOTA.ImageLoader.prototype = {
	loadImg : function(){
		var c = this.config, i, imgs = this.imgs, self = this;
		for( i = 0; i < c.images.length; i++ ){
			imgs.push(new Image());
			imgs[i].onload = DOTA.Event.bind(this, this.onLoad);
			imgs[i].src = c.images[i];
			this.timerID = (function(i){
				return setTimeout(function(){
					if(i == self.currentLoad){
						imgs[i].src = c.images[i];
					}
				}, 500);
			})(i);
		}
	},
	onLoad : function(i){
		clearTimeout(this.timerID);
		this.currentLoad++;
		this.config.onStep(this.currentLoad, this.imgCount);
		
		if( this.currentLoad === this.imgCount ){
			this.config.onLoad(this.currentLoad);
			this.dispose();
		}
	},
	dispose : function(){
		var i, imgs = this.imgs;
		for( i = 0; i < imgs.length; i++ ){
			imgs[i].onload = null;
			imgs[i] = null;
		}
		imgs.length = 0;
		this.config = null;
	}
};
