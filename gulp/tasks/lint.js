/*jslint node: true */
(function(){
  'use strict';
  var gulp = require('gulp');
  var tslint = require('gulp-tslint');
  var eslint = require('gulp-eslint');
  var config = require('../gulp.config');

  gulp.task('eslint', function() {
    return gulp.src(['gulp/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
  });
  gulp.task('tslint', function(){
    return gulp.src([config.app.ts])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
  });
})();