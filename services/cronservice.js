'use strict';
let request = require('request'),
    q = require('q'),
    cheerio = require('cheerio'),
    userCtrl = require('../dbcontrollers/user.server.controller.js')

let scrapeJob = function(){
  let dfd = q.defer()
  console.log('job started')
  let meep = {}
  meep.params = {}
  meep.params.id = '56af7da8d4c6d6ab9227851e'
  userCtrl.findUser(meep)
    .then(
      (user)=>{
        return scrapeGitHub(user)
      }
    ).then(
      (user)=>{
        return scrapeStackOverflow(user)
      }
    ).then(
      (user)=>{
        dfd.resolve(user)
      }
    )
    .catch(
      (err)=>{
        dfd.reject(err)
      }
    )
  return dfd.promise;
}

function scrapeGitHub(user){
  let dfd = q.defer()
  const url = 'https://github.com/' + user.githubname;
  request(url, (err, response, html)=>{
    let meep = {}
    meep.params = {'id': user._id}
    meep.body = {};
    if(!err){
      let $ = cheerio.load(html)
      let x = $('.contrib-number').text()
      meep.body = {"commits": x.split(' ')[0]}
      dfd.resolve(userCtrl.updateUser(meep))
    }
  })
  return dfd.promise
}

function scrapeStackOverflow(user){
  let dfd = q.defer()
  let meep = {}
  meep.params = {'id': user._id}
  meep.body = {};
  const url = `http://stackoverflow.com/users/${user.stackurl}?tab=reputation`
  request(url, (err, response, html)=>{
    if(!err){
      let $ = cheerio.load(html)
      let x = $('#user-tab-reputation').children().first().children().first().text().split(' ')[4];
      let z = $('.badges').html().split('title=\"').slice(1).map(function(text){
        return parseInt(text.split(' ')[0])
      }).reduce(function(a, b){
        return a + b
      })
      meep.body = {stack: {score: x , badges: z}}
      dfd.resolve(userCtrl.updateUser(meep))
    }
  })
  return dfd.promise
}

module.exports = scrapeJob
