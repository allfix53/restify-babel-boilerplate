class Router {
  constructor(server) {
    server.get('/', function(req, res, next) {
      res.send('main');
    })
  }
}

export default Router;
