import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavButton = ({ icon, text, onClick, addClass }) => {

    return (
        <li>
            <button onClick={onClick} className={addClass}>
                <FontAwesomeIcon icon={icon} />
                <span className="hide-at-1100">{text}</span>
            </button>
        </li>
    );
}

export default NavButton;   