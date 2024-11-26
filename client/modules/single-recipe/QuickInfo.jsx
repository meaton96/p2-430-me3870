import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUtensils, faHeart } from "@fortawesome/free-solid-svg-icons";


const QuickInfo = ({ readyInMinutes, servings, healthScore }) => {

    return (
        <div className="box recipe-quick-info-box">
            <div>
                <span>
                    <FontAwesomeIcon icon={faClock} />

                </span>
                {readyInMinutes} minutes
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faUtensils} />
                </span>
                {servings}
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                {healthScore}
            </div>
        </div>
    );


};

export default QuickInfo;