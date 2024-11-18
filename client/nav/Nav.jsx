import React, { useState, useEffect } from "react";
import helper from "../helper";

const Nav = ({ setCurrentPage }) => {
    const [avatar, setAvatar] = useState("/assets/img/avatar-grey.png");

    useEffect(() => {
        const getAvatar = async () => {
            try {
                const res = await helper.sendGet("/getAvatar");
                if (res.avatar) {
                    setAvatar(res.avatar);
                }
            } catch (err) {
                console.error("Error getting avatar:", err);
            }
        };
        getAvatar();
    }, []);

    return (
        <div
            className="column is-one-quarter has-background-color is-flex is-flex-direction-column is-align-items-center pt-5"
            style={{ minHeight: "100vh" }}
        >
            <img src={avatar} alt="avatar" className="is-rounded" style={{ width: "50%" }} />

            <ul>
                <li onClick={() => setCurrentPage("Feed")}>News Feed</li>
                <li onClick={() => setCurrentPage("AccountSettings")}>Account Settings</li>
                <li onClick={() => setCurrentPage("Pantry")}>My Pantry</li>
                <li onClick={() => setCurrentPage("Recipes")}>My Recipes</li>
            </ul>
        </div>
    );
};

export default Nav;
