/// <reference path="../../typings/node/node.d.ts"/>
var System = require('systemjs');
var path   = require('path');
var config = require('./jspm.browser');
var config = require('./jspm.config');
global.vantage = require('vantage')();

// loads './app.ts' from the current directory
System.import('app.ts!').then(function(modules) {
    console.log('sucess ENVIRONMENT:',process.env.ENVIRONMENT);
	// want to pass the processing manner according to environment
	// var viewPath = path.join(__dirname, '..', 'client');
	//var app = new modules.App(viewPath);
	var app = new modules.App();
	app.listen();

    // vantageJS listen
    vantage
      .delimiter("jspm-ts~$")
      .listen(9002)
      .show();
}).catch(function(err){
	console.log('error',err);
});
