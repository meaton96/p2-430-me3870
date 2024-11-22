import React, { useState, useEffect, useContext } from 'react';
import SinglePost from '../posts/SinglePost.jsx';
import { useParams } from 'react-router-dom';
import { getUserAvatar } from '../utils/helper';
import { UserContext } from '../utils/UserContext';
import CommentBox from '../post-view/CommentBox.jsx';
const PostView = () => {

    const { username, postId } = useParams();
    const { avatar } = useContext(UserContext);
    //const [avatar, setAvatar] = useState("/assets/img/avatar-grey-small.png");

    // useEffect(() => {

    //     const _getUserAvatar = async () => {
    //         try {
    //             const avt = await getUserAvatar();
    //             if (avt) {
    //                 setAvatar(avt);
    //             }

    //         } catch (err) {
    //             console.error("Error getting avatar:", err);
    //         }

    //     }
    //     _getUserAvatar();
    // }, []);


    return (
        <div className='single-post-container'>
            <SinglePost
                username={username}
                postId={postId}
            />
            <CommentBox
                avatar={avatar}
                onClick={() => console.log("Comment button clicked")}
            />
        </div>

    );
};

export default PostView;
