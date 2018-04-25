var friendData = require("../data/friends.json");

//ROUTING

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {
        var userData = req.body;
        arrayDiff();
    })
}

function arrayDIff(friend1, friend2) {
    var diff = [];

    for (var i=0; i<friendData.length; i++) {
        
        for (var j=0; j<friendData.scores.length; j++) {
        var totalDiff =+ Math.abs(friendData[i].scores[j] - friendData[i].scores[j]);
        }
        console.log('totalDiff ='+totalDiff)
        diff.push(totalDiff);
        console.log(diff)
    }
}