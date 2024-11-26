import React from "react";
import SpoonSearchResult from "./SpoonSearchResult.jsx";

const RecipeSearchResults = ({ recipes }) => {

    // console.log(recipes);

    return (
        <div className="recipe-search-results">
            {recipes.map((recipe, index) => {
                return (
                    <SpoonSearchResult
                        key={index}
                        recipe={recipe}
                    />
                );
            })}
        </div>
    )

}

export default RecipeSearchResults;