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

ShareSchema.index({ post: 1, user: 1 }, { unique: true });
const ShareModel = mongoose.model('Share', ShareSchema);

ShareSchema.statics.getSharesForPost = async (postId) => ShareModel.find(
  { post: postId },
).populate('user', 'username');

ShareSchema.statics.countSharesForPost = async (postId) => ShareModel.countDocuments(
  { post: postId },
);

ShareSchema.statics.addShare = async (postId, userId) => {
  try {
    const newShare = await ShareModel.create({ post: postId, user: userId });
    return newShare;
  } catch (err) {
    if (err.code === 11000) {
      throw new Error('User has already shared this post');
    }
    throw err;
  }
};

ShareSchema.statics.removeShare = async (postId, userId) => ShareModel.findOneAndDelete(
  { post: postId, user: userId },
);

ShareSchema.statics.hasUserSharedPost = async (postId, userId) => {
  try {
    const share = await ShareModel.findOne({ post: postId, user: userId });
    return !!share;
  } catch (err) {
    throw new Error(`Error checking if user ${userId} has shared post ${postId}: ${err.message}`);
  }
};

module.exports = ShareModel;
