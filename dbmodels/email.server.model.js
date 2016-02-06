'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let emailSchema = new mongoose.Schema({
  from: String,
  date: {type: Date, default: Date.now},
  subject: String,
  text: String,
  user: {type: String, ref: 'User'},
  to: String
})

emailSchema.plugin(deepPopulate);

module.exports = mongoose.model('Email', emailSchema)
