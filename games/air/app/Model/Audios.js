define(function() {

    try{
        window.fireEffect = new GT.Sound({
            id: "sfx-"+Math.random(),
            src: "./app/audio/fireEffect.mp3",
            loop: false,
            volume: 1,
            tag: "sfx"+Math.random(),
            channel: 2
        });
        fireEffect.load();


        window.explodeEffect = new GT.Sound({
            id: "explodeEffect-2",
            src: "./app/audio/explodeEffect.mp3",
            loop: false,
            volume: 1,
            tag: "explodeEffect",
            channel: 2
        });
        explodeEffect.load();


        window.diamonAudio = new GT.Sound({
            id: "Diamon-2",
            src: "./app/audio/Diamon.mp3",
            loop: false,
            volume: 1,
            tag: "Diamon",
            channel: 2
        });
        diamonAudio.load();


        window.shipDestroyEffect = new GT.Sound({
            id: "sfx-2",
            src: "./app/audio/shipDestroyEffect.mp3",
            loop: false,
            volume: 1,
            tag: "sfx",
            channel: 2
        });
        shipDestroyEffect.load();


        var sound = new GT.Sound({
            id: "sfx-1",
            src: "./app/audio/music.mp4",
            loop: true,
            volume: 1,
            tag: "sfx",
            channel: 2
        });
        sound.load();
        sound.onLoad = function(){
            this.play();
        };
    }catch(e){

    }
});