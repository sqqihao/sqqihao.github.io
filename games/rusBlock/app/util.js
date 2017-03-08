define(function() {
    return {
        isMobile : function() {
                return navigator.userAgent.toLowerCase().indexOf("mobile") !== -1 || navigator.userAgent.toLowerCase().indexOf("android") !== -1  || navigator.userAgent.toLowerCase().indexOf("pad") !== -1;
        }
    }
})