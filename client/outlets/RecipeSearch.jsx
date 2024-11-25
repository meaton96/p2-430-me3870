import React, { useState } from "react";
import RecipeSearchBox from "../modules/recipe-search/RecipeSearchBox.jsx";
import RecipeSearchResults from "../modules/recipe-search/RecipeSearchResults.jsx";
import { ClipLoader } from "react-spinners";
import { getCssVariable } from "../utils/helper.js";


const RecipeSearch = () => {


    const [recipes, setRecipes] = useState([]);
    const [source, setSource] = useState("spoon");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const renderResults = () => {

        if (error) {
            return (
                <div className='error-container'>
                    <p>{error}</p>
                    <button className='button return-to-home-btn' onClick={() => window.location.href = '/'}>Go back to feed</button>
                </div>
            );

        }
        else if (loading) {
            return (
                <div className="spinner-container">
                    <ClipLoader color={getCssVariable('--primary-color')} size={50} />
                </div>
            );

        }
        else {
            return (
                <RecipeSearchResults
                    recipes={recipes}
                />
            );
        }
    }


    return (
        <div>
            <RecipeSearchBox
                setRecipes={setRecipes}
                source={source}
                setSource={setSource}
                setLoading={setLoading}
                setError={setError}
            />
            {renderResults()}
        </div>
    );
};

export default RecipeSearch;