import React, { useState, useEffect } from "react";
import helper from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faUtensils, faDoorClosed } from "@fortawesome/free-solid-svg-icons";


const Nav = ({ avatar, setCurrentPage }) => {
    

    return (
        <div
            className="nav-container px-3"
        >
            <div className="nav-avatar">
                <figure className="avatar-container image is-96x96">
                    <img src={avatar} alt="avatar" className="avatar-image" />
                </figure>
            </div>
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
