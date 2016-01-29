'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'))

app.listen(port, ()=>{
  console.log('Listening on ' + port)
  console.log(__dirname + '/public')
})
