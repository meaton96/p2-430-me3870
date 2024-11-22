import { useState, useEffect } from 'react';
import helper from '../utils/helper.js';

const usePostInteractions = (postId) => {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);
  const [comments, setComments] = useState(0);
  const [commented, setCommented] = useState(false);

  useEffect(() => {
    const getInteractions = async () => {
      try {
        const [
          likesData, 
          sharesData,
          commentsData, 
          likedData, 
          sharedData,
          commentedData
        ] = await Promise.all([

          helper.sendGet(`/getNumLikesForPost/${postId}`),
          helper.sendGet(`/getNumSharesForPost/${postId}`),
          helper.sendGet(`/countCommentsForPost/${postId}`),
          helper.sendGet(`/simplePost/${postId}/has-liked/`),
          helper.sendGet(`/simplePost/${postId}/has-shared/`),
          helper.sendGet(`/simplePost/${postId}/has-commented/`),


        ]);

        console.log('commentsData:', commentsData);
        console.log('commentedData:', commentedData);



        setLikes(likesData.count || 0);
        setShares(sharesData.count || 0);
        setLiked(likedData.hasLiked || false);
        setShared(sharedData.hasShared || false);
        setComments(commentsData.count || 0);
        setCommented(commentedData.hasCommented || false);
        
      } catch (err) {
        console.error('Error fetching post interactions:', err);
      }
    };

    getInteractions();
  }, [postId]);

  return {
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
  };
};

export default usePostInteractions;
