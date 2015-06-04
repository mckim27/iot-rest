var express = require('express');
var router = express.Router();
var Thi = require('../models/Thi.js');

/****     THI     ****/
/* GET /thi listing. */
router.get('/', function(req, res, next) {
  Thi.find(function (err, hum) {
    if (err) return next(err);
    res.json(thi);
  });
});

/* POST /thi */
router.post('/', function(req, res, next) {
  Thi.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /thi/id */
router.get('/:id', function(req, res, next) {
  Thi.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

