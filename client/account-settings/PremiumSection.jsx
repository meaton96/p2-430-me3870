import React from "react";

// section in the account settings page to enable premium mode
const PremiumSection = ({ premiumMode, handlePremiumChange }) => {

    return (
        <section className="section premium-section">
            <h2 className="premium-title">Premium Section</h2>
            <label className="toggle-container">
                <span>Enable Premium Mode</span>
                <input
                    type="checkbox"
                    checked={premiumMode}
                    onChange={() => 
                        handlePremiumChange(!premiumMode)
                    }
                />
            </label>
        </section>
    );

};

export default PremiumSection;  
