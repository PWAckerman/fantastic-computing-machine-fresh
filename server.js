'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'))

    .get('/projects', (req, res)=>{

    })

    .get('/education', (req, res)=>{

    })

    .get('/writings', (req, res)=>{

    })

    .post('/contacts/textmessage', (req, res)=>{

    })

    .listen(port, ()=>{
      console.log('Listening on ' + port)
      console.log(__dirname + '/public')
    })
