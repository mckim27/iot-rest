var mongoose = require('mongoose');

var DiSchema = new mongoose.Schema({
  uid : {type: Number, default: 0, index: true},
  di  : {type: Number, default: 0},
  date: {type: Date, default: Date.now, index: true}

});

module.exports = mongoose.model('Di', DiSchema);
