'use strict';
let Entry = require('../dbmodels/entry.server.model.js'),
    q = require("q");

exports.getEntries = (req, res)=>{
  var dfd = q.defer();
  Entry.find({user: req.params.id}).exec().then(
    (entries)=>{
      dfd.resolve(entries)
    }
  )
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
