import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavButton from "./MobileNavButton.jsx";


const MobileNav = ({ icons, setIsNavModalOpen, avatar }) => {

    return (
        <div className="nav-modal" onClick={() => setIsNavModalOpen(false)}>
            <div className="nav-modal-content">
                <button
                    className="close-modal"
                    onClick={() => setIsNavModalOpen(false)}
                >
                    <FontAwesomeIcon icon={icons.faTimes} />
                </button>
                {/* <div className="nav-avatar is-flex">
                    <figure className="avatar-container">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-image"
                            onClick={() => {
                                
                                setIsNavModalOpen(false);
                            }}
                        />
                    </figure>
                </div> */}
                <div className="nav-list">
                    
                        <MobileNavButton
                            icon={icons.faHouse}
                            to="/feed"
                        />
                        <MobileNavButton
                            icon={icons.faUser}
                            to="/feed"
                        />
                        <MobileNavButton
                            icon={icons.faSearch}
                            to="/recipes/search"
                        />
                        <MobileNavButton
                            icon={icons.faUtensils}
                            to="/recipes"
                        />
                        <MobileNavButton
                            icon={icons.faDoorClosed}
                            to="/pantry"
                        />
                        <MobileNavButton
                            icon={icons.faGear}
                            to="/account-settings"
                        />
                </div>
            </div>
        </div>
    );
};

export default MobileNav;