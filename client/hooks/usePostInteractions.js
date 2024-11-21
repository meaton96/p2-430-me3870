import { useState, useEffect } from 'react';
import helper from '../utils/helper.js';

const usePostInteractions = (postId) => {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    const getInteractions = async () => {
      try {
        const [likesData, sharesData, likedData, sharedData] = await Promise.all([
          helper.sendGet(`/getNumLikesForPost/${postId}`),
          helper.sendGet(`/getNumSharesForPost/${postId}`),
          helper.sendGet(`/simplePost/${postId}/has-liked/`),
          helper.sendGet(`/simplePost/${postId}/has-shared/`),
        ]);

        setLikes(likesData || 0);
        setShares(sharesData || 0);
        setLiked(likedData.hasLiked || false);
        setShared(sharedData.hasShared || false);
      } catch (err) {
        console.error('Error fetching post interactions:', err);
      }
    };

    getInteractions();
  }, [postId]);

  return { likes, shares, liked, shared, setLikes, setShares, setLiked, setShared };
};

export default usePostInteractions;
