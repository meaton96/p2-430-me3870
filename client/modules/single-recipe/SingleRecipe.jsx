import React from "react";
import RecipeHeader from "./RecipeHeader.jsx";
import RecipeDescription from "./RecipeDescription.jsx";
import Ingredients from "./Ingredients.jsx";
import Instructions from "./Instructions.jsx";
import QuickInfo from "./QuickInfo.jsx";

const SingleRecipe = ({ recipe }) => {
    const {
        image,
        summary,
        creditsText,
        readyInMinutes,
        servings,
        sourceUrl,
        title,
        analyzedInstructions,
        extendedIngredients,
        instructions,
        healthScore,
        diets = [],
        dishTypes = []
    } = recipe;

    return (
        <div className="recipe-container" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="is-flex">
                <RecipeHeader
                    title={title}
                    image={image}
                    diets={diets}
                    dishTypes={dishTypes}
                    sourceUrl={sourceUrl}
                    creditsText={creditsText}
                />

            </div>
            <QuickInfo
                readyInMinutes={readyInMinutes}
                servings={servings}
                healthScore={healthScore}

            />
            <RecipeDescription summary={summary} />

            <div className="is-flex mx-1">
                <Ingredients
                    ingredients={extendedIngredients}
                />
                <Instructions
                    instructions={instructions}
                    analyzedInstructions={analyzedInstructions}
                />
            </div>

            


        </div>
    );
};

export default SingleRecipe;
