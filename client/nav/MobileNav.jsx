import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MobileNav = ({icons, setIsNavModalOpen, setCurrentPage, avatar}) => {

    return (
        <div className="nav-modal" onClick={() => setIsNavModalOpen(false)}>
            <div className="nav-modal-content">
                <button
                    className="close-modal"
                    onClick={() => setIsNavModalOpen(false)}
                >
                    <FontAwesomeIcon icon={icons.faTimes} />
                </button>
                <div className="nav-avatar is-flex">
                    <figure className="avatar-container">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="avatar-image"
                            onClick={() => {
                                setCurrentPage("Profile");
                                setIsNavModalOpen(false);
                            }}
                        />
                    </figure>
                </div>
                <ul className="nav-list">
                    <li>
                        <button
                            onClick={() => {
                                setCurrentPage("Feed");
                                setIsNavModalOpen(false);
                            }}
                        >
                            <FontAwesomeIcon icon={icons.faHouse}/>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setCurrentPage("Profile");
                                setIsNavModalOpen(false);
                            }}
                        >
                           <FontAwesomeIcon icon={icons.faUser}/>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setCurrentPage("Pantry");
                                setIsNavModalOpen(false);
                            }}
                        >
                            <FontAwesomeIcon icon={icons.faDoorClosed}/>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setCurrentPage("Recipes");
                                setIsNavModalOpen(false);
                            }}
                        >
                            <FontAwesomeIcon icon={icons.faUtensils}/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;