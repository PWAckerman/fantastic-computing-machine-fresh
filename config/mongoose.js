'use strict';
let mongoose = require(`mongoose`),
    secrets = {};

/* istanbul ignore if  */
if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'TRAVIS'){
  secrets = require(`../config/herokuConfig.js`);
} else if (process.env.NODE_ENV === 'TEST'){
  secrets = require('../config/testConfig.js')
  /* istanbul ignore next  */
} else {
  secrets = require(`../config/secrets.js`);
}

let test_append = secrets.test_append || '';

let mongoUrl = process.env.MONGO_URL || `mongodb://${secrets.mlabs_name}:${secrets.mlabs_pass}@ds0${secrets.mongoport}.mongolab.com:${secrets.mongoport}/ackportfolio${test_append}`
mongoose.connect(mongoUrl);
let db = mongoose.connection;
db
  .on(`error`, console.error.bind(console, `connection error...`))
  .once(`open`, () => console.log(`database connection established with ${mongoUrl}`))


module.exports = db;
