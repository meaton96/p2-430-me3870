import React, { useState, useEffect } from "react";
import helper from "../helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faUtensils, faDoorClosed } from "@fortawesome/free-solid-svg-icons";


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
            className="nav-container px-3"
        >
            <figure className="avatar-container image is-96x96">
                <img src={avatar} alt="avatar" className="avatar-image" />
            </figure>

            <ul className="nav-list">
                <li>
                    <button onClick={() => setCurrentPage("Feed")}>
                    <FontAwesomeIcon icon={faHouse} />
                     Home
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("AccountSettings")}>
                    <FontAwesomeIcon icon={faUser} />
                        Account Settings
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("Pantry")}>
                    <FontAwesomeIcon icon={faDoorClosed} />
                        My Pantry
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("Recipes")}>
                    <FontAwesomeIcon icon={faUtensils} />
                        My Recipes
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
