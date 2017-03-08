define(function() {
    var mobileDOMString = '\
    <div class="navbar-fixed-bottom height20percent operate-bar"  >\
        <div class="container height100percent">\
            <div class="row text-center height100percent">\
                <div class="height40percent arrow-up">\
                    <span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>\
                </div>\
                <div  class="height30percent">\
                    <div class="col-xs-6 arrow-left">\
                        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>\
                    </div>\
                    <div class="col-xs-6 arrow-right">\
                        <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>\
                    </div>\
                </div>\
                <div  class="height30percent arrow-down">\
                    <span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>\
                </div>\
            </div>\
        </div>\
    </div>\
    ';
    return {
        addDOM : function() {
            $("body").append( mobileDOMString );
        }
    }
})