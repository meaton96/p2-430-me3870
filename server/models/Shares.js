const mongoose = require('mongoose');

const ShareSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'SimplePost',
    index: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
    index: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

// Ensure a user can only share a post once
ShareSchema.index({ post: 1, user: 1 }, { unique: true });

// Attach static methods using `this`
ShareSchema.statics.getSharesForPost = async function (postId) {
  return this.find({ post: postId }).populate('user', 'username');
};

ShareSchema.statics.countSharesForPost = async function (postId) {
  return this.countDocuments({ post: postId });
};

ShareSchema.statics.addShare = async function (postId, userId) {
  try {
    const newShare = await this.create({ post: postId, user: userId });
    return newShare;
  } catch (err) {
    if (err.code === 11000) {
      throw new Error('User has already shared this post');
    }
    throw err;
  }
};

ShareSchema.statics.removeShare = async function (postId, userId) {
  return this.findOneAndDelete({ post: postId, user: userId });
};

ShareSchema.statics.hasUserSharedPost = async function (postId, userId) {
  try {
    const share = await this.findOne({ post: postId, user: userId });
    return !!share;
  } catch (err) {
    throw new Error(`Error checking if user ${userId} has shared post ${postId}: ${err.message}`);
  }
};

// Create the model AFTER attaching static methods
const ShareModel = mongoose.model('Share', ShareSchema);

// Export the model
module.exports = ShareModel;
