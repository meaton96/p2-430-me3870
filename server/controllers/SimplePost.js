const models = require('../models');

const { SimplePost } = models;

const MAX_CHAR = 300;

const makePost = async (req, res) => {

    if (!req.body.content) {
        return res.status(400).json({ error: 'content and author are required' });
    }
    else if (req.body.content.length > MAX_CHAR) {
        return res.status(400).json({ error: 'content is too long' });
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
    }
    catch (err) {
        return res.status(500).json({ error: 'An error occurred' });
    }
}
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

        return res.status(200).json(posts.map(SimplePost.toAPI));
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while fetching posts' });
    }
};

module.exports = {
    makePost,
    getPublicPosts,
}