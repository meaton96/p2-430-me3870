import helper from '../utils/helper.js';

export const sendSimplePost = async (post) => {

    try {
        const res = await helper.sendPost("/simplePost", post);
        return res;
    } catch (err) {
        console.error("Error posting:", err);
    }
}

export const sendCommentOnPost = async (comment, postId) => {
    try {
        //console.log("sendCommentOnPost called", comment, postId);
        const res = await helper.sendPost("/addComment", { postId, content: comment });
        console.log("Result of sendCommentOnPost:", res);
        return res;
    } catch (err) {
        console.error("Error commenting on post:", err);
    }
}

export const getCommentsForPost = async (postId, skip, limit) => {

    try {
        const res = await helper.sendGet(`/getCommentsForPost/${postId}?limit=${limit}&skip=${skip}`);
        return res;
    } catch (err) {
        console.error("Error getting comments:", err);
    }
}

export const deleteSimplePost = async (postId) => {
    console.log(`deleteSimplePost called with postId: ${postId}`);
    try {
        const res = await fetch(`/simplePost/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await res.json();
        // console.log("Result of deleteSimplePost:", result);
        return result;

    }
    catch (err) {
        console.error("Error deleting post:", err);
    }
}
