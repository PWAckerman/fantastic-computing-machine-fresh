'use strict';
//frameworks, middleware, and libraries
let express = require('express'),
    Hapi = require('hapi'),
    inert = require('inert'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    request = require('request'),
    cheerio = require('cheerio'),
    q = require('q'),
    CronJob = require('cron').CronJob,
//controllers and models
    userCtrl = require('./dbcontrollers/user.server.controller.js'),
    User = require('./dbmodels/user.server.model.js'),
    Project = require('./dbmodels/project.server.model.js'),
    Skill = require('./dbmodels/skill.server.model.js'),
    Learning = require('./dbmodels/learning.server.model.js'),
    Education = require('./dbmodels/education.server.model.js'),
    Institution = require('./dbmodels/institution.server.model.js'),
    Platform = require('./dbmodels/platform.server.model.js'),
    Email = require('./dbmodels/email.server.model.js'),
    koaUser = require('./koauser.js').user,
//services
    sendgridService  = require('./services/sendgridservice.js'),
    twilioService = require('./services/twilioservice.js'),
//configs
    secrets = '',
    port = process.env.PORT || 8080,
    details = require("./config/herokuDetails.js"),
    todayServer = Math.ceil(Math.random() * 3);

if (process.env.NODE_ENV === 'production') {
  console.log('PRODUCTION');
  secrets = require("./config/herokuConfig.js");
  console.log(secrets)
} else {
  console.log('DEVELOPMENT');
  secrets = require("./config/secrets.js");
}

let job = new CronJob('00 59 * * * *', function(){
  let meep = {}
  meep.params = {}
  meep.params.id = '56af7da8d4c6d6ab9227851e'
  userCtrl.findUser(meep, res)
    .then(
      (user)=>{
        let dfd = q.defer()
        const url = 'https://github.com/' + user.githubname;
        request(url, (err, response, html)=>{

          if(!err){
            let $ = cheerio.load(html)
            let x = $('.contrib-number').text()
            req.body = {"commits": x.split(' ')[0]}
            dfd.resolve(userCtrl.updateUser(req, res))
          }
        })
        return dfd.promise
      }
    ).then(
      (user)=>{
        let dfd = q.defer()
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
            req.body = {stack: {score: x , badges: z}}
            dfd.resolve(userCtrl.updateUser(req, res))
          }
        })
        return dfd.promise
      }
    ).then(
      (user)=>{
        console.log(user)
      }
    ).catch(
      (err)=>{
        console.log(err)
      }
    )
})


