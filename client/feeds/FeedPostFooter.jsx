import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faComment, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import helper from "../utils/helper";

// Component for the footer of each post in the feed
//displays comments, likes, and shares buttons
const FeedPostFooter = ({ post }) => {
    const [likes, setLikes] = useState(post.likesCount || 0);
    const [shares, setShares] = useState(post.sharesCount || 0);
    const [highlighted, setHighlighted] = useState(false);
    const [liked, setLiked] = useState(post.hasLiked || false);
    const [shared, setShared] = useState(post.hasShared || false);

    useEffect(() => {

        const getHasLiked = async () => {
            try {
                const data = await helper.sendGet(`/simplePost/${post._id}/has-liked/`);
                if (data) {
                    setLiked(data.hasLiked);
                }
            } catch (err) {
                console.error("Error getting hasLiked:", err);
            }
        }
        getHasLiked();
    }, []);
    useEffect(() => {

        const getLikes = async () => {
            try {
                const data = await helper.sendGet(`/getNumLikesForPost/${post._id}`);
                //console.log(data);
                if (data) {
                    setLikes(data);

                }
            } catch (err) {
                console.error("Error getting likes:", err);
            }
        }
        getLikes();
    }, []);

    useEffect(() => {
        const getShares = async () => {
            try {
                const data = await helper.sendGet(`/getNumSharesForPost/${post._id}`);
                //console.log(data);
                if (data) {
                    setShares(data);
                }
            } catch (err) {
                console.error("Error getting shares:", err);
            }
        }
        getShares();
    }, []);


    // Function to like or unlike a post
    const toggleLike = () => {
        if (liked) {
            unLikePost();
        } else {
            likePost();
        }
    };

    // Function to share or unshare a post
    const toggleShare = () => {
        if (shared) {
            unSharePost();
        } else {
            sharePost();
        }
    };

    // Function to unlike a post
    const unLikePost = async () => {
        try {
            setLiked(false);
            const res = await helper.sendPost("/removeLike", { postId: post._id });
            if (res.postId) {
                setLikes(liked ? likes - 1 : likes);
            }
        } catch (err) {
            setLiked(true);
           // console.error("Error unliking post:", err);
        }
    };

    // Function to like a post
    const likePost = async () => {
        try {
            setLiked(true);
            const res = await helper.sendPost("/addLike", { postId: post._id });
            if (res.newLike) {
                setLikes(liked ? likes : likes + 1);
            }
        } catch (err) {
            setLiked(false);
          //  console.error("Error liking post:", err);
        }
    };

    // Function to unshare a post
    const unSharePost = async () => {
        try {
            setShared(false);
            const res = await helper.sendPost("/removeShare", { postId: post._id });
            if (res.postId) {
                setShares(shared ? shares - 1 : shares);
            }
        } catch (err) {
            setShared(true);
          //  console.error("Error unsharing post:", err);
        }
    };

    // Function to share a post
    const sharePost = async () => {
        
        try {
            setShared(true);
            const res = await helper.sendPost("/addShare", { postId: post._id });
            if (res.newShare) {
                setShares(shared ? shares : shares + 1);
            }
            else {
                setShared(false);
            }
        } catch (err) {
            setShared(false);
           // console.error("Error sharing post:", err);
        }
    };


    return (
        <div className="feed-post-footer is-flex is-justify-content-space-between is-fullwidth my-2">
            <button
                className={`comment-button ${highlighted ? "highlighted" : ""}`}

            >
                <span className="mx-1">
                    <FontAwesomeIcon icon={faComment} />
                </span>
                0
            </button>
            <button
                className={`repeat-button ${shared ? "shared" : ""} ${highlighted ? "highlighted" : ""}`}
                onClick={toggleShare}

            >
                <span className="mx-1">
                    <FontAwesomeIcon icon={faRepeat} />
                </span>
                {shares}
            </button>
            <button
                className={`like-button ${liked ? "liked" : ""} ${highlighted ? "highlighted" : ""}`}
                onClick={toggleLike}

            >
                {liked ? (
                    <span className="mx-1">
                        <FontAwesomeIcon icon={faHeartSolid} />
                    </span>
                ) : (
                    <span className="mx-1">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                )}
                {likes}
            </button>
        </div>
    );
};

export default FeedPostFooter;
