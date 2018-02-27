	function playFn() {
	    var obj = document.querySelector(".x-video-button");
	    if(obj&&obj.style&&(obj.style.display == "block")) {
	    	  alert("play");
	        obj.click();
	    }else{
	        setTimeout(function(){
	    	    alert("wait");
	        	playFn()
	        }, 2000);
	    }
	}
	playFn();
