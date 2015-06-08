var express = require('express');
var router = express.Router();

var date = new Date();
var time = {};
time['ye'] = date.getFullYear();
time['mo'] = date.getMonthAbbr();
time['da'] = date.getDate();
time['yo'] = date.toFormat('DDD');
time['ho'] = date.getHours();
time['mi'] = date.getMinutes();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var date = new Date();
  var time = {};
  time['ye'] = date.getFullYear();
  time['mo'] = date.getMonthAbbr();
  time['da'] = date.getDate();
  time['yo'] = date.toFormat('DDD');
  time['ho'] = date.getHours();
  time['mi'] = date.getMinutes();
  time['se'] = date.getSeconds();
  var resData = JSON.stringify(time);
  console.log(date);
  console.log(resData);
  res.setHeader('Content-Type','application/json');
  res.setHeader('content-length', resData.length);
  res.send(resData);
});

router.get('/date', function(req, res, next) {
  var date = new Date();
  var time = {};
  time['ye'] = date.getFullYear();
  time['mo'] = date.getMonthAbbr();
  time['da'] = date.getDate();
  time['yo'] = date.toFormat('DDD');

  //var data = {ye: time['ye'], mo: time['mo'], da:time['da'], yo:time['yo']};
  var resData = JSON.stringify(time);
  console.log(resData);
  res.setHeader('Content-Type','application/json');
  res.setHeader('content-length', resData.length);
  res.send(resData);
});
router.get('/time', function(req, res, next) {
  var date = new Date();
  var time = {};
  time['ho'] = date.getHours();
  time['mi'] = date.getMinutes();
  time['se'] = date.getSeconds();
  //var data = {ho: time['ho'], mi: time['mi'], se: time['se']};
  var resData = JSON.stringify(time);
  console.log(resData);
  res.setHeader('Content-Type','application/json');
  res.setHeader('content-length', resData.length);
  res.send(resData);
});


module.exports = router;
