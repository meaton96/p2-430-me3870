import helper from '../utils/helper.js';

export const sendSimplePost = async (post) => {
    try {
        const res = await helper.sendPost("/simplePost", post);

    } catch (err) {
        console.error("Error posting:", err);
    }
}

export const sendCommentOnPost = async (comment, postId) => {
    try {
        const res = await helper.sendPost("/addComment", { postId, comment });
    } catch (err) {
        console.error("Error commenting on post:", err);
    }
}

