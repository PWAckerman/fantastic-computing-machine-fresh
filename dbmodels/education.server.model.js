'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let educationSchema = new mongoose.Schema({
  attended: String,
  institution: {type: String, ref: 'Institution'},
  description: String,
  degree: String
})

educationSchema.plugin(deepPopulate);

module.exports = mongoose.model('Education', educationSchema)
