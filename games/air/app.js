requirejs.config({
    baseUrl: 'libs',
    paths: {
        app: '../app'
    }
});

requirejs(["app/main"],function() {
    //alert(1)
    console.log("start");
    window.oncontextmenu = function () {
        return false;
    };
});