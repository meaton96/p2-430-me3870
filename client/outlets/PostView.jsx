import React, { useState, useEffect, useContext } from 'react';
import SinglePost from '../posts/SinglePost.jsx';
import { useParams } from 'react-router-dom';
import helper from '../utils/helper.js';
import { UserContext } from '../utils/UserContext';
import CommentBox from '../post-view/CommentBox.jsx';
import Comments from '../post-view/Comments.jsx';
import { getCssVariable } from "../utils/helper.js";
import { ClipLoader } from "react-spinners";

const PostView = () => {

    const [post, setPost] = useState(null);
    const { username, postId } = useParams();
    const { avatar, setReplyPost, setNewReplyModalActive } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await helper.sendGet(`/simplePost/${postId}`);
                if (res && res.author) {
                    setPost(res);
                    setLoading(false);
                }
                else {
                    setError("Post not found");
                }

            } catch (err) {
                console.error("Error fetching post:", err);
                setError(err);
            }
        };
        fetchPost();
    }, [postId]);

    const renderView = () => {
        if (error) {
            return (
                <div className='error-container'>
                    <p>{error}</p>
                    <button className='button return-to-home-btn' onClick={() => window.location.href = '/'}>Go back to feed</button>
                </div>
            );
        }

        else if (loading) {
            return (
                <div className="spinner-container">
                    <ClipLoader color={getCssVariable('--primary-color')} size={50} />
                </div>
            );
        }
        else if (post) {
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
        }
        else {
            return <p>Error fetching post {error}</p>
        }

    }


    return (

        renderView()

    );
};

export default PostView;
