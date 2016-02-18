'use strict';
let Entry = require('../dbmodels/entry.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");

exports.getEntries = (req, res)=>{
  var dfd = q.defer();
  redis.get(req.params.id + ":entries", (err, rep)=>{
    /* istanbul ignore else  */
    if (rep !== null){
      dfd.resolve(JSON.parse(rep))
    } else {
      Entry.find({user: req.params.id}).exec().then(
        (entries)=>{
          redis.setex(req.params.id + ":entries", 3600, JSON.stringify(entries))
          dfd.resolve(entries)
        }
      )
    }
  })
  return dfd.promise
}

exports.saveEntry = (req, res)=>{
  var dfd = q.defer();
  let file = new Entry({
    user: req.params.id,
    text: req.body.text
  })
  file.save().then(
    (file)=>{
      dfd.resolve(file)
    })
  return dfd.promise;
}
