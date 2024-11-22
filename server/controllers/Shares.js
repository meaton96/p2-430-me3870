const models = require('../models');
const { Shares } = models;

const getNumSharesForPost = async (req, res) => {
    const { postId } = req.params;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const count = await Shares.countSharesForPost(postId);
        return res.status(200).json({ count});
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while fetching shares' });
    }
};

const addShareToPost = async (req, res) => {
    const { postId } = req.body;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const post = await SimplePost.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        if (post.owner.toString() === req.session.account._id) {
            return res.status(400).json({ error: 'You cannot share your own post' });
        }

        const newShare = await Shares.addShare(postId, req.session.account._id);
        return res.status(201).json({ newShare });
    } catch (err) {
        console.error('Error in addShareToPost:', err);
        return res.status(500).json({ error: 'An error occurred while adding share' });
    }
};

const removeShareFromPost = async (req, res) => {
    const { postId } = req.body;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        await Shares.removeShare(postId, req.session.account._id);
        return res.status(200).json({ postId });
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while removing share' });
    }
};

const hasUserSharedPost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.session.account._id;

    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const hasShared = await Shares.hasUserSharedPost(postId, userId);
        return res.status(200).json({ hasShared });
    } catch (err) {
        console.error(`Error checking share for post ${postId} and user ${userId}:`, err);
        return res.status(500).json({ error: 'An error occurred while checking share status' });
    }
};

module.exports = {
    getNumSharesForPost,
    addShareToPost,
    hasUserSharedPost,
    removeShareFromPost,
};