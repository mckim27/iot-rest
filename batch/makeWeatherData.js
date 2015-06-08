var fs = require('fs');
var async = require('async');

var koWeatherApi = require("../routes/include/koWeatherApi.js");
var si = "서울특별시";
var gu = "광진구";
var dong = "자양3동";

async.waterfall([
  function(callback) {
    koWeatherApi.getKoreanWeather(si, gu, dong,  function(error, topObj, midObj, leafObj, weather) {
      var wData = weather;
      if(wData == "" || wData == undefined || wData == null){
        callback("KMA server is not response", resData);
        return;
      }
      //console.log(wData);
      var resData = JSON.stringify(wData);//.replace(/\[|\]/gi, "");
      //resData = JSON.parse(resData);
      //console.log(resData);
      callback(null, resData);
    });
  },
  function(resData, callback) {
    fs.writeFile('../data/wData.json', resData, function (err) {
      if (err) {
        var errMessage = err.message;
        callback(err.message, resData);
        return;
      }
      console.log('The weather file saved successfully.')
      callback(null, resData);
    });
  }],
  function(err, results) {
    console.log(arguments);
  }
);
