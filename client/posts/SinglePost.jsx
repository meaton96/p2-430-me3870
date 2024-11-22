import React from "react";
import FeedPostFooter from "../shared/FeedPostFooter.jsx";
import { useEffect, useState } from 'react';
import helper from '../utils/helper.js';
import usePostInteractions from '../hooks/usePostInteractions.js';

const SinglePost = ({ username, postId, post }) => {

    const [avatar, setAvatar] = useState(`/assets/img/avatar-grey-small.png`);
    const { likes, shares } = usePostInteractions(postId);


    useEffect(() => {
        if (!post) return;
        const getUserAvatar = async () => {
            try {
                const res = await helper.sendGet(`/getAvatarByUsername/${post.author}`);
                if (res.avatar) {
                    setAvatar(res.avatar);
                }

            } catch (err) {
                console.error("Error getting avatar:", err);
            }

        }
        getUserAvatar();
    }, [post]);

    return (
        <div className='post-wrapper'>
            <div className='mx-3 mt-2'>
                <header className='post-header is-flex'>
                    <div className='is-narrow'>
                        <figure className='image is-48x48'>
                            <img src={avatar} alt='logo' />
                        </figure>
                    </div>
                    <div className='p-1'>
                        <p className='has-text-weight-bold is-size-5'>{username}</p>
                    </div>
                </header>
                {post &&
                    <div className=''>
                        <p className='post-content pt-1 px-1 pb-2'>
                            {post.content.split("\n").map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                        <p>
                            {helper.formatDateTime(post.createdDate)}
                        </p>

                        <hr className='post-hr' />

                        <p>
                            <span className='post-info'>{shares}</span> shares - <span className='post-info'>{likes}</span> likes
                        </p>

                        <hr className='post-hr' />



                        <FeedPostFooter
                            post={post}
                        />
                    </div>
                }
            </div>
        </div>
    );
}

export default SinglePost;