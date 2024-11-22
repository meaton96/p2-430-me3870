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
        console.log("sendCommentOnPost called", comment, postId);
        const res = await helper.sendPost("/addComment", { postId, content: comment });
    } catch (err) {
        console.error("Error commenting on post:", err);
    }
}

