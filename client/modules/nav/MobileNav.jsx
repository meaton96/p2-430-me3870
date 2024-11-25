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
               
                <div className="nav-list">
                    
                        <MobileNavButton
                            icon={icons.faHouse}
                            setIsNavModalOpen={setIsNavModalOpen}
                            to="/feed"
                        />
                        <MobileNavButton
                            icon={icons.faUser}
                            setIsNavModalOpen={setIsNavModalOpen}
                            to="/feed"
                        />
                        <MobileNavButton
                            icon={icons.faSearch}
                            setIsNavModalOpen={setIsNavModalOpen}
                            to="/recipes/search"
                        />
                        <MobileNavButton
                            icon={icons.faUtensils}
                            setIsNavModalOpen={setIsNavModalOpen}
                            to="/recipes"
                        />
                        <MobileNavButton
                            icon={icons.faDoorClosed}
                            setIsNavModalOpen={setIsNavModalOpen}
                            to="/pantry"
                        />
                        <MobileNavButton
                            icon={icons.faGear}
                            setIsNavModalOpen={setIsNavModalOpen}
                            to="/account-settings"
                        />
                </div>
            </div>
        </div>
    );
};

export default MobileNav;