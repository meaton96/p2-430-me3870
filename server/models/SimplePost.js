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
