import React from "react";
import { useState, useEffect } from "react";
import { sendGet } from "../utils/helper";

const ReplyModalOPText = ({ op }) => {

    const [opAvatar, setOpAvatar] = useState("/assets/img/avatar-grey-small.png");

    useEffect(() => {

        const fetchOpAvatar = async () => {
            //console.log("fetchOpAvatar called");
            if (!op || !op.author) return;
            //console.log(op.author);
            try {
                const res = await sendGet(`/getAvatarByUsername/${op.author}`);

                if (res.avatar) {
                    setOpAvatar(res.avatar);
                }
            }
            catch (err) {
                console.error("Error getting avatar:", err);
            }
        };
        fetchOpAvatar();

    }, [op]);

    const renderOP = () => {
        if (!op || !op.content) return;
        
        const pieces = op.content.split("\n"); //error

        return (
            <div className="is-flex reply-container">
                <div className="is-narrow">
                    <figure className="image is-48x48">
                        <img src={opAvatar} alt="avatar" />
                    </figure>
                </div>
                <div className="px-2">
                    <p className="has-text-weight-bold">{op.author}</p>
                    {pieces.map((piece, index) => (
                        <p key={index}>{piece}</p>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="reply-modal-op-text">
            <div className="is-flex reply-container">
                {renderOP()}
            </div>
        </div>
    );
}

export default ReplyModalOPText;