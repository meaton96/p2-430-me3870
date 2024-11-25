import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../../utils/UserContext.js';
import FeedPostFooter from "../../../shared/FeedPostFooter.jsx";
import { Link } from 'react-router-dom';
import usePostInteractions from '../../../hooks/usePostInteractions.js';

const FeedPost = ({ post }) => {
    const [avatar, setAvatar] = useState(`/assets/img/avatar-grey-small.png`);
    const { setIsBackButtonActive } = useContext(UserContext);
    const { likes, shares, liked, shared, setLikes, setShares, setLiked, setShared } = usePostInteractions(post._id);

    useEffect(() => {
        const getUserAvatar = async () => {
            try {
                const res = await fetch(`/getAvatarByUsername/${post.author}`);
                const resJson = await res.json();
                if (resJson.avatar) {
                    setAvatar(resJson.avatar);
                }
            } catch (err) {
                console.error("Error getting avatar:", err);
            }
        };
        getUserAvatar();
    }, []);

    const calculateAge = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
        const diffInSeconds = Math.floor((now - createdDate) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds} s`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} m`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} h`;
        return `${Math.floor(diffInSeconds / 86400)} d`;
    };

    const age = calculateAge(post.createdDate);

    //console.log(post.media);

    return (

        <div className="post-container px-4 py-1">
            <div className="is-flex">
                <div className="is-narrow mr-1">

                    <figure className="image is-48x48">
                        <img src={avatar} alt="avatar" />
                    </figure>
                </div>
                <div className="is-flex-grow-1">
                    <Link
                        to={`/profile/${post.author}/post/${post._id}`}
                        className="post-link"
                        onClick={() => setIsBackButtonActive(true)}
                    >

                        <div>
                            <div className="">
                                <span className="has-text-weight-bold">@{post.author}</span> - {age}
                            </div>
                            <div className="">
                                {post.content.split("\n").map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="is-flex is-align-items-center is-justify-content-start my-1">
                            {post.media &&
                                <img className="post-media" src={post.media} alt="media" />
                            }
                        </div>
                    </Link>
                    <FeedPostFooter
                        post={post}
                        likes={likes}
                        shares={shares}
                        liked={liked}
                        shared={shared}
                        setLikes={setLikes}
                        setShares={setShares}
                        setLiked={setLiked}
                        setShared={setShared}
                    />
                </div>
            </div>
        </div >

    );
};

export default FeedPost;
