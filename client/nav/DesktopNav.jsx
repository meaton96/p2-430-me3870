import React from "react";
import { useContext } from "react";
import { UserContext } from '../utils/UserContext.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopNavButton from "./DesktopNavButton.jsx";

const DesktopNav = ({ avatar, icons }) => {
    const { isBackButtonActive, handleBackButtonClicked, setNewPostModalActive } = useContext(UserContext);
    


    return (
        <div className={`nav-container px-3 is-hidden-mobile`}>
            <div className="nav-avatar hide-at-1100">
                <div>
                    <Link to="/profile">
                        <figure className="avatar-container">
                            <img
                                src={avatar}
                                alt="avatar"
                                className="avatar-image is-pointer"
                            />
                        </figure>
                    </Link>
                </div>
                <div className={`nav-back-btn-container ${isBackButtonActive ? '' : 'is-invisible'}`}>
                    <button onClick={handleBackButtonClicked}>
                        {'<'}
                    </button>
                </div>
            </div>
            <ul className="nav-list">
                <li className="hide-on-large-desktop ">
                    <Link to="/profile" className="nav-avatar-btn">
                        <img src={avatar} alt="avatar" className="avatar-image" />
                    </Link>
                </li>
                <DesktopNavButton
                    icon={icons.faHouse}
                    text="Home"
                    to="/feed"
                />
                <DesktopNavButton
                    icon={icons.faUser}
                    text="My Profile"
                    to={`/profile`}
                />
                <DesktopNavButton 
                    icon={icons.faSearch}
                    text="Search Recipes"
                    to="/recipes/search"
                />
                <DesktopNavButton
                    icon={icons.faUtensils}
                    text="My Recipes"
                    to="/recipes"
                />
                <DesktopNavButton
                    icon={icons.faDoorClosed}
                    text="My Pantry"
                    to="/pantry"
                />
                <DesktopNavButton
                    icon={icons.faGear}
                    text="Account Settings"
                    to="/account-settings"
                />
                
                
                <li className="hide-on-mobile">
                    <button onClick={() => setNewPostModalActive(true)} className="post-btn">
                        <FontAwesomeIcon icon={icons.faPenToSquare} />
                        <span className="hide-at-1100">New Post</span>
                    </button>
                </li>
            </ul>
            
        </div>
    );
};

export default DesktopNav;
