'use strict';
let mongoose = require(`mongoose`),
    secrets = {};
if(process.env.NODE_ENV === 'production'){
  secrets = require(`../config/herokuConfig.js`);
} else {
  secrets = require(`../config/secrets.js`);
}

mongoose.connect(`mongodb://${secrets.mlabs_name}:${secrets.mlabs_pass}@ds055555.mongolab.com:55555/ackportfolio`);
let db = mongoose.connection;
db
  .on(`error`, console.error.bind(console, `connection error...`))
  .once(`open`, () => console.log(`database connection established @ds055555.mongolab.com:55555`))
