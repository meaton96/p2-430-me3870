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
            image = hit.recipe.image;
            id = hit.recipe.uri;
            title = hit.recipe.label;
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