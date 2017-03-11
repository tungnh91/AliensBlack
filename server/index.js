var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
	request("http://www.reddit.com/.json", function (error, response, body) {
			res.send(body);
	});
});




app.listen(3000, function() {
  console.log('listening on port 3000!');
});
