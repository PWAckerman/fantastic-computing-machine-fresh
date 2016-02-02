// "use strict";
// let mongoose = require("mongoose");
// // mongoose.Promise = require("q");
//
// module.exports = exports = {}
//
// exports.db = function () {
//   return mongoose.connect(`mongodb://patrick:portstuff1@ds039135.mongolab.com:39135/pushbudget`, function () {
//     console.log('database connected');
//   });
// }

'use strict';
let mongoose = require('mongoose');

mongoose.connect(`mongodb://patrick:portstuff1@ds055555.mongolab.com:55555/ackportfolio`);
let db = mongoose.connection;
db
  .on('error', console.error.bind(console, 'connection error...'))
  .once('open', () => console.log(`database connection established @ds055555.mongolab.com:55555`))
