'use strict';
let User = require('../dbmodels/user.server.model.js'),
    q = require("q");


exports.getUser = (req, res) => {
  var dfd = q.defer()
  User.findById(req.params.id).deepPopulate(['projects', 'projects.technologies', 'projects.platforms', 'learnings', 'learnings.skill', 'skills', 'education', 'education.institution']).exec().then(
    (result) => {
      dfd.resolve(result);
    }
  )
  return dfd.promise;
}

exports.findUser = (req, res) => {
  var dfd = q.defer()
  console.log(req.params.id)
  User.findById(req.params.id).exec().then(
    (result) => {
      dfd.resolve(result)
    }
  )
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
