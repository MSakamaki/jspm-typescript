/// <reference path="../../typings/node/node.d.ts"/>
var System = require('systemjs');
var path   = require('path');
var config = require('./config');

// loads './app.ts' from the current directory
System.import('app').then(function(modules) {
    console.log('sucess ENVIRONMENT:',process.env.ENVIRONMENT);
	// want to pass the processing manner according to environment
	// var viewPath = path.join(__dirname, '..', 'client');
	//var app = new modules.App(viewPath);
	var app = new modules.App();
	app.listen();
}).catch(function(err){
	console.log('error',err);
});