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

  // Simple post routes
  app.post('/simplePost', mid.requiresLogin, controllers.SimplePost.makePost);
  app.delete('/simplePost/:postId', mid.requiresPostId, mid.requiresLogin, controllers.SimplePost.deletePost);
  app.get('/simplePublicPosts', controllers.SimplePost.getPublicPosts);

  app.get('/getPostsForCurrentUser', mid.requiresLogin, controllers.SimplePost.getPostsForCurrentUser);
  app.get('/getPostsForUser/:userId', controllers.SimplePost.getPostsForUser);
  app.get('/getPostsForUserByVisibility/:userId/:visibility', controllers.SimplePost.getPostsForUserByVisibility);
  app.get('/simplePost/:postId', mid.requiresPostId, controllers.SimplePost.getPost);

  app.post('/uploadImage', mid.requiresLogin, controllers.Upload.uploadMid, controllers.Upload.uploadImage);

  // Post likes
  app.post('/addLike', mid.requiresPostId, mid.requiresLogin, controllers.Likes.addLikeToPost);
  app.post('/removeLike', mid.requiresPostId, mid.requiresLogin, controllers.Likes.removeLikeFromPost);
  app.get('/getNumLikesForPost/:postId', mid.requiresPostId, controllers.Likes.getNumLikesForPost);
  app.get('/simplePost/:postId/has-liked', mid.requiresPostId, mid.requiresLogin, controllers.Likes.hasUserLikedPost);

  // Post shares
  app.get('/getNumSharesForPost/:postId', mid.requiresPostId, controllers.Shares.getNumSharesForPost);
  app.post('/addShare', mid.requiresPostId, mid.requiresLogin, controllers.Shares.addShareToPost);
  app.post('/removeShare', mid.requiresPostId, mid.requiresLogin, controllers.Shares.removeShareFromPost);
  app.get('/simplePost/:postId/has-shared', mid.requiresPostId, mid.requiresLogin, controllers.Shares.hasUserSharedPost);

  // Comment routes
  app.post('/addComment', mid.requiresPostId, mid.requiresLogin, controllers.SimplePost.makePost);
  app.get('/getCommentsForPost/:postId', mid.requiresPostId, controllers.SimplePost.getCommentsForPost);
  app.get('/countCommentsForPost/:postId', mid.requiresPostId, controllers.SimplePost.getNumCommentsForPost);

  // recipe search
  app.get('/api/recipes/spoon/basic-search', mid.requiresLogin, controllers.RecipeSearch.basicSpoonSearch);
  app.get('/api/recipes/edamam/basic-search', mid.requiresLogin, controllers.RecipeSearch.basicEdamamSearch);
  app.get('/api/recipes/spoon/:id', mid.requiresLogin, controllers.RecipeSearch.recipeSpoon);

  app.get(
    '/simplePost/:postId/has-commented',
    mid.requiresPostId,
    mid.requiresLogin,
    controllers.SimplePost.hasUserCommentedPost,
  );

  // Serve the app for authenticated users
  app.get('/app*', mid.requiresLogin, controllers.App.appPage);

  // Root route: Redirect based on login state
  app.get('/', mid.requiresSecure, (req, res) => {
    if (req.session.account) {
      return res.redirect('/app');
    }
    return res.redirect('/login');
  });

  // Catch-all route for client-side routing
  app.get('*', mid.requiresSecure, mid.requiresLogin, controllers.App.appPage);
};

module.exports = router;
