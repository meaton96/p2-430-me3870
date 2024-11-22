const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'SimplePost',
    index: true,
  },
  parentComment: {
    type: mongoose.Schema.ObjectId,
    ref: 'Comments',
    index: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
    index: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

CommentSchema.pre('save', function(next) {
  if (!this.post && !this.parentComment) {
    return next(new Error('A comment must have either a post or a parent comment.'));
  }
  if (this.post && this.parentComment) {
    return next(new Error('A comment cannot have both a post and a parent comment.'));
  }
  next();
});


// Get all comments for a specific post
CommentSchema.statics.getCommentsForPost = async function (postId) {
  const comments = await this.find({ post: postId })
    .populate('user', 'username')
    .sort({ createdAt: -1 });
  return comments;
};

// Count the number of comments for a specific post
CommentSchema.statics.countCommentsForPost = async function (postId) {
  return this.countDocuments({ post: postId });
};

// Add a new comment to a post
CommentSchema.statics.addComment = async function (postId, userId, content) {
  try {
    const newComment = await this.create({ post: postId, user: userId, content });
    return newComment;
  } catch (err) {
    throw err;
  }
};

// Remove a comment by its ID and the user who posted it
CommentSchema.statics.removeComment = async function (commentId, userId) {
  return this.findOneAndDelete({ _id: commentId, user: userId });
};

// Update a comment's content by its ID and the user who posted it
CommentSchema.statics.updateComment = async function (commentId, userId, newText) {
  return this.findOneAndUpdate(
    { _id: commentId, user: userId },
    { content: newText },
    { new: true }
  );
};

CommentSchema.statics.hasUserCommented = async function (postId, userId) {
  try {
    const comment = await this.findOne({ post: postId, user: userId });
    return !!comment;
  } catch (err) {
    throw new Error(`Error checking if user ${userId} has commented on post ${postId}: ${err.message}`);
  }
};

const CommentModel = mongoose.model('Comments', CommentSchema);

module.exports = CommentModel;
