import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faUser, faUtensils, faDoorClosed, faGear, faPenToSquare, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import { UserContext } from '../../utils/UserContext.js';

const Nav = () => {
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);
    const { avatar } = useContext(UserContext);
    const icons = {
        faHouse,
        faUser,
        faUtensils,
        faDoorClosed,
        faGear,
        faPenToSquare,
        faTimes,
        faSearch
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
                avatar={avatar}
                //setNewPostModalActive={setNewPostModalActive}
                icons={icons}
            />

            {/* Mobile Modal Navigation */}
            {isNavModalOpen &&
            <MobileNav  
                icons={icons} 
                setIsNavModalOpen={setIsNavModalOpen} 
                avatar={avatar}
            /> 
            }
        </>
    );
};

export default Nav;
