const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const _ = require('underscore');
const Item = require ('../database-mongo/index.js');

const app = express();

app.set('port', process.env.port || 3000);


app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/items', function (req, res) {
  request("http://www.reddit.com/.json",  (error, response, body) => {
    if(error) {
				console.log('error from server app.get', error);
			}
			res.send(body);
	});
});

app.get('/offline', function (req, res) {
	let data = Item.find({}).sort({created: -1}).exec((err, data) => {
		res.json(data);
	});
});

app.post('/', (req, res) => {
	console.log('we received your click from server!')
	res.send(201);
 	request("http://www.reddit.com/.json",(error, response, body) => {
			if(error) {
				console.log('error from server 2nd request', error);
			}
			else {
				_.each((JSON.parse(body)).data.children, item => {
        let newItem = new Item ({
          id: item.data.id,
          score: item.data.score,
          url: item.data.url,
          title: item.data.title,
          author: item.data.author,
          sub: item.data.subreddit_name_prefixed,
          created: item.data.created_utc
        })
        let isItThere;
        Item.findOne({id :newItem.id}).exec((err, data) => {
					if(err) {
						console.log(err,'error inside server findOne');
					} else {
        		isItThere = (data !== null);
			       if(!isItThere) {
				       newItem.save();   
			       }
						}
        	})		
      	});
			}
	});
})



app.listen(3000, () => {
  console.log('listening on port 3000!');
});
