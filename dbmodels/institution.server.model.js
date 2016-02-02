'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let institutionSchema = new mongoose.Schema({
  name: String,
  image: String,
  location: String,
  type: String
})

institutionSchema.plugin(deepPopulate);

module.exports = mongoose.model('Institution', institutionSchema)
