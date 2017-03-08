define(["app/view/score"] , function(viewScore){
    var score = 0;
    return {
        addScore : function() {
            score++;
            viewScore(score);
        },
        getScore : function() {
            return score;
        }
    }
})