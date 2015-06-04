var express = require('express');
var router = express.Router();

var Condition = require('../models/Condition.js');

/****      temperature     ****/
/* GET / listing. */
router.get('/', function(req, res, next) {
  //Condition.find().limit(10).where('uid',1).sort('-date').exec(function (err, condition) {
  Condition.find().limit(10).exec(function (err, condition) {
    
    var nDate1 = new Date(condition[0].date);//.toFormat('YYYY MMM D DDD HH:MI');
    console.log(nDate1);
    var nDate2 = new Date(condition[5].date);//.toFormat('YYYY MMM D DDD HH:MI');
    console.log(nDate2);
    var nDate3 = new Date(condition[3].date);//.toFormat('YYYY MMM D DDD HH:MI');
    console.log(nDate3.addDays(-7));
    
    if (err) return next(err);
    res.json(condition);
  });
});

/* POST / */
router.post('/', function(req, res, next) {
  Condition.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /id */
router.get('/:id', function(req, res, next) {
  Condition.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



    
module.exports = router;
