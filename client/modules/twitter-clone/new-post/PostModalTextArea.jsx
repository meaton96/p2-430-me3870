import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faGlobe, faUsers } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../utils/UserContext.js";


const PostModalTextArea = ({
    mediaUrl,
    postText,
    setPostText,
    MAX_CHAR,
    visibility,
    setVisibility,
    setCharactersRemaining,
    isReply = false
}) => {

    const { avatar } = useContext(UserContext);
    return (
        <div>
            <div className="is-flex">
                <div className="is-narrow">
                    <figure className={`image ${isReply ? 'is-48x48' : 'is-96x96'}`}>
                        <img src={avatar} alt="avatar" />
                    </figure>
                </div>
                <div className="">
                    <div className="field">
                        <div className="control">
                            <textarea
                                className="textarea post-text-box"
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
            {
                mediaUrl &&
                <section className="post-media-container">
                    <img src={mediaUrl} alt="media" />
                </section>
            }
            {
                !isReply && <div className="field post-modal-visibility-dropdown">
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
            }


        </div>

    );
}

export default PostModalTextArea;
