'use strict';
let chai = require('chai'),
    request = require('supertest'),
    app = require('../server.js'),
    mongoose = require('mongoose'),
    agent = request.agent(app),
    Entry = mongoose.model('Entry'),
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

  afterEach((done)=>{
    Entry.remove().exec();
    done()
  })
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
})
