import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faComment, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import helper from '../utils/helper';
import { UserContext } from '../utils/UserContext';

const FeedPostFooter = ({ 
    post, 
    likes, 
    shares, 
    liked, 
    shared,
    comments,
    commented, 
    setLikes, 
    setShares, 
    setLiked, 
    setShared,
    setComments,
    setCommented
 }) => {

    const { setNewReplyModalActive, setReplyPost } = useContext(UserContext);

    const toggleLike = async () => {
        if (liked) {
            try {
                setLiked(false);
                const res = await helper.sendPost('/removeLike', { postId: post._id });
                if (res.postId) {
                    setLikes((prevLikes) => prevLikes - 1);
                }
            } catch (err) {
                setLiked(true);
                console.error('Error unliking post:', err);
            }
        } else {
            try {
                setLiked(true);
                const res = await helper.sendPost('/addLike', { postId: post._id });
                if (res.newLike) {
                    setLikes((prevLikes) => prevLikes + 1);
                }
            } catch (err) {
                setLiked(false);
                console.error('Error liking post:', err);
            }
        }
    };

    const toggleShare = async () => {
        if (shared) {
            try {
                setShared(false);
                const res = await helper.sendPost('/removeShare', { postId: post._id });
                if (res.postId) {
                    setShares((prevShares) => prevShares - 1);
                }
            } catch (err) {
                setShared(true);
                console.error('Error unsharing post:', err);
            }
        } else {
            try {
                setShared(true);
                const res = await helper.sendPost('/addShare', { postId: post._id });
                if (res.newShare) {
                    setShares((prevShares) => prevShares + 1);
                } else {
                    setShared(false);
                }
            } catch (err) {
                setShared(false);
                console.error('Error sharing post:', err);
            }
        }
    };

    return (
        <div className="feed-post-footer is-flex is-justify-content-space-between is-fullwidth my-2">
            <button className="comment-button" onClick={
                () => {
                    setReplyPost(post);
                    setNewReplyModalActive(true);
                }
            }>
                <span className="mx-1">
                    <FontAwesomeIcon icon={faComment} />
                </span>
                {comments}
            </button>
            <button className={`repeat-button ${shared ? 'shared' : ''}`} onClick={toggleShare}>
                <span className="mx-1">
                    <FontAwesomeIcon icon={faRepeat} />
                </span>
                {shares}
            </button>
            <button className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
                <span className="mx-1">
                    <FontAwesomeIcon icon={liked ? faHeartSolid : faHeart} />
                </span>
                {likes}
            </button>
        </div>
    );
};

export default FeedPostFooter;
