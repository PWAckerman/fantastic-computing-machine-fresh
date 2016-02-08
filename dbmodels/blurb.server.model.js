'use strict';
let mongoose = require('mongoose'),
    deepPopulate = require('mongoose-deep-populate')(mongoose);

let blurbSchema = new mongoose.Schema({
  user: {type: String, ref: 'User'},
  blurb: String
})

blurbSchema.plugin(deepPopulate);

module.exports = mongoose.model('Blurb', blurbSchema)
