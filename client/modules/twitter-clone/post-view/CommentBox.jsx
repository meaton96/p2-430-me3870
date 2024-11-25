import React from "react";

const CommentBox = ({avatar, onClick}) => {

    return (
        <div className='user-comment-box px-4 py-3' onClick={onClick}>
                <div className='user-comment-btn is-flex'>
                    <div className='is-narrow'>
                        <figure className='image is-32x32'>
                            <img src={avatar} alt='avatar' />
                        </figure>
                    </div>
                    <div className='is-flex is-align-items-center pl-1'>
                        Add a comment...
                    </div>

                </div>
            </div>
    );
};

export default CommentBox;