const mongoose = require('mongoose');

let SimplePostModel = {};
const SimplePostSchema = new mongoose.Schema({

  content: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
    index: true,
  },
  parent: {
    type: mongoose.Schema.ObjectId,
    ref: 'SimplePost',
    default: null,
  },
  author: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    enum: ['public', 'private', 'followers-only'],
    default: 'public',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },

});

SimplePostSchema.statics.toAPI = (doc) => ({
  content: doc.content,
  author: doc.author,
  _id: doc._id,
  visibility: doc.visibility,
  createdDate: doc.createdDate,
});
SimplePostSchema.statics.getParent = async (postId) => SimplePostModel.findOne({ _id: postId });
SimplePostSchema.statics.getChildren = async (postId) => SimplePostModel.find({ parent: postId });
SimplePostSchema
  .statics
  .getChildCount = async (postId) => SimplePostModel.countDocuments({ parent: postId });
SimplePostSchema.statics.deletePost = async (postId, userId) => {

  if (!postId) {
    return null;
  }
  const post = await SimplePostModel.findOne({ _id: postId });
  if (!post) {
    return { success: false, message: 'Cannot find post' };
  }
  if (post.owner.equals(userId)) {

    const deleteMessage = await SimplePostModel.deleteOne({ _id: postId });

    return { success: true, message: deleteMessage};
  }
  return { success: false, message: 'User is not the owner of the post' };

};
SimplePostSchema.statics.findByOwner = async (
  ownerId,
  limit = 10,
  skip = 0,
) => SimplePostModel.find(
  { owner: ownerId },
)
  .sort({ createdDate: -1 })
  .skip(skip)
  .limit(limit);
SimplePostModel = mongoose.model('SimplePost', SimplePostSchema);
module.exports = SimplePostModel;
