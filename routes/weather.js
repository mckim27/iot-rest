var express = require('express');
var router = express.Router();
var fs = require('fs');

// response 에 대한 parameter 정보 
// http://www.kma.go.kr/images/weather/lifenindustry/dongnaeforecast_rss.pdf

/* 현재 시간대 날씨 예보. */
router.get('/', function(req, res, next) {
  fs.readFile('./data/wData.json',function(err, data){
    //console.log(process.cwd());
    if(err){
      console.log(err);
      return;
    }
    var wData = JSON.parse(data);
    //console.log(wData);
    var resData = JSON.stringify(wData.wid.body[0].data[0]).replace(/\[|\]/gi,"");
    
    console.log(resData);
    res.setHeader('Content-Type','application/json');
    res.setHeader('content-length', resData.length);
    res.send(resData);
  });
});

/* 간단한 요약 정보 */
router.get('/description', function(req, res, next) {
  fs.readFile('./data/wData.json',function(err, data){
    //console.log(process.cwd());
    if(err){
      console.log(err);
      return;
    }
    var wData = JSON.parse(data);
    //console.log(wData);
    var resData = {des: wData.wid.body[0].data[0].wfEn};
    resData = JSON.stringify(resData).replace(/\[|\]/gi,"");
    
    console.log(resData);
    res.setHeader('Content-Type','application/json');
    res.setHeader('content-length', resData.length);
    res.send(resData);
  });
});


module.exports = router;
