var friendsData = require("../data/friends.js");

// routing

module.exports = function (app) {
    
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        let newCharacter = req.body;
        let newCharacterScores = [];

        // parse new character score into integers
        for (i = 0; i < newCharacter.answers.length; i++) {
            let num = parseInt(newCharacter.answers[i]);
            newCharacterScores.push(num);
        }
        
        // Set to a large number so first comparison is always a match
        let bestMatchDiff = 100;
        let match;
        let matchCurrent;

        friendsData.forEach((element, i) => {
            // parseint current characters answers to compare with user
            matchCurrent = element.answers.map(x => parseInt(x));

            // find difference and reduce into one sum
            let currentDiff = matchCurrent.map( (x, i) => Math.abs(x - newCharacterScores[i]) ).reduce( (accumulator, currentValue) => accumulator + currentValue );

            // if current difference is smaller then overwrite previous best match
            if (currentDiff < bestMatchDiff) {
                match = friendsData[i];
                bestMatchDiff = currentDiff;
            }
        });
        friendsData.push(req.body);
        res.json(match);
    });
}