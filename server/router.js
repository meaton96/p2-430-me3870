const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {

  //account routes
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/validateUsername', mid.requiresSecure, mid.requiresLogout, controllers.Account.validateUsername);


  //domo routes
  app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);
  app.delete('/domo', mid.requiresLogin, controllers.Domo.deleteDomo);
  app.post('/maker', mid.requiresLogin, controllers.Domo.makeDomo);
  app.post('/makeRandom', mid.requiresLogin, controllers.Domo.makeRandomDomo);

  //page routes
  app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
  app.get('/battle', mid.requiresLogin, controllers.Domo.battlePage);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
