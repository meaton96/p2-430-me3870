import React, { useState, useContext  } from "react";
import PostModalTextArea from "./PostModalTextArea.jsx";
import PostModalHeader from "./PostModalHeader.jsx";
import PostModalFooter from "./PostModalFooter.jsx";
import { sendSimplePost } from "../hooks/simplePostProvider.js";
import { UserContext } from "../utils/UserContext.js";

const MAX_CHAR = 300;

const NewPostModal = () => {
    const [postText, setPostText] = useState("");
    // const [isPrivate, setIsPrivate] = useState(false);
    const [charactersRemaining, setCharactersRemaining] = useState(MAX_CHAR);
    const [visibility, setVisibility] = useState("public");

    const { newPostModalActive, setNewPostModalActive } = useContext(UserContext);
  
   const onClose = () => setNewPostModalActive(false);

    const handlePost = () => {
        if (!postText.trim()) return;
        sendSimplePost({ content: postText, visibility });
        setPostText("");
        setVisibility("public");
        onClose();
    };

    return (
        <div className={`modal ${newPostModalActive ? "is-active" : ""}`}>


            <div className="modal-background"></div>
            <div className="modal-card post-modal-card">
                <PostModalHeader
                    handlePost={handlePost}
                    onClose={onClose}
                    isReply={false} />



                <PostModalTextArea
                    //avatar={avatar}
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
