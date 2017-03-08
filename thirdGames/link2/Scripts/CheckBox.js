DOTA.CheckBox = function(config){
	this.config = DOTA.Extend({
		contentEl: document.body
	}, config || {});
	
	this.parentEl = DOTA.$(this.config.contentEl);
	this.init();
};
DOTA.CheckBox.prototype = {
	init : function(){
		var labs = this.parentEl.getElementsByTagName("label");
		for(var i = 0; i < labs.length; i++){
			if(/DOTA_CheckBox/i.test(labs[i].className)){
				(function(i){
					labs[i].onclick = function(noSwap){
						var chk = labs[i].getElementsByTagName("input")[0];
						if(chk.checked){
							labs[i].className = "DOTA_CheckBox DOTA_CheckBox_On";
						}else{
							labs[i].className = "DOTA_CheckBox DOTA_CheckBox_Off";
						}
					};
				})(i);
				labs[i].onclick();
			}
			if(/DOTA_Radio/i.test(labs[i].className)){
				(function(i){
					labs[i].onclick = function(){
						if(labs[i].getElementsByTagName("input")[0].checked){
							labs[i].className = "DOTA_Radio DOTA_Radio_On";
							
							for(var j = 0; j < labs.length; j++){
								if(/DOTA_Radio/i.test(labs[j].className) && i !== j 
									&& labs[i].getElementsByTagName("input")[0].name == labs[j].getElementsByTagName("input")[0].name){
									labs[j].className = "DOTA_Radio DOTA_Radio_Off";
								}
							}
						}						
					};					
				})(i);
				labs[i].onclick();
			}
		}
	},
	dispose : function(){
	}
};
