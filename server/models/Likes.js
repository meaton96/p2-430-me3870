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
const LikeModel = mongoose.model('Like', LikeSchema);

// Ensure a user can only like a post once
LikeSchema.index({ post: 1, user: 1 }, { unique: true });

// Get all likes for a post
LikeSchema.statics.getLikesForPost = async (postId) => LikeModel.find({ post: postId }).populate('user', 'username');

// Count the number of likes for a post
LikeSchema.statics.countLikesForPost = async (postId) => LikeModel.countDocuments({ post: postId });
// Add a like to a post
LikeSchema.statics.addLike = async (postId, userId) => {
  try {
    const newLike = await LikeModel.create({ post: postId, user: userId });
    return newLike;
  } catch (err) {
    if (err.code === 11000) {
      throw new Error('User has already liked this post');
    }
    throw err;
  }
};
// Remove a like from a post
LikeSchema.statics.removeLike = async (
  postId,
  userId,
) => LikeModel.findOneAndDelete({ post: postId, user: userId });
// Check if a user has liked a post
LikeSchema.statics.hasUserLikedPost = async (postId, userId) => {
  try {
    const like = await LikeModel.findOne({ post: postId, user: userId });

    return !!like;
  } catch (err) {
    throw new Error(`Error checking if user ${userId} has liked post ${postId}: ${err.message}`);
  }
};

module.exports = LikeModel;
