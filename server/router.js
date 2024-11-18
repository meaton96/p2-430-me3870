const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  // Account routes
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/changeAvatar', controllers.Account.changeAvatar);
  app.post('/validateUsername', mid.requiresSecure, mid.requiresLogout, controllers.Account.validateUsername);
  app.get('/getDefaultAvatars', controllers.Account.getDefaultAvatars);

  // Domo routes
  // app.get('/getDomos', mid.requiresLogin, controllers.Domo.getDomos);
  // app.delete('/domo', mid.requiresLogin, controllers.Domo.deleteDomo);
  app.get('/app', mid.requiresLogin, controllers.App.appPage);
  // app.post('/makeRandom', mid.requiresLogin, controllers.Domo.makeRandomDomo);

  // Page routes
  //app.get('/maker', mid.requiresLogin, controllers.Domo.makerPage);
 // app.get('/battle', mid.requiresLogin, controllers.Domo.battlePage);

  // Root route: Redirect based on login state
  app.get('/', mid.requiresSecure, (req, res) => {
    if (req.session.account) {
      return res.redirect('/app'); 
    }
    return res.redirect('/login'); 
  });
};

module.exports = router;
