'use strict';
let Project = require('../dbmodels/project.server.model.js'),
    User = require('../dbmodels/user.server.model.js'),
    redis = require('../config/redis.js'),
    q = require("q");


exports.saveProject = (req, res)=>{
  let dfd = q.defer();
  let project = new Project({
    title: req.body.title,
    platforms: req.body.platforms,
    description: req.body.description,
    screenshot: req.body.screenshot,
    technologies: req.body.technologies
  })
  console.log(project);
  project.save().then(
    (project)=>{
      User.findByIdAndUpdate(req.params.id, {
        $push: {
          projects: project._id
        }
      }).exec().then(
        (user)=>{
          return dfd.resolve(user);
        }
      )
    }
  )
  return dfd.promise;
}
