var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var _ = require('underscore');
var Item = require ('../database-mongo/index.js');

var app = express();

app.set('port', process.env.port || 3000);


app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
	request("http://www.reddit.com/.json", function (error, response, body) {
			if(error) {
				console.log('error from server app.get', error);
			}
			res.send(body);
	// 		// _each((JSON.parse(body))
	// 		// console.log('this da body', (JSON.parse(body)).data.children, 'AND the type is', Array.isArray((JSON.parse(body)).data.children));


	});

	// console.log('data from get req' , data);
	// res.json(data)
});

app.get('/offline', function (req, res) {
	var data = Item.find({}).exec(function(err, data) {
		console.log(data, 'data inside app get offline');
		// res.redirect(303, '/offline');
		res.json(data);
	});
});

app.post('/', function(req, res) {
	console.log('we received your click from server!')

 	request("http://www.reddit.com/.json", function (error, response, body) {
			if(error) {
				console.log('error from server 2nd request', error);
			}
			else {
				_.each((JSON.parse(body)).data.children, function(item){
        var newItem = new Item ({
          id: item.data.id,
          score: item.data.score,
          url: item.data.url,
          title: item.data.title,
          author: item.data.author,
          sub: item.data.subreddit_name_prefixed
        })
        // console.log('this da item score', item.data.score)
        newItem.save();
   
      	})
			}
	});
})



app.listen(3000, function() {
  console.log('listening on port 3000!');
});
