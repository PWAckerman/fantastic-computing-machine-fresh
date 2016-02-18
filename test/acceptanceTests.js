'use strict';
let chai = require('chai'),
    request = require('supertest'),
    app = require('../server.js'),
    agent = request.agent(app),
    Entry = require('../dbmodels/entry.server.model.js'),
    Email = require('../dbmodels/email.server.model.js'),
    db = require('../config/mongoose.js'),
    expect = chai.expect;

chai.should();


describe('Entry POST endpoint', ()=>{

  let userId = "56ba35fc088a86ab1393c43f";
  let entryPost = {
    "text" : "My server is a monster."
  }
  it('should create an entry in the entries collection with the user property being equal to the route parameter', (done)=>{

    agent.post('/api/entry/' + userId)
         .send(entryPost)
         .expect(200)
         .end((err, res)=>{
           res.body.user.should.equal(userId);
           done();
         })
  })
  it("'s date in the date entry should be before the current time", (done)=>{

    agent.post('/api/entry/' + userId)
         .send(entryPost)
         .expect(200)
         .end((err, res)=>{
           let date = new Date(res.body.date);
           date.getTime().should.be.lt(Date.now());
           done();
         })
  })
  it("should have an id", (done)=>{

    agent.post('/api/entry/' + userId)
         .send(entryPost)
         .expect(200)
         .end((err, res)=>{
           res.body._id.should.exist;
           done();
         })
  })

  after((done)=>{
    db.db.dropCollection('entries', (err, result)=>{
      !err ? done() : console.log(err)
    })
  })
})
describe('Entry GET Endpoint Result', ()=>{
  let userId = "56af7da8d4c6d6ab9227851e";
  it("should return an array of Entries",(done)=>{
    agent.get('/api/entry/all/' + userId)
         .expect(200)
         .end((err, res)=>{
           console.log(res.body)
           res.body.should.be.an("array");
           done();
         })
  });
})
describe('User GET Endpoint result', ()=>{

  let userId = "56af7da8d4c6d6ab9227851e";
  it("should have an id", (done)=>{

    agent.get('/api/user/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body._id.should.exist;
           done();
         })
  })
  it("should have a skills array", (done)=>{

    agent.get('/api/user/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body.skills.should.be.an('array');
           done();
         })
  })
  it("should have an education array", (done)=>{

    agent.get('/api/user/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body.education.should.be.an('array');
           done();
         })
  })
  it("should have a learnings array", (done)=>{

    agent.get('/api/user/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body.learnings.should.be.an('array');
           done();
         })
  })
  it("should have an avatar", (done)=>{

    agent.get('/api/user/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body.avatar.should.be.a('string');
           done();
         })
  })
})

describe('Server GET endpoint', ()=>{


  it("should have a message", (done)=>{

    agent.get('/api/server')
         .expect(200)
         .end((err, res)=>{
           res.body.message.should.exist;
           res.body.message.should.be.a('string');
           done();
         })
  })
  it("should have a framework", (done)=>{

    agent.get('/api/server')
         .expect(200)
         .end((err, res)=>{
           res.body.framework.should.exist;
           res.body.framework.should.be.a('string');
           done();
         })
  })
  it("should have a version number", (done)=>{

    agent.get('/api/server')
         .expect(200)
         .end((err, res)=>{
           res.body.version.should.exist;
           res.body.version.should.be.a('string');
           done();
         })
  })
  it("should have an image", (done)=>{

    agent.get('/api/server')
         .expect(200)
         .end((err, res)=>{
           res.body.image.should.exist;
           res.body.image.should.be.a('string');
           done();
         })
  })
  it("should have a details object", (done)=>{
    agent.get('/api/server')
         .expect(200)
         .end((err, res)=>{
           res.body.details.should.exist;
           res.body.details.should.be.an('object');
           done();
         })
  })
})

describe('Email POST endpoint', ()=>{

  let userId = "56af7da8d4c6d6ab9227851e";
  let emailMessage = {
    from: "james@bobby.com",
    subject: "Testing a Subject",
    text: "We should really get together to write some tests",
  }
  it("should return a success message", (done)=>{
    agent.post('/api/sendmail/' + userId)
         .send(emailMessage)
         .expect(200)
         .end((err, res)=>{
           res.body.message.should.equal("success");
           done();
         })
  })
  after((done)=>{
    db.db.dropCollection('emails', (err, result)=>{
      !err ? done() : console.log(err)
    })
  })
})

describe('Text POST endpoint', ()=>{
  let userId = "56af7da8d4c6d6ab9227851e";
  let textMessage = {
    sender: "Jimmy Ackerman",
    company: "Foo Inc.",
    number: "555-555-4555",
    email: "james@ackerman.com"
  }
  it("should return a text with Twilio details", (done)=>{
    agent.post('/api/sendtext/' + userId)
         .send(textMessage)
         .expect(200)
         .end((err, res)=>{
           res.body.body.should.exist;
           res.body.body.should.be.a('string');
           res.body.direction.should.equal('outbound-api');
           res.body.dateCreated.should.equal(res.body.dateUpdated);
           done();
         })
  })
})

describe('Blurbs GET Endpoint result', ()=>{

  let userId = "56af7da8d4c6d6ab9227851e";
  it("should be an array", (done)=>{

    agent.get('/api/blurb/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body.should.be.an('array')
           done();
         })
  })
  it("'s first value should have an Id", (done)=>{

    agent.get('/api/blurb/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body[0]._id.should.exist;
           done();
         })
  })
  it("'s first value should have an Id", (done)=>{

    agent.get('/api/blurb/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body[0]._id.should.exist;
           done();
         })
  })
  it("'s first value's User should be the same as the requested user", (done)=>{

    agent.get('/api/blurb/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body[0].user.should.eql(userId);
           done();
         })
  })
  it("'s first value's text should be populated", (done)=>{

    agent.get('/api/blurb/' + userId)
         .expect(200)
         .end((err, res)=>{
           res.body[0].blurb.should.be.a("string");
           done();
         })
  })
})

// describe("Memory GET Endpoint", ()=>{
//
// })
