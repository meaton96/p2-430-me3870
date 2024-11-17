const models = require('../models');

const { Account } = models;

const loginPage = (req, res) => {
  res.render('login');
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const validateUsername = async (request, response) => {

  const username = `${request.body.username}`;
  
  if (!username) {
    return response.status(400).json({ error: 'Username is required' });
  }
  return Account.checkUsername(username, (err, exists) => {
    if (err) {
      console.log(err.message);
      return response.status(500).json({ error: `An error occurred: ${err.message}` });
    }
    console.log(username, `exists: ${exists}`);
    return response.status(200).json({ exists });
  });

};


const login = (request, response) => {
  const username = `${request.body.username}`;
  const password = `${request.body.pass}`;

  if (!username || !password) {
    return response.status(400).json({ error: 'All fields are required' });
  }
  return Account.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return response.status(401).json({ error: 'Wrong username or password' });
    }
    request.session.account = Account.toAPI(account);
    return response.json({ redirect: '/maker' }); //todo: update this to redirect to the correct page
  });
};

const signup = async (request, response) => {
  const username = `${request.body.username}`;
  const password = `${request.body.pass}`;
  const password2 = `${request.body.pass2}`;

  if (!username || !password || !password2) {
    return response.status(400).json({ error: 'All fields are required' });
  }
  if (password !== password2) {
    return response.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    const hash = await Account.generateHash(password);
    const newAcc = new Account({ username, password: hash });
    await newAcc.save();
    request.session.account = Account.toAPI(newAcc);
    return response.json({ redirect: '/maker' }); //todo: update this to redirect to the correct page
  } catch (err) {
    if (err.code === 11000) {
      return response.status(400).json({ error: 'Username already in use.' });
    }
    return response.status(500).json({ error: `An error occurred: ${err.message}` });
  }
};

module.exports = {
  loginPage,
  login,
  logout,
  signup,
  validateUsername,
};
