const models = require('../models');

const { Account } = models;

const loginPage = (req, res) => {
  res.render('login');
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

const setAvatar = async (request, response) => {

  const username = `${request.body.username}`;
  const avatar = `${request.body.avatar}`;
//  console.log(username, avatar);
  if (!username || !avatar) {
    return response.status(400).json({ error: 'All fields are required' });
  }

  return Account.changeAvatar(username, avatar, (err) => {
    if (err) {
      console.log(err.message);
      return response.status(500).json({ error: `An error occurred: ${err.message}` });
    }
    return response.status(200).json({ avatar });
  });

};

const getDefaultAvatars = async (request, response) => {

  const avatars = [
    { name: 'default', file: '/assets/img/avatar-grey.png' },
    { name: 'blue', file: '/assets/img/avatar-blue.png' },
    { name: 'pink', file: '/assets/img/avatar-pink.png' },
    { name: 'purple', file: '/assets/img/avatar-purple.png' },
  ];

  return response.status(200).json({ avatars });
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
   // console.log(username, `exists: ${exists}`);
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
    return response.json({ redirect: '/app' }); 
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
    return response.status(201).json({ username });
  } catch (err) {
    if (err.code === 11000) {
      return response.status(400).json({ error: 'Username already in use.' });
    }
    return response.status(500).json({ error: `An error occurred: ${err.message}` });
  }
};
const getAvatar = async (request, response) => {
  const id = `${request.session.account._id}`; 

  if (!id) {
    return response.status(400).json({ error: 'id is required' });
  }

  return Account.getAvatar(id, (err, avatar) => {
    if (err) {
      console.log(err.message);
      return response.status(500).json({ error: `An error occurred: ${err.message}` });
    }
    if (!avatar) {
      return response.status(404).json({ error: 'User not found' });
    }
    return response.status(200).json({ avatar });
  });
};


module.exports = {
  loginPage,
  login,
  logout,
  signup,
  validateUsername,
  getDefaultAvatars,
  changeAvatar: setAvatar,
  getAvatar,
};
