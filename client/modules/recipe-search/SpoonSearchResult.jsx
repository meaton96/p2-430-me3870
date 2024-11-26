import React from "react";
import { Link } from "react-router-dom";

const SpoonSearchResult = ({ recipe }) => {

    const { id, title, image } = recipe;

    return (

        <div key={id} className="recipe-search-result post-wrapper">
            <Link to={`/recipes/spoon/${id}`}>
                <div className="is-flex is-flex-direction-column is-align-items-center ">
                    <div>
                        <h2 className="is-font-weight-bold is-size-4">{title}</h2>
                    </div>
                    <div>
                        <img src={image} alt={title} />
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default SpoonSearchResult;