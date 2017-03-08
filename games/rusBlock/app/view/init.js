define(function() {
    var tpl = Handlebars.compile( $("#tpl-td").html() )
    return tpl;
});