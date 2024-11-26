import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
const SpoonSearchResult = ({ source, recipe, id, title, image }) => {

    
    const { setCurrentRecipe } = useContext(UserContext);

    return (

        <div key={id} className="recipe-search-result post-wrapper">
            <Link to={`/recipes/${source}/${id}`} onClick={() => setCurrentRecipe({source, recipe})}>
                <div className="is-flex is-flex-direction-column is-align-items-center ">
                    <div>
                        <h2 className="is-font-weight-bold is-size-4">{title}</h2>
                    </div>
                    <div className="recipe-img-container">
                        <img src={image} alt={title} />
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default SpoonSearchResult;