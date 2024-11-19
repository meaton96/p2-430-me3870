import React from "react";

const FeedPost = ({ post }) => {

    return (
        <div className="card">
            <div className="card-content">
                <img src={`/assets/img/avatar-grey-small.png`} alt='avatar' />
                <p>{post.content}</p>
                <p>{post.author}</p>
            </div>
        </div>
    );
};

export default FeedPost;