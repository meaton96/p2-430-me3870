import React, { useState, useEffect, useContext } from 'react';
import SinglePost from '../posts/SinglePost.jsx';
import { useParams } from 'react-router-dom';
import helper from '../utils/helper.js';
import { UserContext } from '../utils/UserContext';
import CommentBox from '../post-view/CommentBox.jsx';
import Comments from '../post-view/Comments.jsx';
const PostView = () => {

    const [post, setPost] = useState(null);
    const { username, postId } = useParams();
    const { avatar, setReplyPost, setNewReplyModalActive } = useContext(UserContext);
    //const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await helper.sendGet(`/simplePost/${postId}`);
                //console.log(res);
                setPost(res);

            } catch (err) {
                console.error("Error fetching post:", err);
            }
        };
        fetchPost();
    }, [postId]);


    return (
        <>
            {
                post && <div className='single-post-container'>
                    <SinglePost
                        username={username}
                        postId={postId}
                        post={post}
                    />


                    <CommentBox
                        avatar={avatar}
                        onClick={() => {
                            setReplyPost(post);
                            setNewReplyModalActive(true);
                        }}
                    />


                    <Comments 
                        post={post}
                    />

                </div>
            }
        </>


    );
};

export default PostView;
