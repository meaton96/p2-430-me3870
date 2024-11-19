import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";

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
                <section className="modal-card-body post-modal-card-body">
                    <div className="columns">
                        <div className="column is-narrow">
                            <figure className="image is-96x96">
                                <img src={avatar} alt="avatar" />
                            </figure>
                        </div>
                        <div className="column">
                            <div className="field">
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        placeholder="What's on your mind?"
                                        value={postText}
                                        onChange={(e) => {
                                            const inputText = e.target.value.slice(0, MAX_CHAR);
                                            setCharactersRemaining(MAX_CHAR - inputText.length);
                                            setPostText(inputText);
                                        }}
                                        maxLength={MAX_CHAR}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field post-modal-visibility-dropdown">
                        <label className="label">
                            <div className="mx-1 px-1 is-flex">
                                <div>Visibility</div>
                                <div className="mx-1 post-icon-container">
                                    <span>
                                        {visibility === 'private' && <FontAwesomeIcon icon={faLock} />}
                                        {visibility === 'public' && <FontAwesomeIcon icon={faGlobe} />}
                                        {visibility === 'followers-only' && <FontAwesomeIcon icon={faUsers} />}
                                    </span>
                                </div>
                            </div>
                            <div className="control ml-2">
                                <div className="select post-select">
                                    <select
                                        name="visibility"
                                        value={visibility}
                                        onChange={(e) => setVisibility(e.target.value)}
                                    >
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                        <option value="followers-only">Followers Only</option>
                                    </select>
                                </div>
                            </div>
                        </label>
                    </div>


                </section>
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
