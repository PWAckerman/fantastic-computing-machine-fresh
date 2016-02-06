'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var paths = ['./public/partials/*.html'];

gulp.task('sass', function () {
  gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('cache:watch', function () {
  gulp.watch('./public/**/*.html', ['createTemplateCache']);
});

gulp.task('default', ['sass', 'sass:watch', 'createTemplateCache', 'cache:watch'])

gulp.task('createTemplateCache', function () {
    return gulp.src(paths)
        .pipe(templateCache('templates.js', { module: 'portfolioApp', root:''}))
        .pipe(gulp.dest('./public/js'));
    });
