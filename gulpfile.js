'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util'),
    env = require('gulp-env'),
    istanbul = require('gulp-istanbul'),
    templateCache = require('gulp-angular-templatecache'),
    concatter = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    supertest = require('supertest'),
    annotate = require('gulp-ng-annotate'),
    protractor = require("gulp-protractor").protractor,
    secrets,
    paths = ['./public/partials/*.html'];

    /* istanbul ignore if  */
if(process.env.NODE_ENV === 'production'){
  secrets = require(`./config/herokuConfig.js`);
} else if (process.env.NODE_ENV === 'TEST'){
  secrets = require('./config/testConfig.js')
  /* istanbul ignore next  */
} else if (process.env.NODE_ENV === 'TRAVIS'){
  secrets = require('./config/herokuConfig.js')
  /* istanbul ignore next  */
} else {
  secrets = require(`./config/secrets.js`);
}

gulp.task('protractor', () => {
  gulp.src(["./protractor/**/*.js"])
      .pipe(protractor({
          configFile: "./protractor/conf.js"
      }))
      .on('error', function(e) { throw e })
})

gulp.task('sass', () => {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('angular-concat', function () {
  gulp.src(['./public/js/**/*.js'])
    .pipe(concatter('bundle.js'))
    .pipe(annotate())
    // .pipe(uglify())
    .pipe(gulp.dest('./public/bundled/'))
})

gulp.task('pre-test', function () {
  return gulp.src(['./config/*.js', './services/*.js', './dbcontrollers/*.js', './dbmodels/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});


gulp.task('mocha', ['pre-test'], () => {
  env({vars: {
    NODE_ENV: 'TEST',
    MONGO_URL: `${secrets.test_mongo}`, }})
  return gulp.src(['./test/**/*.js'])
    .pipe(mocha({reporter: 'list', timeout: 10000}))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds(
      {thresholds:
        {
          global: {
            statements: 90,
            branches: 80,
            lines: 90,
            functions: 90
          }
        }
      }))
    .on('error', gutil.log)
});

gulp.task('nodemon', ()=>{
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: {
      PORT: 8080
    }
  }).on('restart', ()=>{
    console.log('restarting');
  })
})

gulp.task('mocha:watch', () => {
  gulp.watch(['./**/*.js', './test/**/*.js'], 'mocha')
})

gulp.task('sass:watch', () => {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('cache:watch', () => {
  gulp.watch('./public/**/*.html', ['createTemplateCache']);
});

gulp.task('default', ['sass', 'sass:watch', 'createTemplateCache', 'cache:watch', 'mocha', 'angular-concat'])
gulp.task('test', ['protractor', 'mocha'])

gulp.task('createTemplateCache', () => {
    return gulp.src(paths)
        .pipe(templateCache('templates.js', { module: 'portfolioApp', root:''}))
        .pipe(gulp.dest('./public/js'));
    });
