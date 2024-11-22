import React, { useState, useRef, useEffect } from 'react';
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current
