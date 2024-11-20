const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  // Account routes
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.post('/changeAvatar', mid.requiresLogin, controllers.Account.changeAvatar);
  app.post('/validateUsername', mid.requiresSecure, mid.requiresLogout, controllers.Account.validateUsername);
  app.get('/getPremium', mid.requiresLogin, controllers.Account.getPremium);
  app.post('/changePassword', mid.requiresSecure, mid.requiresLogin, controllers.Account.changePassword);
  app.post('/setPremium', mid.requiresLogin, controllers.Account.setPremium);
  app.get('/getUsername/:id', controllers.Account.getUsername);
  app.get('/getUsername', controllers.Account.getUsername);
  
  // Avatar routes
  app.get('/getDefaultAvatars', controllers.Account.getDefaultAvatars);
  app.get('/getAvatar', mid.requiresLogin, controllers.Account.getUserAvatar);
  app.get('/getAvatar/:id', controllers.Account.getAvatarById);
  app.get('/getAvatarByUsername/:username', controllers.Account.getAvatarByUsername);

  //simple post routes (twitter)
  app.post('/simplePost', mid.requiresLogin, controllers.SimplePost.makePost);
  app.get('/simplePublicPosts', controllers.SimplePost.getPublicPosts);
  app.get('/getNumLikesForPost/:postId', controllers.SimplePost.getNumLikesForPost);
  app.get('/getPostsForCurrentUser', mid.requiresLogin, controllers.SimplePost.getPostsForCurrentUser);
  app.get('/getPostsForUser/:userId', controllers.SimplePost.getPostsForUser);
  app.get('/getPostsForUserByVisibility/:userId/:visibility', controllers.SimplePost.getPostsForUserByVisibility);



  //post likes
  app.post('/addLike', mid.requiresLogin, controllers.SimplePost.addLikeToPost);
  app.post('/removeLike', mid.requiresLogin, controllers.SimplePost.removeLikeFromPost);
  app.get('/simplePost/:postId/has-liked', mid.requiresLogin, controllers.SimplePost.hasUserLikedPost);
  //post shares
  app.get('/getNumSharesForPost/:postId', controllers.SimplePost.getNumSharesForPost);
  app.post('/addShare', mid.requiresLogin, controllers.SimplePost.addShareToPost);
  app.post('/removeShare', mid.requiresLogin, controllers.SimplePost.removeShareFromPost);
  app.get('/simplePost/:postId/has-shared', mid.requiresLogin, controllers.SimplePost.hasUserSharedPost);

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
