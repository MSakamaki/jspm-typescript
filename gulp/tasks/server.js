/*jslint node: true */
'use strict';

var gulp = require('gulp');

gulp.task('serve', [
  'tslint',
  'browser-sync',
  'express:dev'
]);

// Don't use process.exit(); throw an error instead
// gulp.task('serve:test', ['serve'], function(){
//   process.exit();
// });
