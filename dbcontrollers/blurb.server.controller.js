'use strict';
let Blurb = require('../dbmodels/blurb.server.model.js'),
    q = require("q");

exports.getBlurbs = (req, res)=>{
  var dfd = q.defer();
  console.log(req.params.id)
  Blurb.find({user: req.params.id}).exec().then(
    (blurbs)=>{
      dfd.resolve(blurbs)
    }
  )
  return dfd.promise
}
