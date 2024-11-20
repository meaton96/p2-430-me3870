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


LikeSchema.index({ post: 1, user: 1 }, { unique: true });

LikeSchema.statics.getLikesForPost = async (postId) => {
    return await LikeModel.find({ post: postId }).populate('user', 'username');
};

LikeSchema.statics.countLikesForPost = async (postId) => {
    return await LikeModel.countDocuments({ post: postId });
};
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
LikeSchema.statics.removeLike = async (postId, userId) => {
    return await LikeModel.findOneAndDelete({ post: postId, user: userId });
};
LikeSchema.statics.hasUserLikedPost = async (postId, userId) => {
    try {
        const like = await LikeModel.findOne({ post: postId, user: userId });
        
        return !!like;
    }
    catch (err) {
        throw new Error(`Error checking if user ${userId} has liked post ${postId}: ${err.message}`);
    }


};




const LikeModel = mongoose.model('Like', LikeSchema);
module.exports = LikeModel;
