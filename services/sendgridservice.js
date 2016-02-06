'use strict';
let secrets = ''
if (process.env.NODE_ENV === 'production') {
  secrets = require("../config/herokuConfig.js");
} else {
  secrets = require("../config/secrets.js");
}
let sendgrid = require('sendgrid')(secrets.sendgrid_key),
    q = require('q')

function sendEmail(req, user){
    let dfd = q.defer();
    let email = new sendgrid.Email({
      to: user.email,
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.text
    })
    sendgrid.send(email, (err, json)=>{
      console.log(json)
      err ? dfd.reject(err) : dfd.resolve(json);
    })
    return dfd.promise
  }

module.exports = {
  sendEmail: sendEmail
}
