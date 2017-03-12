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


