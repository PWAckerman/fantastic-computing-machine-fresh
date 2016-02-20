'use strict';
let secrets = ''
/* istanbul ignore if  */
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'TRAVIS') {
  secrets = require("../config/herokuConfig.js");
} else {
  secrets = require("../config/secrets.js");
}

let q = require('q'),
    client = require('twilio')(secrets.twilio_test_sid, secrets.twilio_test_token);

function textNotification(req, user){
  let dfd = q.defer()
  client.messages.create({
  	to: "+16105544596",
  	from: "+14849292764",
  	body: `Hey, ${user.name}! This is ${req.body.sender} with ${req.body.company}. Give me a call back at ${req.body.number} or email me at ${req.body.email}!`,
  }, function(err, message) {
     err ? dfd.reject(err) : dfd.resolve(message);
  });
  return dfd.promise
}

module.exports = {
  textNotification: textNotification
}
