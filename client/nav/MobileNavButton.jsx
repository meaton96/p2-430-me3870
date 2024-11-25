import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const MobileNavButton = ({ icon, text, to, addClass }) => {
    return (
        <li onClick={() => {

            setIsNavModalOpen(false);
        }}>
            <Link to={to} className={addClass} >
                <FontAwesomeIcon icon={icon} />

            </Link>
        </li>
    );
};

export default MobileNavButton;
