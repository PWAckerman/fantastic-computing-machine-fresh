'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    userCtrl = require('./dbcontrollers/user.server.controller.js'),
    User = require('./dbmodels/user.server.model.js'),
    Project = require('./dbmodels/project.server.model.js'),
    Skill = require('./dbmodels/skill.server.model.js'),
    Learning = require('./dbmodels/learning.server.model.js'),
    Education = require('./dbmodels/education.server.model.js'),
    Institution = require('./dbmodels/institution.server.model.js'),
    Platform = require('./dbmodels/platform.server.model.js'),
    port = process.env.PORT || 8080;

  app
    .use(express.static(__dirname + '/public'), bodyParser.json(), cors())

    .get('/api/user/:id', (req, res)=>{
      return userCtrl.getUser(req, res).then((result)=>{
        console.log('Promise resolved!');
        res.json(result)
      }).catch((err)=>{
        res.status(404).end()
      });
    })

    .get('/api/projects', (req, res)=>{

    })

    .get('/api/education', (req, res)=>{

    })

    .get('/api/writings', (req, res)=>{

    })

    .post('/api/contacts/textmessage', (req, res)=>{

    })

    .listen(port, ()=>{
      console.log('Listening on ' + port)
      console.log(__dirname + '/public')
    })

require('./config/mongoose.js')
