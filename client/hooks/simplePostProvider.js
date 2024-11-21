import helper from '../utils/helper.js';

export const sendSimplePost = async (post) => {
    try {
        const res = await helper.sendPost("/simplePost", post);
    } catch (err) {
        console.error("Error posting:", err);
    }
}

