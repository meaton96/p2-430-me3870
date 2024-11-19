const models = require('../models');

const { SimplePost } = models;

const MAX_CHAR = 300;

const makePost = async (req, res) => {

    if (!req.body.content) {
        return res.status(400).json({ error: 'content is required' });
    }
    else if (req.body.content.length > MAX_CHAR) {
        return res.status(400).json({ error: 'content is too long' });
    }

    const postData = {
        content: req.body.content,
        visibility: req.body.visibility || 'public',
        owner: req.session.account._id,
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

module.exports = {
    makePost,
}