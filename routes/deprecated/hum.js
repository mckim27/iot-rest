var express = require('express');
var router = express.Router();
var Hum = require('../models/Hum.js');

/****     humidity     ****/
/* GET /hum listing. */
router.get('/', function(req, res, next) {
  Hum.find(function (err, hum) {
    if (err) return next(err);
    res.json(hum);
  });
});

/* POST /hum */
router.post('/', function(req, res, next) {
  Hum.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /hum/id */
router.get('/:id', function(req, res, next) {
  Hum.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

