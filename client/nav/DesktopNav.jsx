import React from "react";

import NavButton from "./NavButton.jsx";
const DesktopNav = ({ setCurrentPage, avatar, setNewPostModalActive, icons }) => {


    return (
        <div className={`nav-container px-3 is-hidden-mobile`}>
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
                    </button>
                </li>
                <NavButton
                    icon={icons.faHouse}
                    text="Home"
                    onClick={() => setCurrentPage("Feed")}
                />
                <NavButton
                    icon={icons.faUser}
                    text="My Profile"
                    onClick={() => setCurrentPage("Profile")}
                />
                <NavButton
                    icon={icons.faGear}
                    text="Account Settings"
                    onClick={() => setCurrentPage("AccountSettings")}
                />
                <NavButton
                    icon={icons.faDoorClosed}
                    text="My Pantry"
                    onClick={() => setCurrentPage("Pantry")}
                />
                <NavButton
                    icon={icons.faUtensils}
                    text="My Recipes"
                    onClick={() => setCurrentPage("Recipes")}
                />
                <NavButton
                    icon={icons.faPenToSquare}
                    text="New Post"
                    onClick={() => setNewPostModalActive(true)}
                    addClass={"post-btn"}
                />

            </ul>
        </div>
    );


};

export default DesktopNav;