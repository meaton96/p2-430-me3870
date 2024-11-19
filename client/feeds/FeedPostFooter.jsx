import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const FeedPostFooter = ({ post }) => {

    return (
        <div className="feed-post-footer is-flex is-justify-content-space-between is-fullwidth my-2">
            <button className="comment-button">
                <span className="mx-1">
                    <FontAwesomeIcon icon={faComment} />
                </span>
                0
            </button>
            <button className="comment-button">
                <span className="mx-1">
                    <FontAwesomeIcon icon={faRepeat} />
                </span>
                0

            </button>
            <button className="like-button">
                <span className="mx-1">
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                0

            </button>

        </div>

    );
};

export default FeedPostFooter;