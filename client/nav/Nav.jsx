import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faUser, faUtensils, faDoorClosed, faGear, faPenToSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import { UserContext } from '../utils/UserContext.js';

const Nav = ({ handlePageChange }) => {
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);
    const { avatar } = useContext(UserContext);
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
                handlePageChange={handlePageChange}
                avatar={avatar}
                //setNewPostModalActive={setNewPostModalActive}
                icons={icons}
            />

            {/* Mobile Modal Navigation */}
            {isNavModalOpen &&
            <MobileNav  
                icons={icons} 
                setIsNavModalOpen={setIsNavModalOpen} 
                handlePageChange={handlePageChange}
                avatar={avatar}
            /> 
            }
        </>
    );
};

export default Nav;
