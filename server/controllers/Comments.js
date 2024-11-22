const models = require('../models');

const { Comments } = models;


// const updateComment = async (req, res) => {
//   const { commentId, content } = req.body;

//   if (!commentId || !content) {
//     return res.status(400).json({ error: 'commentId and content are required' });
//   }

//   try {
//     const updatedComment = await
//     Comments.updateComment(commentId, req.session.account._id, content);
//     if (!updatedComment) {
//       return res.status(404).json({ error: 'Comment not found or not authorized to update' });
//     }

//     return res.status(200).json(updatedComment);
//   } catch (err) {
//     console.error('Error updating comment:', err);
//     return res.status(500).json({ error: 'An error occurred while updating the comment' });
//   }
// };

// const hasUserCommentedPost = async (req, res) => {
//   const { postId } = req.params;
//   const userId = req.session.account._id;

//   if (!postId) {
//     return res.status(400).json({ error: 'postId is required' });
//   }

//   try {
//     const hasCommented = await Comments.hasUserCommented(postId, userId);
//     return res.status(200).json({ hasCommented });
//   } catch (err) {
//     console.error('Error checking if user has commented:', err);
//     return res.status(500).json({ error: 'An error occurred while checking if user has commented' });
//   }
// };

module.exports = {
  // addComment,
  // getCommentsForPost,
  // countCommentsForPost,
  //removeComment,
  //updateComment,
 // hasUserCommentedPost,
};
