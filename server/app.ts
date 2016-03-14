

import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';

//import Sample from 'api/sample';
import {Sample} from 'api/sample';

export class App{
  constructor(/* argment */){
    this.config = {/* set argment */};
  }

  listen(){
    console.log('start');
    var app = express();
    var server = http.createServer(app);
    var port =  process.env.PORT || 8000;
    //app.use(express.static('/public'));

    app.use(bodyParser.json({limit: '50mb'}));
    //app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTION");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    // Api Start
    Sample(app);

    // Start server
    server.listen(port,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
      , function () {
      console.log('Express server listening on %d, in %s mode', port, app.get('env'));
    });
  }
}
