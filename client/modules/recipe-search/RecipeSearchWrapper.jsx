import React from "react";
import RecipeSearchResults from "./RecipeSearchResults.jsx";


const RecipeSearchWrapper = ({ source, recipes }) => {

    let id, title, image;
    let mutatedRecipes = [];

    if (source === "spoon") {
        recipes.forEach(recipe => {
            id = recipe.id;
            title = recipe.title;
            image = recipe.image;
            mutatedRecipes.push({ id, title, image });
        })
    }
    else if (source === 'edamam' ) {
        recipes.forEach(hit=> {
            if (hit.recipe) {
                hit = hit.recipe;
            }
            image = hit.image;
            id = hit.uri;
            title = hit.label;
            mutatedRecipes.push({ id, title, image });
        })
    }



    return (
        <div>
            <RecipeSearchResults
                recipes={mutatedRecipes}
            />
        </div>
    );


};

export default RecipeSearchWrapper;