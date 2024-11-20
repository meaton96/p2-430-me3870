import React from "react";

//section in the account settings page to change the avatar
const ChangeAvatarSection = ({ avatar, setChangeAvatarModalActive }) => {

    return (
        <section className="section">
            <div className="is-flex avatar-section">
                <div className="settings-avatar-frame">

                    <img src={avatar} alt="avatar" className="settings-avatar" />

                </div>
                <div className="avatar-button-container">
                    <button
                        className="settings-avatar-button"
                        onClick={() => setChangeAvatarModalActive(true)}
                    >Change Avatar</button>
                </div>
            </div>
        </section>
    );

};

export default ChangeAvatarSection;