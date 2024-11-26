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
        <div className="recipe-container">
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

            <div className="ing-inst-cols">
                <div className="half-width">
                    <Ingredients
                        ingredients={extendedIngredients}
                    />
                </div>
                <div className="is-hidden-tablet">
                    <hr className="settings-hr" />
                </div>
                <div className="half-width">
                    <Instructions
                        instructions={instructions}
                        analyzedInstructions={analyzedInstructions}
                    />
                </div>
            </div>




        </div>
    );
};

export default SingleRecipe;
