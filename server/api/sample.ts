/// <reference path="api/baseConrtoller.ts" />

/**
 * Base Module
 */
module Api {
  let timeoutSec:number;
  let xhrCode:number;
  export class BaseController{

    constructor(apiName){
      timeoutSec=0;
      xhrCode = 200;

      // vantage controller
      vantage.command(`api ${apiName}`)
         .description("mode api controller")
         .option('-t, --timeout', 'api call time')
         .option('-r, --xhrcode', 'XMLHttpRequest Code [ 200 or null true, others error codes ]')
         .action(function(args, callback) {
           this.log("bar", args);

           var time = parseInt(args.options.timeout)
           if (time) timeoutSec = time;
           else timeoutSec = 0

           var xhrc = parseInt(args.options.xhrcode)
           if (!xhrc || xhrc === 200) xhrCode = 200;
           else xhrCode = xhrc;

           callback();
         });
    }

    get(req, res, callback):void{
      console.log('res base', xhrCode);
      if (xhrCode === 200){
        setTimeout(()=>callback(), timeoutSec);
      }else{
        res.status(xhrCode)
         .send('mock error');
      }
    }
  }
}

/**
 * Api Controller
 */
module Api {
  console.log(Api)
  export class SampleController extends Api.BaseController{

    constructor(){
      super('sample');
    }
    
    get(req, res):void{
      super.get(req, res, ()=>{
        res.json({
          hello:'world',
          users: ['Alice','Bob','Carol']
        });
      })
    }
    put(req, res):void{
      var id = req.params.id;
      if (!id) res.status(200).send('valid data brand!');
      res.status(200).send('amount!');
    }
    post(req, res):void{
      var body = req.body;
      if (!body) res.status(200).send('valid data brand!');
      res.status(200).send('amount!');
    }
    delete(req, res):void{
      var id = req.id;
      if (!id) res.status(200).send('valid data brand!');
      res.status(200).send('amount!');
    }
  }
}


export function Sample(app){
  var ctrl = new Api.SampleController();
  var api = '/api/sample';
  app.get(api, ctrl.get);
  app.put(`${api}/:id`, ctrl.put);
  app.post(api, ctrl.post);
  app.delete(`${api}/:id`, ctrl.delete);
}
