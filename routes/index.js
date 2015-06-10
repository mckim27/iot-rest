var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , name: 'test'});
  console.log("client ip : " + req.ip);
});

module.exports = router;
