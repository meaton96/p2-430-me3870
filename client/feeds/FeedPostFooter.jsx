import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat, faComment, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import helper from "../utils/helper";

const FeedPostFooter = ({ post }) => {
    const [likes, setLikes] = useState(post.likesCount || 0);
    const [highlighted, setHighlighted] = useState(false);
    const [liked, setLiked] = useState(post.hasLiked || false);

    const toggleLike = () => {

        if (liked) {
            unLikePost();
        } else {
            likePost();
        }

    };

    const unLikePost = async () => {
        try {
            setLiked(false);
            const res = await helper.sendPost("/removeLike", { postId: post._id });
            if (res.postId) {
                setLikes(liked ? likes - 1 : likes + 1);
                console.log("unliked");
            }
        } catch (err) {
            setLiked(true);
            console.error("Error unliking post:", err);
        }
    };

    const likePost = async () => {
        try {
            setLiked(true);
            const res = await helper.sendPost("/addLike", { postId: post._id });
            if (res.newLike) {
                setLikes(liked ? likes - 1 : likes + 1);
                console.log("liked");
            }
            console.log(res);
        } catch (err) {
            setLiked(false);
            console.error("Error liking post:", err);
        }
    };

    const handleHighlight = () => {
        setHighlighted(true);
        setTimeout(() => setHighlighted(false), 300); // Remove highlight after 300ms
    };

    return (
        <div className="feed-post-footer is-flex is-justify-content-space-between is-fullwidth my-2">
            <button
                className={`comment-button ${highlighted ? "highlighted" : ""}`}
                onMouseDown={handleHighlight}
            >
                <span className="mx-1">
                    <FontAwesomeIcon icon={faComment} />
                </span>
                0
            </button>
            <button
                className={`repeat-button ${highlighted ? "highlighted" : ""}`}
                onMouseDown={handleHighlight}
            >
                <span className="mx-1">
                    <FontAwesomeIcon icon={faRepeat} />
                </span>
                0
            </button>
            <button
                className={`like-button ${liked ? "liked" : ""} ${highlighted ? "highlighted" : ""}`}
                onClick={toggleLike}
                onMouseDown={handleHighlight}
            >
                {
                    liked ?
                        <span className="mx-1">
                            <FontAwesomeIcon icon={faHeartSolid} />
                        </span>
                        :
                        <span className="mx-1">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                }

                {likes}
            </button>
        </div>
    );
};

export default FeedPostFooter;
