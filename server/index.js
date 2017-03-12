var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var _ = require('underscore');
var Item = require ('../database-mongo/index.js');
var $ = require('jquery');
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
			// _each((JSON.parse(body))
			// console.log('this da body', (JSON.parse(body)).data.children, 'AND the type is', Array.isArray((JSON.parse(body)).data.children));


	});
});

app.post('/', function(req, res) {
	console.log('we received your click from server!')
	$.ajax({
		type: 'GET',
		success: () => {
			res.status(200);
		},

		error: (err) => {
			console.log('err from inside POST server', err);
		}

	});
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
