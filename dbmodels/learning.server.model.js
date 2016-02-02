'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let learningSchema = new mongoose.Schema({
  progress: String,
  skill: {type: String, ref: 'Skill'}
})

learningSchema.plugin(deepPopulate);

module.exports = mongoose.model('Learning', learningSchema)
