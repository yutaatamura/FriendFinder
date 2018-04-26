

var friendData = require("../data/friends.json");

//ROUTING

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {
        var userData = req.body;
        var sumDiff = 0;
        var scoresDiff = [];
        var totalDiff = [];

        var match = {
            name: '',
            photo: '',
            difference: 100
        }

    for (var i=0; i<friendData.length; i++) {
        
        for (var j=0; j<friendData[i].scores.length; j++) {
        var diff = Math.abs(parseInt(userData.score[j]) - parseInt(friendData[i].scores[j]));
        scoresDiff.push(diff);
            if (scoresDiff.length === friendData[i].scores.length) {
                sumDiff = scoresDiff.reduce(sum, 0);
                
                function sum(a, b) {
                        return a+b;
                    } 
                
                totalDiff.push(sumDiff);
                if (sumDiff < match.difference) {
                    match.name = friendData[i].name;
                    match.photo = friendData[i].photo;
                    match.difference = sumDiff;
                    
                }
                scoresDiff = [];
                sumDiff = 0;
                
                 
                }
            
            
            }
        
        console.log('totalDiff ='+totalDiff)
        console.log(`Your best match is...${match.name} 
    Object: ${JSON.stringify(match)}`)
    }
    res.json(match)
    // friendData.push(userData);
})
}