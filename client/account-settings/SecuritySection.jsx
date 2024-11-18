import React, { useState } from "react";
import helper from '../utils/helper';

const SecuritySection = () => {
    // States for each password field
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle password change
    const changePassword = async () => {
        try {
            const res = await helper.sendPost('/changePassword', {
                currentPassword,
                newPassword,
                confirmPassword,
            });

            if (res.message) {
                console.log(res.message); // Password changed successfully
            } else if (res.error) {
                console.error('Error:', res.error); // Handle error message from server
            }
        } catch (err) {
            console.error('Error changing password:', err);
        }
    };

    return (
        <section className="section security-section">
            <h2 className="security-title">Security Settings</h2>

            {/* Current Password Field */}
            <div className="field">
                <label className="label">Current Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        placeholder="Current Password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
            </div>

            {/* New Password Field */}
            <div className="field">
                <label className="label">New Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
            </div>

            {/* Confirm New Password Field */}
            <div className="field">
                <label className="label">Confirm New Password</label>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>

            {/* Save Changes Button */}
            <button
                className="settings-save-button"
                onClick={changePassword}
            >
                Save Changes
            </button>
        </section>
    );
};

export default SecuritySection;
