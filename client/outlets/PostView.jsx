import React, { useState, useEffect } from 'react';
import SinglePost from '../posts/SinglePost.jsx';
import { useParams } from 'react-router-dom';
import { getUserAvatar } from '../utils/helper';
const PostView = () => {

    const { username, postId } = useParams();
    const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

    useEffect(() => {

        const _getUserAvatar = async () => {
            try {
                const avt = await getUserAvatar();
                if (avt) {
                    setAvatar(avt);
                }

            } catch (err) {
                console.error("Error getting avatar:", err);
            }

        }
        _getUserAvatar();
    }, []);


    return (
        <div className='single-post-container'>
            <SinglePost
                username={username}
                postId={postId}
            />
            <div className='user-comment-box px-4 py-3'>
                <div className='user-comment-btn is-flex'>
                    <div className='is-narrow'>
                        <figure className='image is-32x32'>
                            <img src={avatar} alt='avatar' />
                        </figure>
                    </div>
                    <div className='is-flex is-align-items-center pl-1'>
                        Add a comment...
                    </div>

                </div>
            </div>
        </div>

    );
};

export default PostView;
