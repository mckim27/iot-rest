var mongoose = require('mongoose');

var HumSchema = new mongoose.Schema({
  uid : {type: Number, default: 0, index: true},
  hum : {type: Number, default: 0},
  date: {type: Date, default: Date.now, index: true}

});

module.exports = mongoose.model('Hum', HumSchema);
