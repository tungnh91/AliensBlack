var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
	// console.log('this is req =========================><');
  
	request("http://www.reddit.com/.json", function (error, response, body) {
			// console.log('=======================================================================================', typeof body,'<><><><><>', (JSON.parse(body)).data.children);
			res.send(body);
		  // res.json({ok:true});
	});
});


// app.get('*', function(req, res) {
//   res.send('../react-client/dist/index.html')
// })


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
