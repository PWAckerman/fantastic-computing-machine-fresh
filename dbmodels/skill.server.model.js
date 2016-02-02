'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let skillSchema = new mongoose.Schema({
  name: String,
  icon: String,
  type: String
})

skillSchema.plugin(deepPopulate);

module.exports = mongoose.model('Skill', skillSchema)
