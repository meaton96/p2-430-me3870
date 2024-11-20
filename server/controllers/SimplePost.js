const models = require('../models');

const { SimplePost } = models;
const { Likes } = models;
const { Shares } = models; 

const MAX_CHAR = 300;

const makePost = async (req, res) => {
    if (!req.body.content) {
        return res.status(400).json({ error: 'Content and author are required' });
    } else if (req.body.content.length > MAX_CHAR) {
        return res.status(400).json({ error: 'Content is too long' });
    }

    const username = req.session.account.username;

    const postData = {
        content: req.body.content,
        visibility: req.body.visibility || 'public',
        owner: req.session.account._id,
        author: `${username}`,
    };

    try {
        const newPost = new SimplePost(postData);
        await newPost.save();
        return res.status(201).json(SimplePost.toAPI(newPost));
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred' });
    }
};

const addLikeAndShareInfoToGetPost = async (req, post) => {
    const likes = await Likes.getLikesForPost(post._id);
    const shares = await Shares.getSharesForPost(post._id);

    const hasLiked = req.session.account._id
        ? await Likes.hasUserLikedPost(post._id, req.session.account._id)
        : false;

    const hasShared = req.session.account._id
        ? await Shares.hasUserSharedPost(post._id, req.session.account._id)
        : false;

    return {
        ...SimplePost.toAPI(post),
        likesCount: likes.length,
        likes,
        hasLiked,
        sharesCount: shares.length,
        shares,
        hasShared,
    };
};

const getPublicPosts = async (req, res) => {
    const { limit = 10, skip = 0 } = req.query;

    try {
        const parsedLimit = parseInt(limit, 10);
        const parsedSkip = parseInt(skip, 10);

        if (isNaN(parsedLimit) || isNaN(parsedSkip)) {
            return res.status(400).json({ error: 'Invalid pagination parameters' });
        }

        const posts = await SimplePost.find({ visibility: 'public' })
            .sort({ createdDate: -1 })
            .skip(parsedSkip)
            .limit(parsedLimit);

        const postsWithInfo = await Promise.all(
            posts.map((post) => addLikeAndShareInfoToGetPost(req, post))
        );

        return res.status(200).json(postsWithInfo);
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while fetching posts' });
    }
};

const getNumLikesForPost = async (req, res) => {
    const { postId } = req.params;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const likes = await Likes.countLikesForPost(postId);
        return res.status(200).json(likes);
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while fetching likes' });
    }
};

const addLikeToPost = async (req, res) => {
    const { postId } = req.body;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const newLike = await Likes.addLike(postId, req.session.account._id);
        return res.status(201).json({ newLike });
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while adding like' });
    }
};

const removeLikeFromPost = async (req, res) => {
    const { postId } = req.body;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        await Likes.removeLike(postId, req.session.account._id);
        return res.status(200).json({ postId });
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while removing like' });
    }
};

const hasUserLikedPost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.session.account._id;

    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const hasLiked = await Likes.hasUserLikedPost(postId, userId);
        return res.status(200).json({ hasLiked });
    } catch (err) {
        console.error(`Error checking like for post ${postId} and user ${userId}:`, err);
        return res.status(500).json({ error: 'An error occurred while checking like status' });
    }
};

const getNumSharesForPost = async (req, res) => {
    const { postId } = req.params;
    if (!postId) {
        return res.status(400).json({ error: 'postId is required' });
    }

    try {
        const shares = await Shares.countSharesForPost(postId);
        return res.status(200).json(shares);
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
        const newShare = await Shares.addShare(postId, req.session.account._id);
        return res.status(201).json({ newShare });
    } catch (err) {
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
    makePost,
    getPublicPosts,
    getNumLikesForPost,
    addLikeToPost,
    hasUserLikedPost,
    removeLikeFromPost,
    getNumSharesForPost,    
    addShareToPost,
    hasUserSharedPost,
    removeShareFromPost,
};
