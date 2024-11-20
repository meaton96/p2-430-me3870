import React from 'react';
import { useParams } from 'react-router-dom';

const PostView = () => {
    const { username, postId } = useParams();



    return (
        <div className='p-2'>
            <header className='post-header is-flex'>
                <div className='is-narrow'>
                    <figure className='image is-48x48'>
                        <img src='/assets/img/logo-120p.png' alt='logo' />
                    </figure>
                </div>
                <div>
                    <p className='has-text-weight-bold'>{username}</p>
                </div>
            </header>
            <h1>Post by {username}</h1>
            <p>Post ID: {postId}</p>
            {/* Fetch and display the post using postId */}
        </div>
    );
};

export default PostView;
