'use strict';
let Skill = require('../dbmodels/skill.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");

exports.getAllSkills = (req, res)=>{
  var dfd = q.defer();
  redis.get("skills:all", (err, rep)=>{
    /* istanbul ignore else  */
    if (rep !== null){
      dfd.resolve(JSON.parse(rep))
    } else {
      Skill.find().exec().then(
        (entries)=>{
          redis.setex("skills:all", 1, JSON.stringify(entries))
          dfd.resolve(entries)
        }
      )
    }
  })
  return dfd.promise
}

exports.saveSkill = (req, res)=>{
  var dfd = q.defer();
  console.log(req.body)
  let file = new Skill({
    name: req.body.name,
    type: req.body.type,
    icon: req.body.icon
  })
  file.save().then(
    (file)=>{
      console.log(file)
      dfd.resolve(file)
    })
  return dfd.promise;
}
