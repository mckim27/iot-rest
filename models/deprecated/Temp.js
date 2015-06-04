var mongoose = require('mongoose');

var TempSchema = new mongoose.Schema({
  uid : {type: Number, default: 0, index: true},
  temp: {type: Number, default: 0},
  date: {type: Date, default: Date.now, index: true}

});

module.exports = mongoose.model('Temp', TempSchema);
