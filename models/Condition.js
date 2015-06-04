var mongoose = require('mongoose');

var ConditionSchema = new mongoose.Schema({
  uid : {type: Number, default: 0, index: true},
  name: {type: String},
  temp: {type: Number, default: 0},
  hum : {type: Number, default: 0},
  thi : {type: Number, default: 0},
  di  : {type: Number, default: 0},
  pm  : {type: Number},
  date: {type: Date, default: Date.now, index: true}

});

module.exports = mongoose.model('Condition', ConditionSchema);
