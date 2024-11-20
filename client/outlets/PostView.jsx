import React from 'react';
import { useParams } from 'react-router-dom';

const PostView = () => {
    const { username, postId } = useParams();

    return (
        <div>
            <h1>Post by {username}</h1>
            <p>Post ID: {postId}</p>
            {/* Fetch and display the post using postId */}
        </div>
    );
};

export default PostView;
