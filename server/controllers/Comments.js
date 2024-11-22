const models = require('../models');

const { Comments, SimplePost } = models;

const addComment = async (req, res) => {
  const { postId, content } = req.body;

  if (!postId || !content) {
    return res.status(400).json({ error: 'postId and content are required' });
  }

  try {
    const post = await SimplePost.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const newComment = await Comments.addComment(postId, req.session.account._id, content);
    return res.status(201).json(newComment);
  } catch (err) {
    console.error('Error adding comment:', err);
    return res.status(500).json({ error: 'An error occurred while adding the comment' });
  }
};

const getCommentsForPost = async (req, res) => {
  const { postId } = req.params;
  const { limit = 10, skip = 0 } = req.query;

  if (!postId) {
    return res.status(400).json({ error: 'postId is required' });
  }

  try {
    const parsedLimit = parseInt(limit, 10);
    const parsedSkip = parseInt(skip, 10);

    if (Number.isNaN(parsedLimit) || Number.isNaN(parsedSkip)) {
      return res.status(400).json({ error: 'Invalid pagination parameters' });
    }

    const comments = await Comments.find({ post: postId })
      .sort({ createdAt: -1 })
      .skip(parsedSkip)
      .limit(parsedLimit)
      .populate('user', 'username');

    return res.status(200).json(comments);
  } catch (err) {
    console.error('Error fetching comments for post:', err);
    return res.status(500).json({ error: 'An error occurred while fetching comments' });
  }
};


const countCommentsForPost = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ error: 'postId is required' });
  }

  try {
    const count = await Comments.countCommentsForPost(postId);
    return res.status(200).json({ count });
  } catch (err) {
    console.error('Error counting comments for post:', err);
    return res.status(500).json({ error: 'An error occurred while counting comments' });
  }
};

const removeComment = async (req, res) => {
  const { commentId } = req.body;

  if (!commentId) {
    return res.status(400).json({ error: 'commentId is required' });
  }

  try {
    const deletedComment = await Comments.removeComment(commentId, req.session.account._id);
    if (!deletedComment) {
      return res.status(404).json({ error: 'Comment not found or not authorized to delete' });
    }

    return res.status(200).json({ commentId });
  } catch (err) {
    console.error('Error removing comment:', err);
    return res.status(500).json({ error: 'An error occurred while removing the comment' });
  }
};

const updateComment = async (req, res) => {
  const { commentId, content } = req.body;

  if (!commentId || !content) {
    return res.status(400).json({ error: 'commentId and content are required' });
  }

  try {
    const updatedComment = await Comments.updateComment(commentId, req.session.account._id, content);
    if (!updatedComment) {
      return res.status(404).json({ error: 'Comment not found or not authorized to update' });
    }

    return res.status(200).json(updatedComment);
  } catch (err) {
    console.error('Error updating comment:', err);
    return res.status(500).json({ error: 'An error occurred while updating the comment' });
  }
};

const hasUserCommentedPost = async (req, res) => {

  const { postId } = req.params;
  const userId = req.session.account._id;

  if (!postId) {
    return res.status(400).json({ error: 'postId is required' });
  }

  try {
    const hasCommented = await Comments.hasUserCommented(postId, userId);
    return res.status(200).json({ hasCommented });
  } catch (err) {
    console.error('Error checking if user has commented:', err);
    return res.status(500).json({ error: 'An error occurred while checking if user has commented' });
  }




};

module.exports = {
  addComment,
  getCommentsForPost,
  countCommentsForPost,
  removeComment,
  updateComment,
  hasUserCommentedPost
};
