var express = require('express');
var router = express.Router();
var Article = require('../models/Article.model');

router.post('/upload', function(req, res) {
  var article = new Article();

  article.title = req.body.title;
  article.content = req.body.content;
  article.image = req.body.file;

  article.save(function(err, doc) {
    if(err) {
      console.log('error saving article');
    } else {
      console.log(doc);
      console.log('Saved to DB ');
      res.status(200)
           .send(doc);
    }
  });
});

router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Test Page"
  });
});

module.exports = router;