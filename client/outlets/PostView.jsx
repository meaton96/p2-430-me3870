import React, { useState, useEffect, useContext } from 'react';
import SinglePost from '../posts/SinglePost.jsx';
import { useParams } from 'react-router-dom';
import helper from '../utils/helper.js';
import { UserContext } from '../utils/UserContext';
import CommentBox from '../post-view/CommentBox.jsx';
const PostView = () => {

    const [post, setPost] = useState(null);
    const { username, postId } = useParams();
    const { avatar, setReplyPost, setNewReplyModalActive } = useContext(UserContext);
    //const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await helper.sendGet(`/simplePost/${postId}`);
                console.log(res);
                setPost(res);

            } catch (err) {
                console.error("Error fetching post:", err);
            }
        };
        fetchPost();
    }, [postId]);


    return (
        <div className='single-post-container'>
            {
                post && <SinglePost
                    username={username}
                    postId={postId}
                    post={post}
                />
            }

            <CommentBox
                avatar={avatar}
                onClick={() => {
                    setReplyPost(post);
                    setNewReplyModalActive(true);
                }}
            />
        </div>

    );
};

export default PostView;
