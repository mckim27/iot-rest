var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Temp = require('../models/Temp.js');

/* GET /temp listing. */
router.get('/', function(req, res, next) {
  Temp.find(function (err, temp) {
    if (err) return next(err);
    res.json(temp);
  });
});

/* POST /temp */
router.post('/', function(req, res, next) {
  console.log(res);
  Temp.create(req.body, function (err, post) {
    console.log(post);
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /temp/id */
router.get('/:id', function(req, res, next) {
  Temp.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /temp/:id */
router.put('/:id', function(req, res, next) {
  Temp.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /temp/:id */
router.delete('/:id', function(req, res, next) {
  Temp.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;