if(todayServer === 1){
  let app = express()
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

      .get('/api/server', (req,res)=>{
        res.json({
          "message":"This server is configured to randomly choose from different Node.js server frameworks each day. Today's server is running the Express framework. Express is the most well-known and widely used server framework for Node, and endpoint behavior is setup using call back functions.",
          "framework":"Express",
          "version":"4.13.4",
          "image":"./images/expressbox.png",
          "details": details
        })
      })
      .post('/api/sendmail/:id', (req, res)=>{
        let email = ''
        userCtrl.findUser(req).then(
          (user)=>{
            email = user.email
            return sendgridService.sendEmail(req, user)
          }
        ).then(
          (json)=>{
            let emailRecord = new Email({
              from: req.body.from,
              subject: req.body.subject,
              text: req.body.text,
              user: req.params.id,
              to: email
            })
            emailRecord.save()
            res.json(json)
          }
        ).catch((err)=>{
          console.log(err)
        })
      })
      .post('/api/sendtext/:id', (req, res)=>{
        userCtrl.findUser(req).then(
          (user)=>{
            return twilioService.textNotification(req, user)
          }
        ).then(
          (message)=>{
            console.log(message)
            res.json(message)
          }
        ).catch((err)=>{
          console.log(err)
          res.json(err)
        })
      })
      .get('/scrape/:id', (req, res)=>{
        userCtrl.findUser(req, res)
          .then(
            (user)=>{
              let dfd = q.defer()
              const url = 'https://github.com/' + user.githubname;
              request(url, (err, response, html)=>{

                if(!err){
                  let $ = cheerio.load(html)
                  let x = $('.contrib-number').text()
                  req.body = {"commits": x.split(' ')[0]}
                  dfd.resolve(userCtrl.updateUser(req, res))
                }
              })
              return dfd.promise
            }
          ).then(
            (user)=>{
              let dfd = q.defer()
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
                  req.body = {stack: {score: x , badges: z}}
                  dfd.resolve(userCtrl.updateUser(req, res))
                }
              })
              return dfd.promise
            }
          ).then(
            (user)=>{
              res.json(user)
            }
          ).catch(
            (err)=>{
              console.log(err)
            }
          )
      })
      .post('/api/contacts/textmessage', (req, res)=>{

      })

      .listen(port, ()=>{
        console.log('Express Listening on ' + port)
        console.log(__dirname + '/public')
      })
    } else if(todayServer === 2){
      let server = new Hapi.Server();
      server.connection({port: port})
      server.register(inert);
      server.route({
        path: '/api/server',
        method: 'GET',
        handler: (request, reply)=>{
          reply({
            "message":"This server is configured to randomly choose from different Node.js server frameworks each day. Today's server is running the Hapi framework. Hapi favors configuration over code, and uses config objects to set endpoint behavior.",
            "framework":"Hapi",
            "image":"https://avatars.githubusercontent.com/hapijs",
            "version":"13.0.0",
            "details": details
          })
        }
      })
      server.route({
        path: '/api/user/{id}',
        method: 'GET',
        handler: (request, reply)=>{
          return userCtrl.getUser(request, reply).then((result)=>{
            console.log('Promise resolved!');
            reply(result)
          }).catch((err)=>{
            reply(404)
          });
        }
      })
      server.route({
        path: '/{path*}',
        method: 'GET',
        handler: {
          directory: {
            path: 'public',
            listing: false
          }
        }
      })
      server.route({
        path: '/api/sendtext/{id}',
        method: 'POST',
        handler: (req, res)=>{
          req.body = req.payload
          userCtrl.findUser(req).then(
            (user)=>{
              console.log('user', user)
              console.log('req', req.body)
              return twilioService.textNotification(req, user)
            }
          ).then(
            (message)=>{
              console.log(message)
              res(message)
            }
          ).catch((err)=>{
            console.log(err)
            res(err)
          })
        }
      })
      server.route({
        path: '/api/sendmail/{id}',
        method: 'POST',
        handler: (req, res)=>{
          let email = ''
          req.body = req.payload
          userCtrl.findUser(req).then(
            (user)=>{
              email = user.email
              return sendgridService.sendEmail(req, user)
            }
          ).then(
            (json)=>{
              let emailRecord = new Email({
                from: req.body.from,
                subject: req.body.subject,
                text: req.body.text,
                user: req.params.id,
                to: email
              })
              emailRecord.save()
              res(json)
            }
          ).catch((err)=>{
            console.log(err)
          })
        }
      })
      server.start(() => console.log(`Hapi Listening on ${port}`))
    } else if (todayServer === 3){
      let koa = require('koa'),
          serve = require('koa-static'),
          server = koa(),
          router = require('koa-router'),
          // monk = require('monk'),
          // wrap = require('co-monk'),
          parser = require('koa-body-parser'),
          api = router(),
          user = {},
          userResult = ''
      user.params = {}
      user.params.id = '56af7da8d4c6d6ab9227851e'
      userCtrl.getUser(user).then(
        (user)=>{
          console.log(user)
          userResult = user;
        }
      )
      server.use(serve(`${__dirname}/public`));
      server.use(parser())
      server.use(api.routes())
      //routes
      api.get('/api/user/:id', koaGetUser)
         .get('/api/server', koaGetServer)
         .post('/api/sendmail/:id', koaSendEmail)
         .post('/api/sendtext/:id', koaSendText)

      server.listen(port, ()=>{
        console.log(`Koa listening on ${port}`);
      })

      function *koaGetUser(id){
        let res = userResult;
        this.body = res;
      }

      function *koaSendEmail(){
        let email = ''
        let self = this;
        console.log('this.request', this.request.body)
        userCtrl.findUser(user).then(
          (user)=>{
            email = user.email
            return sendgridService.sendEmail(this.request, user)
          }
        ).then(
          (json)=>{
            let emailRecord = new Email({
              from: this.request.from,
              subject: this.request.subject,
              text: this.request.text,
              user: user._id,
              to: email
            })
            emailRecord.save()
          }
        ).catch((err)=>{
          console.log(err)
        })
        let res = 'worked'
        this.body = res
      }

      function *koaSendText(){
        userCtrl.findUser(user).then(
          (user)=>{
            return twilioService.textNotification(this.request, user)
          }
        ).then(
          (message)=>{
            console.log(message)
          }
        ).catch((err)=>{
          console.log(err)
        })
        let res = 'texted';
        this.body = res;
      }

      function *koaGetServer(){
        let res = yield {
          "message": "This server is configured to randomly choose from different Node.js server frameworks each day. Today's server is running the Koa framework. It's functionality is based on ES6 generators, and abstracts request and response objects into one single 'context' object.",
          "framework":"Koa",
          "version":"1.1.2",
          "image":"https://camo.githubusercontent.com/674563115c4e0d4e5d99440b916952ad795c498e/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f363339363931332f6b6f612f6c6f676f2e706e67",

        }
        this.body = res
      }
    }
//database initialization
require('./config/mongoose.js')
