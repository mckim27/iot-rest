var express = require('express');
var router = express.Router();

var Condition = require('../models/Condition.js');

var getThi = function(temp, rh){
  var kelvin = temp + 273;
  var eTs = Math.pow(10,((-2937.4 /kelvin)-4.9283* Math.log(kelvin)/Math.LN10 +23.5471));
  var eTd = eTs * rh /100;
  var h = temp + ((eTd-10)*5/9);

  return h.toFixed(1);
}

var getDi = function(temp, rh){
  var di = (9/5*temp)-(0.55*(1-rh/100)*(9/5*temp-26))+32

  return di.toFixed(1);
}

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
  req.body.thi = getThi(req.body.temp, req.body.hum);
  req.body.di = getDi(req.body.temp, req.body.hum);
  Condition.create(req.body, function (err, post) {
    console.log(post);
    if (err) return next(err);
    //res.json(post);
    res.json("insert ok");
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
