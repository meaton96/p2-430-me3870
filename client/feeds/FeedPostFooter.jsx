import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faComment, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import helper from "../utils/helper";

const FeedPostFooter = ({ post }) => {
    const [likes, setLikes] = useState(post.likesCount || 0);
    const [shares, setShares] = useState(post.sharesCount || 0);
    const [highlighted, setHighlighted] = useState(false);
    const [liked, setLiked] = useState(post.hasLiked || false);
    const [shared, setShared] = useState(post.hasShared || false);

    const toggleLike = () => {
        if (liked) {
            unLikePost();
        } else {
            likePost();
        }
    };

    const toggleShare = () => {
        if (shared) {
            unSharePost();
        } else {
            sharePost();
        }
    };

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

    // const handleHighlight = () => {
    //     setHighlighted(true);
    //     //setTimeout(() => setHighlighted(false), 300);
    // };

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
