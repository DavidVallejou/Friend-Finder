var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req,res) {
        res.json(friendsArray);
    } );

app.post("/api/friends", function (req, res) {
    // console.log(req.body.match);

    // Display user details (name, photo, match)
    var bestMatch = {
      matchName: "",
      matchPicture: "",
      matchDifference: 1000
    }
    var user = req.body;
    var newUserScore = user.scores;
    var totalDifference = 0;

    // parseInt for match
    for (var i = 0; i < friendsArray.length; i++) {
        totalDifference = 0

        for(var j = 0; j <newUserScore.length; j++) {

          totalDifference += Math.abs(parseInt(newUserScore[j]) - parseInt(friendsArray[i].score[j]));

          if(totalDifference <= bestMatch.matchDifference) {

            bestMatch.matchName = friendsArray[i].name;
            bestMatch.matchPicture = friendsArray[i].photo;

          }




        }
    }
    
    friendsArray.push(user);
    res.json(bestMatch);
  });
}