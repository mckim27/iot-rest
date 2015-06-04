var mongoose = require('mongoose');

var ThiSchema = new mongoose.Schema({
  uid : {type: Number, default: 0, index: true},
  thi : {type: Number, default: 0},
  date: {type: Date, default: Date.now, index: true}

});

module.exports = mongoose.model('Thi', ThiSchema);
