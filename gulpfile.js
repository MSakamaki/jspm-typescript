var gulp = require('gulp');

/*
	Start an http-server for the example project
*/
gulp.task('default', function(cb) {
	var hs = require("http-server");
	var open = require('open');
	var server = hs.createServer({"root": "./client"});
	server.listen(8081);
	open("http://127.0.0.1:8081"); // safari's not working :(
	cb();
});
