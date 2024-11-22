const models = require('../models');
const { Likes } = models;

const getNumLikesForPost = async (req, res) => {
    const { postId } = req.params;
    if (!postId) {
      return res.status(400).json({ error: 'postId is required' });
    }
  
    try {
      const count = await Likes.countLikesForPost(postId);
      return res.status(200).json({ count });
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

module.exports = {
    getNumLikesForPost,
    addLikeToPost,
    removeLikeFromPost,
    hasUserLikedPost,
  };