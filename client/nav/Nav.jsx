import React, { useState, useEffect } from "react";
import helper from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faUtensils, faDoorClosed, faGear, faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const Nav = ({ avatar, setCurrentPage, setNewPostModalActive }) => {


    return (
        <div
            className="nav-container px-3"
        >
            <div className="nav-avatar is-flex hide-at-1100">
                <div>
                    <figure className="avatar-container">
                        <img 
                            src={avatar} 
                            alt="avatar" 
                            className="avatar-image is-pointer" 
                            onClick={() => setCurrentPage("Profile")}
                        />
                    </figure>
                </div>
            </div>
            <ul className="nav-list">
                <li className="hide-on-large-desktop ">
                    <button onClick={() => setCurrentPage("Profile")} className="nav-avatar-btn">
                        <img src={avatar} alt="avatar" className="avatar-image" />
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("Feed")}>
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="hide-at-1100">Home</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("Profile")}>
                        <FontAwesomeIcon icon={faUser} />
                        <span className="hide-at-1100">My Profile</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("AccountSettings")}>
                        <FontAwesomeIcon icon={faGear} />
                        <span className="hide-at-1100">Account Settings</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("Pantry")}>
                        <FontAwesomeIcon icon={faDoorClosed} />
                        <span className="hide-at-1100">My Pantry</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage("Recipes")}>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className="hide-at-1100">My Recipes</span>
                    </button>
                </li>
                <li>
                    <button className="post-btn" onClick={() => setNewPostModalActive(true)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span className="hide-at-1100">New Post</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
