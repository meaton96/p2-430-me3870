import React, { useState } from "react";
import ChangeAvatarModal from "../account-settings/ChangeAvatarModal.jsx";

const AccountSettings = ({ avatar, setAvatar }) => {
    const [premiumMode, setPremiumMode] = useState(false);
    const [changeAvatarModalActive, setChangeAvatarModalActive] = useState(false);

    return (
        <div>
            <div className="mt-2 ml-1">
                <h1 className="settings-title m-2 pt-3">Account Settings</h1>
            </div>
            <hr className="settings-hr" />
            <div className="container">
                {/* Avatar Section */}
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

                {/* Premium Section */}
                <section className="section premium-section">
                    <h2 className="premium-title">Premium Section</h2>
                    <label className="toggle-container">
                        <span>Enable Premium Mode</span>
                        <input
                            type="checkbox"
                            checked={premiumMode}
                            onChange={() => setPremiumMode(!premiumMode)}
                        />
                    </label>
                </section>

                {/* Security Settings Section */}
                <section className="section security-section">
                    <h2 className="security-title">Security Settings</h2>
                    <div className="field">
                        <label className="label">Current Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Current Password" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">New Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="New Password" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm New Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                placeholder="Confirm New Password"
                            />
                        </div>
                    </div>
                    <button className="settings-save-button">Save Changes</button>
                </section>
            </div>
            {
                changeAvatarModalActive &&
                <ChangeAvatarModal
                    onClose={() => setChangeAvatarModalActive(false)}
                    setAvatar={setAvatar}
                />
            }

        </div>
    );
};

export default AccountSettings;
