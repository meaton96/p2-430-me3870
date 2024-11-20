import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../utils/UserContext.js";
import ChangeAvatarModal from "../account-settings/ChangeAvatarModal.jsx";
import ChangeAvatarSection from "../account-settings/ChangeAvatarSection.jsx";
import PremiumSection from "../account-settings/PremiumSection.jsx";
import SecuritySection from "../account-settings/SecuritySection.jsx";
import helper from "../utils/helper.js";

const AccountSettings = ({ avatar, setAvatar }) => {
    const { username } = useContext(UserContext);
    const [premiumMode, setPremiumMode] = useState(false);
    const [changeAvatarModalActive, setChangeAvatarModalActive] = useState(false);
    const [loading, setLoading] = useState(true);



    // Get premium mode on load
    useEffect(() => {
        const getPremiumMode = async () => {
            try {
                const res = await helper.sendGet("/getPremium");

                if (res.premiumMode !== undefined) {
                    setPremiumMode(res.premiumMode);
                }
            } catch (err) {
                console.error("Error getting premium mode:", err);
            } finally {
                setLoading(false);
            }
        };
        getPremiumMode();
    }, []);

    // Handle premium mode change
    const handlePremiumChange = async (premium) => {
        try {
            setPremiumMode(premium);

            const res = await helper.sendPost("/setPremium", { premium });

            if (res.premiumMode !== undefined) {
                setPremiumMode(res.premiumMode);
            }
        } catch (err) {
            console.error("Error setting premium mode:", err);
            setPremiumMode(!premium);
        }
    };

    // Handle signout
    const handleSignout = async () => {
        try {
            const res = await helper.sendGet("/logout");
            console.log(res);
            if (res.status === 200) {
                window.location = "/";
            }
        } catch (err) {
            console.error("Error signing out:", err);
        }
    };


    return (
        <div>
            <div className="mt-2 ml-1 has-text-centered-mobile">
                <h1 className="settings-title m-2 pt-3">Account Settings</h1>
            </div>
            <hr className="settings-hr" />
            <div className="settings-container">

                <div className="container">
                    <section className="section pb-0">
                        <h1 className="settings-title">{username}</h1>
                    </section>

                    {/* Avatar Section */}
                    <ChangeAvatarSection
                        avatar={avatar}
                        setAvatar={setAvatar}
                        setChangeAvatarModalActive={setChangeAvatarModalActive}
                    />

                    {/* Premium Section */}
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <PremiumSection
                            premiumMode={premiumMode}
                            handlePremiumChange={handlePremiumChange}
                        />
                    )}

                    {/* Security Settings Section */}
                    <SecuritySection />
                </div>
            </div>
            {changeAvatarModalActive && (
                <ChangeAvatarModal
                    onClose={() => setChangeAvatarModalActive(false)}
                    setAvatar={setAvatar}
                    avatar={avatar}
                />
            )}
            <hr className="settings-hr" />
            <div className="">
                <button className="sign-out-btn" onClick={handleSignout}>
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default AccountSettings;
