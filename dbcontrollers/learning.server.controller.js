'use strict';
let Learning = require('../dbmodels/learning.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");


exports.updateProgress = (req, res)=>{
  var dfd = q.defer();
  Learning.findByIdAndUpdate(req.params.id, {progress: req.body.progress}, {new: true}).then(
    (learning)=>{
      dfd.resolve(learning)
    }
  )
  return dfd.promise;
}
