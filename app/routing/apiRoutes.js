var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req,res) {
        res.json(friendsArray);
    }
    );
}

app.post("/api/friends", function (req, res) {
    // console.log(req.body.match);

    // Display user details (name, photo, match)
    var bestMatch = {
      matchName: "",
      matchPicture: "",
      matchDifference: 2000
    }
    var user = req.body;
    var newUserScore = userInput.scores;
    var totalDifference

    // parseInt for match
    for (var i = 0; i < friendsArray.length; i++) {
        totalDifference = 0

        for(var j = 0; j <newUserScore.length; j++) {

          totalDifference += Math.abs(parseInt(newUserScore[j]) - parseInt(friendsArray[i].scores[j]));

          if(totalDifference <= bestMatch.matchDifference) {

            bestMatch.matchName = friendsArray[i].matchName;
            bestMatch.matchPicture = friendsArray[i].photo;

          }




        }
    }
    
    friendsArray.push(user);
    res.json(bestMatch);
  });
  //   // var bestFriendIndex = 0;
  //   // var minimumDifference = 40;

  //   for(var j = 0; j < friendsArray.length; j++) {
  //     var totalDifference = 0;
  //     for(var j = 0; j < friendsArray[i].match.length; j++) {
  //       var difference = Math.abs(user.match[j] - friendsArray[i].match[j]);
  //       totalDifference += difference;
  //     }

  //     if(totalDifference < minimumDifference) {
  //       bestFriendIndex = i;
  //       minimumDifference = totalDifference;
  //     }
  //   }

  //   // Push user to friendsArray array
  //   friendsArray.push(user);

  //   // send back to browser the best friend match
  //   res.json(friendsArray[bestFriendIndex]);
  // });
