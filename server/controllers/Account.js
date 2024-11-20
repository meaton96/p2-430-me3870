const models = require('../models');

const { Account } = models;

const loginPage = (req, res) => {
  res.render('login');
};

const logout = (req, res) => {
  
  req.session.destroy();
  return res.status(200).json({ redirect: '/' });
};

const setAvatar = async (request, response) => {

  const id = `${request.session.account._id}`;
  const avatar = `${request.body.avatar}`;
  if (!id || !avatar) {
    return response.status(400).json({ error: 'All fields are required' });
  }

  return Account.changeAvatar(id, avatar, (err) => {
    if (err) {
      console.log(err.message);
      return response.status(500).json({ error: `An error occurred: ${err.message}` });
    }
    return response.status(200).json({ avatar });
  });

};

const getDefaultAvatars = async (request, response) => {

  const avatars = [
    { name: 'default', file: '/assets/img/avatar-grey-small.png' },
    { name: 'blue', file: '/assets/img/avatar-blue-small.png' },
    { name: 'pink', file: '/assets/img/avatar-pink-small.png' },
    { name: 'purple', file: '/assets/img/avatar-purple-small.png' },
    { name: 'green', file: '/assets/img/avatar-green-small.png' },
    { name: 'brown', file: '/assets/img/avatar-brown-small.png' },
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


const _getAvatarById = async (id, response) => {
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
const getAvatarByUsername = async (request, response) => {

  if (!request.params.username) {
    return response.status(400).json({ error: 'username is required' });  
  }
  return Account.getAvatarByUsername(request.params.username, (err, avatar) => {
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
const getUserAvatar = async (request, response) => {
  const id = `${request.session.account._id}`;

  return _getAvatarById(id, response);

};
const getAvatarById = async (request, response) => {

  if (!request.params.id) {
    return response.status(400).json({ error: 'id is required' });
  }
  return _getAvatarById(request.params.id, response);

};
const setPremium = async (request, response) => {

  const id = `${request.session.account._id}`;
  const premium = `${request.body.premium}`;
  if (!id) {
    return response.status(400).json({ error: 'id is required' });
  }

  return Account.setPremium(id, premium, (err, prem) => {
    if (err) {
      console.log(err.message);
      return response.status(500).json({ error: `An error occurred: ${err.message}` });
    }
    return response.status(200).json({ prem });
  });


}

const getPremium = async (request, response) => {
  const id = `${request.session.account._id}`;

  if (!id) {
    return response.status(400).json({ error: 'id is required' });
  }

  return Account.getPremium(id, (err, prem) => {
    if (err) {
      console.log(err.message);
      return response.status(500).json({ error: `An error occurred: ${err.message}` });
    }

    return response.status(200).json({ premiumMode: prem });
  });
}

const changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const username = req.session.account.username;


  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'New password and confirm password do not match' });
  }

  try {
    Account.changePassword(username, currentPassword, newPassword, (err, updatedAccount) => {
      if (err) {
        console.error('Error changing password:', err);
        return res.status(500).json({ error: `An error occurred: ${err.message}` });
      }

      if (!updatedAccount) {
        return res.status(401).json({ error: 'Current password is incorrect or user not found' });
      }

      return res.status(200).json({ message: 'Password changed successfully' });
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: `An unexpected error occurred: ${err.message}` });
  }
};

const getUsername = async (req, res) => {
  const id = req.params.id || req.session.account._id;

  if (!id) {
    return res.status(400).json({ error: 'id is required' });
  }
  return Account.getUsername(id, (err, username) => {
    if (err) {
      console.log(err.message);
      return res.status(500).json({ error: `An error occurred: ${err.message}` });
    }
    if (!username) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json({ username });
  });
}





module.exports = {
  loginPage,
  login,
  logout,
  signup,
  validateUsername,
  getDefaultAvatars,
  changeAvatar: setAvatar,
  getUserAvatar,
  setPremium,
  getPremium,
  changePassword,
  getUsername,
  getAvatarById,
  getAvatarByUsername,
};
