/*jslint node: true */
'use strict';

// https://github.com/JacksonGariety/gulp-nodemon
var nodemon = require('gulp-nodemon');
var gulp = require('gulp');
var config = require('../gulp.config');

// express(mock)
gulp.task('express:dev', function(){
  nodemon({
    script: './server/index.js',
    ext: 'ts',
    env: {
      // just: outer file
      'PORT': config.port.api,
      'ENVIRONMENT': 'development'
    }
  });
});
