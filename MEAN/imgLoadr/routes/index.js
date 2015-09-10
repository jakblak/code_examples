var express = require('express');
var router = express.Router();
var Article = require('../models/Article.model');

router.post('/upload', function(req, res) {
  var article = new Article({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image
  });
// var article = new Article(req.body);
  article.save(function(err, doc) {
    if(err) {
      console.log('error saving article');
    } else {
      res.json(doc);
      console.log('successfully saved article ');
    }
  });
});

// router.post('/upload', function(req, res) {
//     // Get form Values
//     var title = req.body.title;
//     var content = req.body.content;
//     var image = req.body.picFile;

//     // form validation
//     req.checkBody('title', 'Title field is required').notEmpty();
//     req.checkBody('content', 'Body field is required').notEmpty();

//     // Submit to DB
//     Article.save({
//       'title': title,
//       'content': content,
//       'image': image
//     }, function(err, post) {
//       if (err) {
//         res.send('There was an issue submitting the post');
//         console.log('error saving article');
//       } else {
//         res.json(post);
//         console.log('article saved');
//         // res.location('/');
//         // res.redirect('/');
//       }
//     });
//   });

router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Test Page"
  });
});

module.exports = router;