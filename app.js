var express = require('express');
var Twitter = require('twitter');
var request = require("request");

var app = express();


app.use(express.static('public'));


// landing page
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});



// return twitter ids matching the serch query
app.get('/tweets/search/:str', function(req, res) {
	var client = new Twitter({
		consumer_key: 'mviA3nLoMwAXKZy93JLsgF1uB',
		consumer_secret: '33zwztbltnmRvOmZgxaGJGlX36lXvMah3HMA0rkLp0dYla4gnb',
		access_token_key: '97811766-XCI7ILJoAhMelxO3lJofCYcdrriUDI6voN4r48lOh',
		access_token_secret: 'Uc3KDBtIY137l0NrFF8iWGnp1caLBq4kq5AZnbCkWyeAc'
	});

	var searchphrase = req.params.str;

	client.get('search/tweets', {q: searchphrase}, function(error, tweets, response) {
		if(error) {
			res.send('error encountered');
		} else {

			status_list = tweets["statuses"];

			tweedID_list = [];
			result = [];

			for(var i = 0; i < status_list.length; i++) {
				tweetID = status_list[i]['id'];
				tweedID_list.push(tweetID);

			}

			for(var i = 0; i < tweedID_list.length; i++) {
				var tweet = getTweetEmbedHTML(tweedID_list[i], function(resp) {
					console.log(response);
					result.push(response);
					console.log(result.length);
				});
				//result.push(tweet);
				//console.log(tweet);

			}

			res.send(tweedID_list);
		}
	});
});


// return user id from username provided
app.get('/twitter/user/:username', function(req, res) {
	var username = req.params.username;

	var client = new Twitter({
		consumer_key: 'mviA3nLoMwAXKZy93JLsgF1uB',
		consumer_secret: '33zwztbltnmRvOmZgxaGJGlX36lXvMah3HMA0rkLp0dYla4gnb',
		access_token_key: '97811766-XCI7ILJoAhMelxO3lJofCYcdrriUDI6voN4r48lOh',
		access_token_secret: 'Uc3KDBtIY137l0NrFF8iWGnp1caLBq4kq5AZnbCkWyeAc'
	});

	var params = {screen_name: username};

	client.get('1.1/users/show.json', params, function(error, response, body) {
		if(error) {
			res.send('error encountered');
		} else {
			res.send(response)
		}

	});
});

// start server and listen at port 8085
var server = app.listen(8085, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port)

});