import React, { useState } from "react";
import SelectAvatar from "../login/SelectAvatar.jsx";
import helper from "../utils/helper.js";

const ChangeAvatarModal = ({ onClose, setAvatar, avatar }) => {

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Change Avatar</p>
                    <button className="delete" aria-label="close" onClick={onClose}>
                    </button>
                </header>
                <section className="modal-card-body">
                    <SelectAvatar
                        gridMin={'is-col-min-3'}
                        forward={false}
                        onClose={onClose}
                        setAvatar={setAvatar}
                        avatar={avatar}
                    />
                </section>
            </div>
        </div>
    );

};

export default ChangeAvatarModal;