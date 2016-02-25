# fantastic-computing-machine
[![Build Status](https://travis-ci.org/PWAckerman/fantastic-computing-machine-fresh.svg?branch=master)](https://travis-ci.org/PWAckerman/fantastic-computing-machine-fresh)
## What is fantastic-computing-machine-fresh?
Fantastic Computing Machine is the auto-generated name for my sandbox portfolio app.
It is built using the MEAN (Mongo Express Angular Node) stack, which is the arguably the most popular Javascript solution stack (although many of its ).
Though traditional portfolio sites would not ideally be built in Angular due to their tendency to serve static content, I wanted my personal portfolio to be a learning experience, allowing myself to explore new tools and technologies on a small scale before using them on larger projects.

#### Current Tools/Software/Technologies Used:
##### Angular
Front End Framework, used for routing, AJAX, templating, etc.
##### Ionic
Ionic is a hybrid app framework built on PhoneGap/Cordova that wraps around Angular and is
deployable to iOS and Android devices. My administration application, where I add skills, projects,
and microblog entries, is built with Ionic and is maintained in a separate repository.
##### Protractor
Protractor is a tool built around the Selenium WebDriver that gives us the ability to write automated
tests for Angular applications. It can be combined with PhantomJS for unobtrusive browser testing.
##### Gulp
Gulp is one of the many build tools/task runners that exists in the Javascript ecosystem. It is coding
oriented, rather than configuration oriented, which allows for a chaining/piping style that is quite powerful.
##### SASS
SASS is a popular CSS precompiler providing the ability to use CSS in a more programmatic way. It is good for modularizing CSS, though I use it primarily for its variable capabilities.
##### Node.js
Node.js is a javascript runtime for server side scripting and serves as the basis of the portfolio application's backend.
##### Express
Express is a server framework, primarily for writing RESTful APIs and serving static files. It is
the de facto server framework for Node.
##### Hapi.js
Hapi is an alternative to Express, that emphasizes configuration over code. Much of the logic written
for endpoints in Express can be transferred to Hapi with very few changes. My portfolio server uses
both, more as an exercise then anything else. One is chosen randomly whenever the server is restarted.
##### Koa
I also briefly had Koa, a third server framework, running as well, but had to discontinue its use
due to unforeseen issues as the scope of the portfolio application grew. Koa is quite a different
beast than Hapi or Express due to its reliance on ES6 iterators/generators, which makes it less compatible with the logic used for Hapi or Express servers. Will probably try to implement again when I have more time.
##### Cheerio
Cheerio is a webscraping library/utility for Node, that allows us to the traverse a site's DOM in a way
similar to JQuery, and extract information. I use it to scrape my GitHub and StackOverflow profile for
updated statistics.
##### MongoDB
MongoDB is a NoSQL database, and is the primary data store of my portfolio application.
##### Mongoose
Mongoose is an ODM for Mongoose, which allows for schema enforcement, casting and the use of Mongo in a relational style.
##### Redis
Redis is an incredibly fast data store. In the context of my portfolio application, Redis is used
for data caching due to its speed.
##### Mocha, Chai, Supertest
Mocha is a testing framework for javascript which, along with Chai (an assertion library) & Supertest (a testing oriented HTTP request library), I use to implement acceptance testing for my server.
##### Travis CI
Travis is a continuous integration tool that I utilize as a step before deployment. It creates a build
of the project in Docker, making sure it passes all tests and runs successfully.
##### Dokku
Dokku is a deployment platform that mimics Heroku, but can be used on your own virtual machine in the
cloud. You push to Dokku as you would Heroku, and it builds your application in a Docker container. This
allows for your virtual machine to also run other processes (like databases), rather than relying on other cloud based providers in conjunction with Heroku.

#### Future Plans
#####Scala
I would like to use Scala to build another flavor of the RESTful api used for this application (primarily as motivation to learn Scala). Currently considering Finch to help with this. This is TBD.
#####React
React has grown incredibly in popularity over the past year and though I have dabbled in it a bit,
I have not built anything significant. I plan to have one of the servers provide the React version of
the application, and one provide the Angular application, and see if I can notice a difference. This is also TBD.
