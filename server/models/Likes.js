const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
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

// Ensure a user can only like a post once
LikeSchema.index({ post: 1, user: 1 }, { unique: true });

LikeSchema.statics.getLikesForPost = async function (postId) {
  const likes = await this.find({ post: postId }).populate('user', 'username');
  return likes;
};

LikeSchema.statics.countLikesForPost = async function (postId) {
  return this.countDocuments({ post: postId });
};

LikeSchema.statics.addLike = async function (postId, userId) {
  try {
    const newLike = await this.create({ post: postId, user: userId });
    return newLike;
  } catch (err) {
    if (err.code === 11000) {
      throw new Error('User has already liked this post');
    }
    throw err;
  }
};

LikeSchema.statics.removeLike = async function (postId, userId) {
  return this.findOneAndDelete({ post: postId, user: userId });
};

LikeSchema.statics.hasUserLikedPost = async function (postId, userId) {
  try {
    const like = await this.findOne({ post: postId, user: userId });
    return !!like;
  } catch (err) {
    throw new Error(`Error checking if user ${userId} has liked post ${postId}: ${err.message}`);
  }
};

const LikeModel = mongoose.model('Like', LikeSchema);

module.exports = LikeModel;
