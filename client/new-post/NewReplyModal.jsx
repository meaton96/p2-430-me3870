import React, { useState, useContext } from "react";
import PostModalTextArea from "./PostModalTextArea.jsx";
import PostModalHeader from "./PostModalHeader.jsx";
import PostModalFooter from "./PostModalFooter.jsx";
import ReplyModalOPText from "./ReplyModalOPText.jsx";
import { sendCommentOnPost } from "../hooks/simplePostProvider.js";
import { UserContext } from "../utils/UserContext.js";

const MAX_CHAR = 300;

const NewReplyModal = () => {

    const [replyText, setReplyText] = useState("");
    // const [isPrivate, setIsPrivate] = useState(false);
    const [charactersRemaining, setCharactersRemaining] = useState(MAX_CHAR);
    const [visibility, setVisibility] = useState("public");

    const { newReplyModalActive, setNewReplyModalActive, replyPost } = useContext(UserContext);

    const onClose = () => setNewReplyModalActive(false);

    const handlePost = () => {
        if (!replyText.trim()) return;
        
        sendCommentOnPost(replyText, replyPost._id);
        setReplyText("");
        setVisibility("public");
        onClose();
    };

    return (
        <div className={`modal ${newReplyModalActive ? "is-active" : ""}`}>


            <div className="modal-background"></div>
            <div className="modal-card post-modal-card">
                <PostModalHeader
                    handlePost={handlePost}
                    onClose={onClose}
                    isReply={true} />





                <section className="modal-card-body post-modal-card-body">
                    <ReplyModalOPText op={replyPost || {}} />
                    <hr className="new-reply-hr" />
                    <PostModalTextArea
                        //avatar={avatar}
                        isReply={true}
                        postText={replyText}
                        setPostText={setReplyText}
                        MAX_CHAR={MAX_CHAR}
                        visibility={visibility}
                        setVisibility={setVisibility}
                        setCharactersRemaining={setCharactersRemaining}
                    />
                </section>

                <PostModalFooter charactersRemaining={charactersRemaining} />
            </div>
        </div>
    );
};

export default NewReplyModal;
