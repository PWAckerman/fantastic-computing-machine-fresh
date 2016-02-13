'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util'),
    templateCache = require('gulp-angular-templatecache'),
    paths = ['./public/partials/*.html'];

gulp.task('sass', () => {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('mocha', () => {
  return gulp.src(['./test/**/*.js'])
    .pipe(mocha({reporter: 'list'}))
    .on('error', gutil.log)
});

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

gulp.task('createTemplateCache', () => {
    return gulp.src(paths)
        .pipe(templateCache('templates.js', { module: 'portfolioApp', root:''}))
        .pipe(gulp.dest('./public/js'));
    });
