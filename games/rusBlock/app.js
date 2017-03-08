var cfg = {
    width:14,
    height:20,
    time : 400
};
requirejs.config({
    baseUrl: 'libs',
    paths: {
        app: '../app'
    }
});

requirejs(["app/controller/mainController","app/view/mobileDOM","app/util"], function(con, mobileDOM, util) {

    if(util.isMobile()) {
        mobileDOM.addDOM();
    };
    con();
});