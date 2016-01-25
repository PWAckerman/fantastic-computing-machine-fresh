angular.module('portfolioApp').service('utilService', ['$http', function($http){
  var commits = 121;
  var stack = {
    score: 95,
    badges: 8
  };
  var skills = [
    {
      "name":"AngularJS",
      "icon":"https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w800-h800/AngularJS-Shield-large.png",
      "type":"Front End Framework"
    },
    {
      "name":"MongoDB",
      "icon":"http://www.ossys.com/wp-content/uploads/2014/01/mongodb_slide.png",
      "type":"NoSQL Database"
    },
    {
      "name":"Node.js",
      "icon":"https://strongloop.com/wp-content/uploads/2015/12/nodejs-logo.png",
      "type":"Runtime Environment"
    },
    {
      "name":"EcmaScript 6/2015",
      "icon":"http://i2.wp.com/www.thehoistory.com/wp-content/uploads/2015/08/es6-logo.png?resize=400%2C400",
      "type":"Modern Javascript Features"
    },
    {
      "name":"Express",
      "icon":"./images/express.png",
      "type":"Server Framework"
    },
    {
      "name":"Passport",
      "icon":"http://passportjs.org/images/logo.svg",
      "type":"Authentication Library"
    },
    {
      "name":"Github",
      "icon":"http://cdn.flaticon.com/png/256/25231.png",
      "type":"Versioning Tool"
    }
  ];
  var learnings = [{
    "name":"Scala",
    "icon":"https://worldvectorlogo.com/logos/scala-4.svg",
    "type":"Programming Language",
    "progress": "10"
  },{
    "name":"Redis",
    "icon":"http://thenewstack.io/wp-content/uploads/2015/03/redis-logo.png",
    "type":"Database",
    "progress": "5"
  },{
    "name":"React",
    "icon":"http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png",
    "type":"Front End Framework",
    "progress": "30"
  },{
    "name":"Redux",
    "icon":"http://whiteprompt.com/wp-content/uploads/2015/09/logo-redux.png",
    "type":"Front End Architecture",
    "progress": "10"
  }];
  this.getCommits = function(){
    return commits;
  }
  this.getStack = function(){
    return stack;
  }
  this.getSkills = function(){
    return skills;
  }
  this.getLearnings = function(){
    return learnings;
  }
}])
