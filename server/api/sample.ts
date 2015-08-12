/**
 * Api Controller
 */
class ApiController{
  get(req, res):void{
    res.json({hello:'world'});
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


export function Sample(app){
  var ctrl = new ApiController();
  var api = '/api/sample';
  app.get(api, ctrl.get);
  app.put(`${api}/:id`, ctrl.put);
  app.post(api, ctrl.post);
  app.delete(`${api}/:id`, ctrl.delete);
}
