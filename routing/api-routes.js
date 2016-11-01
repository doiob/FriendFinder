 

var friends 		= require('../app/friends.js');


 
module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	app.post('/api/friends', function(req, res){

	 
		var bestMatch = {
			name: "",
			photo: "",
			diff: 999
		};

		
		var userData 	= req.body;
		var name 	= userData.name;
		var photo 	= userData.photo;
		var scores 	= userData.scores;

		// This variable will calculate the difference between the user's scores and the scores of
		// each user in the database
		var diff = 0;


		for  (var i=0; i< friends.length; i++) {

			diff = 0;
			for (var j=0; j< friends[i].scores[j]; j++){

				// We calculate the difference between the scores and sum them into the totalDifference
				diff += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));

				// If the sum of differences is less then the differences of the current "best match"
				if ( diff <= bestMatch.diff){

					// Reset the bestMatch to be the new friend. 
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.diff = diff;
				}
			}
		}
		friends.push(userData);
		res.json(bestMatch);

	});

}