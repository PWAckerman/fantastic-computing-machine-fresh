'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util'),
    env = require('gulp-env'),
    templateCache = require('gulp-angular-templatecache'),
    supertest = require('supertest'),
    paths = ['./public/partials/*.html'];

gulp.task('sass', () => {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('mocha', () => {
  env({vars: {NODE_ENV: 'TEST', MONGO_URL: 'mongodb://patrick:portstuff1@ds049925.mongolab.com:49925/ackportfolio_test'}})
  return gulp.src(['./test/**/*.js'])
    .pipe(mocha({reporter: 'list'}))
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

gulp.task('default', ['sass', 'sass:watch', 'createTemplateCache', 'cache:watch', 'mocha'])
gulp.task('test', ['sass', 'sass:watch', 'createTemplateCache', 'cache:watch', 'mocha'])

gulp.task('createTemplateCache', () => {
    return gulp.src(paths)
        .pipe(templateCache('templates.js', { module: 'portfolioApp', root:''}))
        .pipe(gulp.dest('./public/js'));
    });
