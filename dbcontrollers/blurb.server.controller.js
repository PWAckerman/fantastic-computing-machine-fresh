'use strict';
let Blurb = require('../dbmodels/blurb.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");

exports.getBlurbs = (req, res)=>{
  var dfd = q.defer();
  redis.get(req.params.id + ":blurbs", (err, rep)=>{
    if(rep !== null){
      console.log(rep)
      dfd.resolve(JSON.parse(rep))
    } else {
      Blurb.find({user: req.params.id}).exec().then(
        (blurbs)=>{
          console.log(blurbs)
          redis.setex(req.params.id + ":blurbs", 3600, JSON.stringify(blurbs))
          dfd.resolve(blurbs)
        }
      )
    }
  })
  return dfd.promise
}
