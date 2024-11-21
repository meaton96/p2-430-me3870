import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";
import PostModalTextArea from "./PostModalTextArea.jsx";

const MAX_CHAR = 300;

const NewPostModal = ({ isActive, onClose, onPost, avatar }) => {
    const [postText, setPostText] = useState("");
    // const [isPrivate, setIsPrivate] = useState(false);
    const [charactersRemaining, setCharactersRemaining] = useState(MAX_CHAR);
    const [visibility, setVisibility] = useState("public");

    const handlePost = () => {
        if (!postText.trim()) return;
        onPost({ content: postText, visibility });
        setPostText("");
        setVisibility("public");
        onClose();
    };

    return (
        <div className={`modal ${isActive ? "is-active" : ""}`}>


            <div className="modal-background"></div>
            <div className="modal-card post-modal-card">
                <header className="modal-card-head post-modal-card-head">
                    <div className="post-modal-btn-container">
                        <button className="button is-text modal-cancel-btn" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="button modal-post-btn" onClick={handlePost}>
                            Post
                        </button>
                    </div>

                </header>
                <PostModalTextArea  
                    avatar={avatar} 
                    postText={postText} 
                    setPostText={setPostText} 
                    MAX_CHAR={MAX_CHAR} 
                    visibility={visibility} 
                    setVisibility={setVisibility} 
                    setCharactersRemaining={setCharactersRemaining}
                />

                <footer className="modal-card-foot post-modal-card-foot">
                    <div className="post-modal-btn-container">
                        <div className="modal-foot-left">

                        </div>
                        <div className="modal-foot-right">
                            {charactersRemaining}
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    );
};

export default NewPostModal;
