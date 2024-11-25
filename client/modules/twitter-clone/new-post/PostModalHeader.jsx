import React from "react";

const PostModalHeader = ({ handlePost, onClose, isReply }) => {

    return (
        <header className="modal-card-head post-modal-card-head">
            <div className="post-modal-btn-container">
                <button className="button is-text modal-cancel-btn" onClick={onClose}>
                    Cancel
                </button>
                <button className="button modal-post-btn" onClick={handlePost}>
                    {isReply ? 'Reply' : 'Post' }
                </button>
            </div>

        </header>
    );
}

export default PostModalHeader;