import React from "react";
import RecipeSearchResults from "./RecipeSearchResults.jsx";


const RecipeSearchWrapper = ({ source, recipes }) => {

    let id, title, image;
    let mutatedRecipes = [];

    try {


        if (source === "spoon") {
            recipes.forEach(recipe => {
                id = recipe.id;
                title = recipe.title;
                image = recipe.image;
                mutatedRecipes.push({ id, title, image });
            })
        }
        else if (source === 'edamam') {
            recipes.forEach(hit => {
                if (hit.recipe) {
                    hit = hit.recipe;
                }
               // console.log(hit);
                image = hit.image;
                id = hit.uri.split('#')[1];
                title = hit.label;
                mutatedRecipes.push({ id, title, image });
            })
        }
    } catch (err) {
       // console.error("Error mutating recipes:", err);
    }



    return (
        <div>
            <RecipeSearchResults
                recipes={recipes}
                source={source}
            />
        </div>
    );


};

export default RecipeSearchWrapper;