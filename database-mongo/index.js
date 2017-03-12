var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
mongoose.connect('mongodb://localhost/test');
var app = express();
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  id: String,
  score: String,
  url: String,
  title: String,
  author: String,
  sub: String

});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};



module.exports = Item;

app.get('/items', function (req, res) {
  request("http://www.reddit.com/.json", function (error, response, body) {
      if(error) {
        console.log('error from DB GET', error);
      }
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
        db.collection.save(newItem);
        
      })

  });
});
