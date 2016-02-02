'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let projectSchema = new mongoose.Schema({
  title: String,
  platforms: [{type: String, ref: 'Platform'}],
  description: String,
  screenshot: String,
  technologies: [{type: String, ref: 'Skill'}]
})

projectSchema.plugin(deepPopulate);

module.exports = mongoose.model('Project', projectSchema)
