'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let platformSchema = new mongoose.Schema({
  platform: String,
  icon: String
})

platformSchema.plugin(deepPopulate);

module.exports = mongoose.model('Platform', platformSchema)
