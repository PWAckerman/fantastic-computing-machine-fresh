'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let entrySchema = new mongoose.Schema({
  user: {type: String, ref: 'User'},
  date: {type: Date, default: Date.now},
  text: String
})

entrySchema.plugin(deepPopulate);

module.exports = mongoose.model('Entry', entrySchema)
