'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let userSchema = new mongoose.Schema({
  name: String,
  projects: [{type: String, ref: 'Project'}],
  education: [{type: String, ref: 'Education'}],
  skills: [{type: String, ref: 'Skill'}],
  learnings: [{type: String, ref: 'Learning'}],
  commits: Number,
  stack: {
    score: Number,
    badges: Number
  },
  githubname: String,
  stackurl: String,
  linkedinurl: String,
  githuburl: String,
  email: String
})

userSchema.plugin(deepPopulate);

module.exports = mongoose.model('User', userSchema)
