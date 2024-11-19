import React from "react";
import { useState, useEffect } from "react";
import FeedPostFooter from "./FeedPostFooter.jsx";

const FeedPost = ({ post }) => {

    const [avatar, setAvatar] = useState(`/assets/img/avatar-grey-small.png`);

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

        // console.log(now, createdDate);  

        const diffInSeconds = Math.floor((now - createdDate) / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} s`;
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} m`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} h`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} d`;
        }
    };

    const age = calculateAge(post.createdDate);
    //console.log(post);
    return (
        <div className="post-container px-4 py-1 my-1">
            <div className="is-flex">
                <div className="is-narrow mr-1">
                    <figure className="image is-48x48">
                        <img src={avatar} alt='avatar' />
                    </figure>
                </div>
                <div className="">
                    <div className=""><span className="has-text-weight-bold">@{post.author}</span> - {age}</div>
                    <div className="">{post.content}</div>
                </div>
            </div>
            <FeedPostFooter post={post} />
        </div>
    );
};

export default FeedPost;