define(function() {
    var ref = new Wilddog("https://air.wilddogio.com/web/");
    var data = ref.child("data");



    return {
        set : function(name, score) {
            data.push({
                "name" : name,
                "time" : Date.now(),
                "score" : score
            });
        },
        get : function( fn ) {
            if(!fn || typeof fn!=="function") return ;

            data.on("value", function(snapshot) {
                fn(snapshot.val());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });


        }
    }
});
