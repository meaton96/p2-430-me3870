import React from "react";
import SpoonSearchResult from "./SpoonSearchResult.jsx";

const RecipeSearchResults = ({ source, recipes }) => {

    
    const loadResultsFromSource = () => {
        if (source === "spoon") {
            return recipes.map((recipe, index) => {
                return (
                    <SpoonSearchResult
                        key={index}
                        recipe={recipe}
                        source={source}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                    />
                );
            })
        }
        else if (source === "edamam") {
            try {
                return recipes.map((recipe, index) => {
                    if (recipe.recipe)
                        recipe = recipe.recipe;
                    return (
                        <SpoonSearchResult
                            key={index}
                            recipe={recipe}
                            source={source}
                            id={recipe.uri.split('#')[1]}
                            title={recipe.label}
                            image={recipe.image}
                        />
                    );
                })
            }
            catch (err) {
                console.error("Error", err);
            }
            
        }
    }

    return (
        <div className="recipe-search-results">
            {loadResultsFromSource()}
        </div>
    )

}

export default RecipeSearchResults;