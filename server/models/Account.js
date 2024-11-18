/* This file defines our schema and model interface for the account data.

   We first import bcrypt and mongoose into the file. bcrypt is an industry
   standard tool for encrypting passwords. Mongoose is our tool for
   interacting with our mongo database.
*/
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');



/* When generating a password hash, bcrypt (and most other password hash
   functions) use a "salt". The salt is simply extra data that gets hashed
   along with the password. The addition of the salt makes it more difficult
   for people to decrypt the passwords stored in our database. saltRounds
   essentially defines the number of times we will hash the password and salt.
*/
const saltRounds = 10;

let AccountModel = {};

/* Our schema defines the data we will store. A username (string of alphanumeric
   characters), a password (actually the hashed version of the password created
   by bcrypt), and the created date.
*/
const AccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^[A-Za-z0-9_\-.]{1,16}$/,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: '/assets/img/avatar-grey-small.png',
    required: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// Converts a doc to something we can store in redis later on.
AccountSchema.statics.toAPI = (doc) => ({
  username: doc.username,
  _id: doc._id,
});

// Helper function to hash a password
AccountSchema.statics.generateHash = (password) => bcrypt.hash(password, saltRounds);

/* Helper function for authenticating a password against one already in the
   database. Essentially when a user logs in, we need to verify that the password
   they entered matches the one in the database. Since the database stores hashed
   passwords, we need to get the hash they have stored. We then pass the given password
   and hashed password to bcrypt's compare function. The compare function hashes the
   given password the same number of times as the stored password and compares the result.
*/
AccountSchema.statics.authenticate = async (username, password, callback) => {
  try {
    const doc = await AccountModel.findOne({ username }).exec();
    if (!doc) {
      return callback();
    }

    const match = await bcrypt.compare(password, doc.password);
    if (match) {
      return callback(null, doc);
    }
    return callback();
  } catch (err) {
    return callback(err);
  }
};
//checks the database to see if a username is already taken
//calls the callback with false if the username is not taken
AccountSchema.statics.checkUsername = async (username, callback) => {
  try {
    const doc = await AccountModel.findOne({ username }).exec();
    if (!doc) {
      return callback(null, false);
    }
    return callback(null, true);
  } catch (err) {
    return callback(err, false);
  }

};
//change an account avatar by account id
AccountSchema.statics.changeAvatar = async (_id, avatar, callback) => {
  try {
    console.log(_id, avatar);
    const doc = await AccountModel.findOneAndUpdate({ _id }, { avatar }).exec();
    if (!doc) {
      return callback();
    }
    return callback(null, doc);
  }
  catch (err) {
    return callback(err);
  }
}
//get the avatar of an account by account id
AccountSchema.statics.getAvatar = async (_id, callback) => {
  try {
    const doc = await AccountModel.findOne({ _id }, 'avatar').exec(); // Fetch only the avatar field
    if (!doc) {
      return callback(null, null); // No user found
    }
    return callback(null, doc.avatar); // Return the avatar
  } catch (err) {
    return callback(err);
  }
};
//set the premium status of an account by account id
AccountSchema.statics.setPremium = async (_id, premium, callback) => {
  try {
    const doc = await AccountModel.findOneAndUpdate({ _id }, { premium }).exec();
    if (!doc) {
      return callback();
    }
    //console.log(doc);
    return callback(null, doc.premium); 
  } catch (err) {
    return callback(err);
  }

}
//get the premium status of an account by account id
AccountSchema.statics.getPremium = async (_id, callback) => {
  try {
    const doc = await AccountModel.findOne({ _id }, 'premium').exec();
    if (!doc) {
      return callback(null, null);
    }
    
    return callback(null, doc.premium);
  } catch (err) {
    return callback(err);
  }
}

// Change the password of an account by username
AccountSchema.statics.changePassword = async (username, oldPassword, newPassword, callback) => {
  try {
    
    const account = await AccountModel.findOne({ username }).exec();
    if (!account) {
      return callback(null, null); // User not found
    }

    const isMatch = await bcrypt.compare(oldPassword, account.password);
    if (!isMatch) {
      return callback(null, false); // Incorrect current password
    }

    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    account.password = hashedPassword;
    await account.save();

    // Successfully updated
    return callback(null, account);
  } catch (err) {
    console.error('Error in changePassword:', err);
    return callback(err);
  }
};





AccountModel = mongoose.model('Account', AccountSchema);
module.exports = AccountModel;
