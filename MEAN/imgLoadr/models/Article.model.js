'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {
    type: String,
    required: 'Title cannot be blank'
  },
  content: {
    type: String,
    required: 'Content cannot be blank'
  },
  image: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Article', articleSchema);