/*jslint node: true */
(function(){
  'use strict';

  var gulp = require('gulp');
  var browserSync = require('browser-sync');
  var config = require('../gulp.config');

  var defaultSyncFile = [
      config.app.ts
    ];

  gulp.task('browser-sync', function() {
    browserSync.init(defaultSyncFile, {
        notify: true,
        server: {
          baseDir: ['./client']
        },
        port: config.port.view,
        ui: {
          port: 3000,
          weinre: {port: 3050 }
        },
        // firefox, google chrome,
        browser: ['google chrome'],
        tunnel: false
      });
    gulp.watch(config.app.ts, ['tslint']);
  });
})();
