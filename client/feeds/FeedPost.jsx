import React from "react";
import { useState, useEffect } from "react";
import FeedPostFooter from "./FeedPostFooter.jsx";

// Component for each post in the feed
const FeedPost = ({ post }) => {

    const [avatar, setAvatar] = useState(`/assets/img/avatar-grey-small.png`);

    // Get the avatar of the post author
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

    // Function to calculate the age of the post
    const calculateAge = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
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
    
    return (
        <div className="post-container px-4 py-1">
            <div className="is-flex">
                <div className="is-narrow mr-1">
                    <figure className="image is-48x48">
                        <img src={avatar} alt='avatar' />
                    </figure>
                </div>
                <div className="is-flex-grow-1">
                    <div >
                        <div className=""><span className="has-text-weight-bold">@{post.author}</span> - {age}</div>
                        <div className="">
                            {
                                post.content.split('\n').map((line, index) => {
                                    return (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    );
                                })
                            }</div>
                    </div>
                    <FeedPostFooter post={post} />
                </div>

            </div>
        </div>
    );
};

export default FeedPost;