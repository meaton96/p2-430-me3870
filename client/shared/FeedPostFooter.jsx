import React, { useContext, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faComment, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import helper from '../utils/helper';
import { UserContext } from '../utils/UserContext';
import usePostInteractions from '../hooks/usePostInteractions';

const FeedPostFooter = ({ post }) => {
    const { setNewReplyModalActive, setReplyPost } = useContext(UserContext);
    const { likes, shares, liked, shared, commented, comments,
        setLikes, setShares, setLiked, setShared, setCommented, setComments } = usePostInteractions(post._id);

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); // Ref for the menu element

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

    const handleMenuClick = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // Attach the event listener for clicks outside the dropdown
        if (menuOpen) {
            document.addEventListener('mousedown', closeMenu);
        } else {
            document.removeEventListener('mousedown', closeMenu);
        }

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousedown', closeMenu);
        };
    }, [menuOpen]);

    return (
        <div className="feed-post-footer is-flex is-justify-content-space-between is-fullwidth my-2">
            <button className={`comment-button ${commented ? 'commented' : ''}`} onClick={() => {
                setReplyPost(post);
                setNewReplyModalActive(true);
            }}>
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
            <div className="dropdown" ref={menuRef}>
                <button onClick={handleMenuClick} className='px-2'>
                    <p className='footer-menu-btn-text'>...</p>
                </button>
                {menuOpen && (
                    <div className="dropdown-menu">
                        <button onClick={() => console.log('Delete post')}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedPostFooter;
