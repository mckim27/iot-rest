var express = require('express');
var router = express.Router();
var Di = require('../models/Di.js');

/****     Disconfort index     ****/
/* GET /di listing. */
router.get('/', function(req, res, next) {
  Di.find(function (err, hum) {
    if (err) return next(err);
    res.json(di);
  });
});

/* POST /di */
router.post('/', function(req, res, next) {
  Di.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /di/id */
router.get('/:id', function(req, res, next) {
  Di.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

