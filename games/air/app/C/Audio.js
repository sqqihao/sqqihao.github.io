define(function () {

    function Audio() {
        this.el = document.createElement("audio");
    };

    Audio.prototype.playmp3 = function( url ) {
        this.el.src = url;
        this.el.autoplay = true;
        this.el.loop = true;
    };

    Audio.prototype.pause = function() {
        this.el.pause&&this.el.pause();
    };

    return Audio;
});