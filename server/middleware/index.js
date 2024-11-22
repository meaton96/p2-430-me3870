const requiresLogin = (req, res, next) => {
  if (!req.session.account) {
    // console.log('requiresLogin failed');
    return res.redirect('/');
  }
  return next();
};
const logRequest = (req, res, next) => {
  console.log('Request made to: ', req.url);
  return next();
};

const requiresPostId = (req, res, next) => {
  let { postId } = req.params;
  postId = postId || req.body.postId;

  if (!postId) {
    return res.status(400).json({ error: 'postId is required' });
  }
  return next();
};

const requiresLogout = (req, res, next) => {
  if (req.session.account) {
    return res.redirect('/app');
  }
  return next();
};

const requiresSecure = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.hostname}${req.url}`);
  }
  return next();
};

const bypassSecure = (req, res, next) => {
  next();
};

module.exports = {
  requiresLogin,
  requiresLogout,
  logRequest,
  requiresPostId,
};

if (process.env.NODE_ENV === 'production') {
  module.exports.requiresSecure = requiresSecure;
} else {
  module.exports.requiresSecure = bypassSecure;
}
