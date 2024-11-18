import React from "react";

const SecuritySection = ({ password, setPassword }) => {


    return (
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
    )

};


export default SecuritySection;