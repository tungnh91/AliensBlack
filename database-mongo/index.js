const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');
const app = express();
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  id: String,
  score: String,
  url: String,
  title: String,
  author: String,
  sub: String,
  created: Number 
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = (callback) => {
  Item.find({},(err, items) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};



module.exports = Item;


