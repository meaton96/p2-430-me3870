import React from "react";
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';

const BottomLeftToast = () => {

    const { blToastMessage } = useContext(UserContext);


    return (
        <div className={`bottom-left-toast `}>
            <p>{blToastMessage}</p>
        </div>
    );
}

export default BottomLeftToast;