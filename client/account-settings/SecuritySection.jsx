import React, { useState } from "react";
import PasswordInput from "../login/PasswordInput.jsx";
import helper from "../utils/helper";

const SecuritySection = () => {
    // States for each password field
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    // Function to handle password change
    const changePassword = async () => {
        try {
            if (!newPassword || newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
                window.alert("New password does not meet the required criteria.");
                return;
            }

            if (newPassword !== confirmPassword) {
                window.alert("Passwords do not match.");
                return;
            }

            const res = await helper.sendPost("/changePassword", {
                currentPassword,
                newPassword,
                confirmPassword,
            });

            if (res.message) {
                window.alert("Password changed successfully");
            } else if (res.error) {
                window.alert("Password incorrect. Please try again.");
            }
        } catch (err) {
            console.error("Error changing password:", err);
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
            <PasswordInput
                password={newPassword}
                setPassword={setNewPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                showConfirm={true}
            />

            {/* Save Changes Button */}
            <button
                className="settings-save-button"
                onClick={changePassword}
            >
                Update Password
            </button>
        </section>
    );
};

export default SecuritySection;
