import React from "react";

const PostModalFooter = ({ charactersRemaining }) => {


    return (
        <footer className="modal-card-foot post-modal-card-foot">
            <div className="post-modal-btn-container">
                <div className="modal-foot-left">

                </div>
                <div className="modal-foot-right">
                    {charactersRemaining}
                </div>

            </div>
        </footer>
    );
}


export default PostModalFooter;