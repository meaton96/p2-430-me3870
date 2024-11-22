const models = require('../models');

const { SimplePost } = models;

const MAX_CHAR = 300;

const canUserViewPost = (post, session) => {

  if (post.visibility === 'public') {
    return true;
  }

  if (post.visibility === 'private') {
    return post.owner === session.account._id;
  }

  if (post.visibility === 'followers-only') {
    return false; //NYI
  }

  return false;

};

const makePost = async (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'Content and author are required' });
  } if (req.body.content.length > MAX_CHAR) {
    return res.status(400).json({ error: 'Content is too long' });
  }

  const { username } = req.session.account;

  const postData = {
    content: req.body.content,
    visibility: req.body.visibility || 'public',
    owner: req.session.account._id,
    author: `${username}`,
  };

  try {
    const newPost = new SimplePost(postData);
    await newPost.save();

    const likeData = {
      postId: newPost._id,
      userId: req.session.account._id,
    };

    try {
      await Likes.addLike(likeData.postId, likeData.userId);
    } catch (likeErr) {
      console.error('Error automatically liking the post:', likeErr);
    }

    return res.status(201).json(SimplePost.toAPI(newPost));
  } catch (err) {
    return res.status(500).json({ error: 'An error occurred' });
  }
};

const addLikeAndShareInfoToGetPost = async (req, post) => SimplePost.toAPI(post);


const getPublicPosts = async (req, res) => {
  const { limit = 10, skip = 0 } = req.query;

  try {
    const parsedLimit = parseInt(limit, 10);
    const parsedSkip = parseInt(skip, 10);

    if (Number.isNaN(parsedLimit) || Number.isNaN(parsedSkip)) {
      return res.status(400).json({ error: 'Invalid pagination parameters' });
    }

    const posts = await SimplePost.find({ visibility: 'public' })
      .sort({ createdDate: -1 })
      .skip(parsedSkip)
      .limit(parsedLimit);

    const postsWithInfo = await Promise.all(
      posts.map((post) => addLikeAndShareInfoToGetPost(req, post)),
    );

    return res.status(200).json(postsWithInfo);
  } catch (err) {
    return res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
};


const getPostsForUser = async (req, res) => {
  const { userId } = req.params;
  const { limit = 10, skip = 0 } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  try {
    const parsedLimit = parseInt(limit, 10);
    const parsedSkip = parseInt(skip, 10);

    if (Number.isNaN(parsedLimit) || Number.isNaN(parsedSkip)) {
      return res.status(400).json({ error: 'Invalid pagination parameters' });
    }

    const posts = await SimplePost.findByOwner(userId, parsedLimit, parsedSkip);

    const postsWithInfo = await Promise.all(
      posts.map((post) => addLikeAndShareInfoToGetPost(req, post)),
    );
    return res.status(200).json(postsWithInfo);
  } catch (err) {
    console.error('Error fetching posts for user:', err);
    return res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
};
const getPostsForCurrentUser = async (req, res) => {
  req.params.userId = req.session.account._id;
  return getPostsForUser(req, res);
};

const getPostsForUserByVisibility = async (req, res) => {
  const { userId, visibility } = req.params;
  const { limit = 10, skip = 0 } = req.query;

  if (!userId || !visibility) {
    return res.status(400).json({ error: 'userId and visibility are required' });
  }

  if (!['public', 'private', 'followers-only'].includes(visibility)) {
    return res.status(400).json({ error: 'Invalid visibility value' });
  }

  try {
    const parsedLimit = parseInt(limit, 10);
    const parsedSkip = parseInt(skip, 10);

    if (Number.isNaN(parsedLimit) || Number.isNaN(parsedSkip)) {
      return res.status(400).json({ error: 'Invalid pagination parameters' });
    }

    const posts = await SimplePost.find({ owner: userId, visibility })
      .sort({ createdDate: -1 })
      .skip(parsedSkip)
      .limit(parsedLimit);

    const postsWithInfo = await Promise.all(
      posts.map((post) => addLikeAndShareInfoToGetPost(req, post)),
    );

    return res.status(200).json(postsWithInfo);
  } catch (err) {
    console.error('Error fetching posts for user by visibility:', err);
    return res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ error: 'postId is required' });
  }

  try {
    const post = await SimplePost.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const postWithInfo = await addLikeAndShareInfoToGetPost(req, post);
    return res.status(200).json(postWithInfo);
  } catch (err) {
    return res.status(500).json({ error: 'An error occurred while fetching post' });
  }
};

module.exports = {
  makePost,
  getPublicPosts,
  getPostsForUser,
  getPostsForUserByVisibility,
  getPostsForCurrentUser,
  getPost,
};
