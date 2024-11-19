import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faUser, faUtensils, faDoorClosed, faGear, faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

const Nav = ({ avatar, setCurrentPage, setNewPostModalActive }) => {
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);
    const icons = {
        faHouse,
        faUser,
        faUtensils,
        faDoorClosed,
        faGear,
        faPenToSquare,
        faTimes
    }
    return (
        <>
            {/* Hamburger button for mobile */}
            <button
                className="hamburger"
                onClick={() => setIsNavModalOpen(true)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Desktop Navigation */}
            <DesktopNav
                setCurrentPage={setCurrentPage}
                avatar={avatar}
                setNewPostModalActive={setNewPostModalActive}
                icons={icons}
            />

            {/* Mobile Modal Navigation */}
            {isNavModalOpen &&
            <MobileNav  
                icons={icons} 
                setIsNavModalOpen={setIsNavModalOpen} 
                setCurrentPage={setCurrentPage}
                avatar={avatar}
            /> 
            }
        </>
    );
};

export default Nav;
