import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const NavButton = ({ icon, text, to, addClass }) => {
    return (
        <li>
            <Link to={to} className={addClass}>
                <FontAwesomeIcon icon={icon} />
                <span className="hide-at-1100">{text}</span>
            </Link>
        </li>
    );
};

export default NavButton;
