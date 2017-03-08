define(function( ) {

    return function (name) {
        var reg = new RegExp("[\\?&]?" + name + "=([^&]+)(&?)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return decodeURIComponent(r[1]);
        return null;
    };


})