var express = require('express');
var router = express.Router();
var koWeatherApi = require("./include/koWeatherApi.js");
var si = "서울특별시";
var gu = "광진구";
var dong = "자양3동";


// response 에 대한 parameter 정보 
// http://www.kma.go.kr/images/weather/lifenindustry/dongnaeforecast_rss.pdf

/* 현재 시간대 날씨 예보. */
router.get('/', function(req, res, next) {
  koWeatherApi.getKoreanWeather(si, gu, dong,  function(error, topObj, midObj, leafObj, weather) {
    var wData = weather;
    var resData = JSON.stringify(wData).replace(/\[|\]/gi, "");
    console.log(resData);
    res.setHeader('Content-Type','application/json');
    res.setHeader('content-length', resData.length);
    res.send(resData);
  });
});

/* 간단한 요약 정보 */
router.get('/description', function(req, res, next) {
  koWeatherApi.getKoreanWeather(si, gu, dong,  function(error, topObj, midObj, leafObj, weather) {
    var wData = {des: weather.wfEn};
    var resData = JSON.stringify(wData).replace(/\[|\]/gi, "");
    console.log(resData);
    res.setHeader('Content-Type','application/json');
    res.setHeader('content-length', resData.length);
    res.send(resData);
  });
});


module.exports = router;
