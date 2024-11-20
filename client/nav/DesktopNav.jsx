import React from "react";
import { useContext } from "react";
import { UserContext } from '../utils/UserContext.js';

import NavButton from "./NavButton.jsx";
const DesktopNav = ({ handlePageChange,
    avatar,
    setNewPostModalActive,
    icons }) => {


    const { isBackButtonActive, handleBackButtonClicked, breadcrumbs } = useContext(UserContext);



    return (
        <div className={`nav-container px-3 is-hidden-mobile`}>
            <div className="nav-avatar hide-at-1100">
                <div>
                    <figure className="avatar-container">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-image is-pointer"
                            onClick={() => handlePageChange("Profile")}
                        />
                    </figure>
                </div>
                <div className={`nav-back-btn-container ${isBackButtonActive ? '' : 'is-invisible'}`}>
                    <button onClick={handleBackButtonClicked}>
                        {'<'}
                    </button>

                </div>
            </div>
            <ul className="nav-list">
                <li className="hide-on-large-desktop ">
                    <button onClick={() => handlePageChange("Profile")} className="nav-avatar-btn">
                        <img src={avatar} alt="avatar" className="avatar-image" />
                    </button>
                </li>
                <NavButton
                    icon={icons.faHouse}
                    text="Home"
                    onClick={() => handlePageChange("Feed")}
                />
                <NavButton
                    icon={icons.faUser}
                    text="My Profile"
                    onClick={() => handlePageChange("Profile")}
                />
                <NavButton
                    icon={icons.faGear}
                    text="Account Settings"
                    onClick={() => handlePageChange("AccountSettings")}
                />
                <NavButton
                    icon={icons.faDoorClosed}
                    text="My Pantry"
                    onClick={() => handlePageChange("Pantry")}
                />
                <NavButton
                    icon={icons.faUtensils}
                    text="My Recipes"
                    onClick={() => handlePageChange("Recipes")}
                />
                <NavButton
                    icon={icons.faPenToSquare}
                    text="New Post"
                    onClick={() => setNewPostModalActive(true)}
                    addClass={"post-btn"}
                />

            </ul>
            <div className="nav-footer">
                <p>{breadcrumbs.join(" > ")}</p>
            </div>
        </div>
    );


};

export default DesktopNav;