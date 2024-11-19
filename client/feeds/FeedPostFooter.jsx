import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const FeedPostFooter = ({ post }) => {

    return (
        <div className="feed-post-footer is-flex is-justify-content-space-between is-fullwidth">
            <button className="comment-button">
                <FontAwesomeIcon icon={faComment} />
                0
            </button>
            <button className="comment-button">
                <FontAwesomeIcon icon={faRepeat} />
                0
            </button>
            <button className="like-button">
                <FontAwesomeIcon icon={faHeart} />
                0
            </button>

        </div>

    );
};

export default FeedPostFooter;