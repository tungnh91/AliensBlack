var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.set('port', process.env.port || 3000);


app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
	request("http://www.reddit.com/.json", function (error, response, body) {
			if(error) {
				console.log('error from server app.get', error);
			}
			res.send(body);
	});
});




app.listen(3000, function() {
  console.log('listening on port 3000!');
});
