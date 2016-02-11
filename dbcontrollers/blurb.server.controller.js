'use strict';
let Blurb = require('../dbmodels/blurb.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");

exports.getBlurbs = (req, res)=>{
  var dfd = q.defer();
  redis.get(req.params.id + ":blurbs", (err, rep)=>{
    if(rep !== null){
      dfd.resolve(JSON.parse(rep))
    } else {
      Blurb.find({user: req.params.id}).exec().then(
        (blurbs)=>{
          redis.set(req.params.id + ":blurbs", JSON.stringify(blurbs))
          dfd.resolve(blurbs)
        }
      )
    }
  })
  return dfd.promise
}
