'use strict';
let User = require('../dbmodels/user.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");


exports.getUser = (req, res) => {
  var dfd = q.defer()
  redis.get(req.params.id, (err, rep)=>{
    /* istanbul ignore else  */
    if(rep !== null){
      dfd.resolve(JSON.parse(rep))
    } else {
      User.findById(req.params.id).deepPopulate(['projects', 'projects.technologies', 'projects.platforms', 'learnings', 'learnings.skill', 'skills', 'education', 'education.institution']).exec().then(
        (result) => {
          redis.setex(result._id, 3600, JSON.stringify(result))
          dfd.resolve(result);
        }
      )
    }
  })
  return dfd.promise;
}

exports.findUser = (req, res) => {
  var dfd = q.defer()
  redis.get(req.params.id + 'clean', (err, rep)=>{
    /* istanbul ignore else  */
    if(rep !== null){
      dfd.resolve(JSON.parse(rep))
    } else {
      User.findById(req.params.id).exec().then(
        (result) => {
          redis.set(result._id + 'clean', JSON.stringify(result))
          dfd.resolve(result)
        })
    }
  })
  return dfd.promise;
}

exports.updateUser = (req, res) => {
  var dfd = q.defer()
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec().then(
    (user) => {
      dfd.resolve(user)
    }
  )
  return dfd.promise;
}
