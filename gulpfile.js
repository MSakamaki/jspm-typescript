// var gulp = require('gulp');

// /*
// 	Start an http-server for the example project
// */
// gulp.task('default', function(cb) {
// 	var hs = require("http-server");
// 	var open = require('open');
// 	var server = hs.createServer({"root": "./client"});
// 	server.listen(8080);
// 	open("http://localhost:8080"); // safari's not working :(
// 	cb();
// });

'use strict';

var path = require('path');
global.appRoot = path.resolve(__dirname);

require('gulp-load-plugins')();
require('require-dir')('./gulp/tasks',{recurse:true});