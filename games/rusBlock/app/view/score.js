define(function() {
    return function(val) {
        $("#score").html( val );
        $('#score').removeClass().addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    };
})