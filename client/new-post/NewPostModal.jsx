import React, { useState } from "react";
import PostModalTextArea from "./PostModalTextArea.jsx";
import PostModalHeader from "./PostModalHeader.jsx";
import PostModalFooter from "./PostModalFooter.jsx";

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
                <PostModalHeader
                    handlePost={handlePost}
                    onClose={onClose}
                    isReply={false} />

                <PostModalTextArea
                    avatar={avatar}
                    postText={postText}
                    setPostText={setPostText}
                    MAX_CHAR={MAX_CHAR}
                    visibility={visibility}
                    setVisibility={setVisibility}
                    setCharactersRemaining={setCharactersRemaining}
                />

                <PostModalFooter charactersRemaining={charactersRemaining} />
            </div>
        </div>
    );
};

export default NewPostModal;
