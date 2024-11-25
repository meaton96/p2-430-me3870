import React from "react";

const RecipeSearchResults = ({ recipes }) => {

   // console.log(recipes);

    return (
        <div className="recipe-search-results">
            {recipes.map((recipe, index) => {
                return (
                    <div key={index} className="recipe-search-result">
                        <h2>{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.title} />
                    </div>
                );
            })}
        </div>
    )

}

export default RecipeSearchResults;