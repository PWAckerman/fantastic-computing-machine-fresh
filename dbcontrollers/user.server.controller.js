'use strict';
let User = require('../dbmodels/user.server.model.js'),
    Learning = require('../dbmodels/learning.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");


exports.getUser = (req, res) => {
  let dfd = q.defer()
  redis.get(req.params.id, (err, rep)=>{
    /* istanbul ignore else  */
    if(rep !== null){
      dfd.resolve(JSON.parse(rep))
    } else {
      User.findById(req.params.id).deepPopulate(['projects', 'projects.technologies', 'projects.platforms', 'learnings', 'learnings.skill', 'skills', 'education', 'education.institution']).exec().then(
        (result) => {
          redis.setex(result._id, 1, JSON.stringify(result))
          dfd.resolve(result);
        }
      )
    }
  })
  return dfd.promise;
}

exports.upgradeLearningToSkill = (req, res)=>{
  let dfd = q.defer();
  User.findByIdAndUpdate(req.params.id, {
    $addToSet: {
      "skills" : req.body.skillId
    },
    $pull: {
      "learnings" : req.body.learningId
    }
  }, {new: true}
  ).exec().then(
    (newUser)=>{
      dfd.resolve(newUser)
    }
  )
  return dfd.promise;
}

exports.addLearning = (req, res)=>{
  let dfd = q.defer();
  let learning = new Learning({
    progress: 0,
    skill: req.body.skill
  })
  learning.save().then(
    (learning)=>{
      User.findByIdAndUpdate(req.params.id, {
        $addToSet: {
          "learnings" : learning._id
        }
      }, {new: true}).then(
        (user)=>{
          dfd.resolve(user)
        }
      )
    }
  )
  return dfd.promise;
}

exports.removeLearningFromUser = (req, res)=>{
  let dfd = q.defer()
  console.log(req.body.learning);
  console.log(req.params.id);
  User.findByIdAndUpdate(req.params.id, {
    $pull: {
      learnings : req.body.learning
    }}, {new: true}).then(
      (user)=>{
        console.log(user);
        dfd.resolve(user);
      }
    )
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
  let dfd = q.defer()
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec().then(
    (user) => {
      dfd.resolve(user)
    }
  )
  return dfd.promise;
}
