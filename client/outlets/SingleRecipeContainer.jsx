import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import helper from '../utils/helper.js';
import SingleRecipe from '../modules/single-recipe/SingleRecipe.jsx';
import { ClipLoader } from "react-spinners";
import { UserContext } from "../utils/UserContext.js";

const SingleRecipeContainer = () => {

    const { source, id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { currentRecipe } = useContext(UserContext);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {

                if (currentRecipe && currentRecipe.source === 'edamam') {
                    if (currentRecipe.recipe.id == id) {
                        setRecipe(currentRecipe);
                        setLoading(false);
                        return;
                    }
                }


                const cachedData = JSON.parse(helper.getFromLocalStorage('lastViewedRecipe'));
                console.log(id, cachedData);

                if (cachedData && cachedData.id === id) {

                    setRecipe(cachedData.data);
                    setLoading(false);
                    console.log('loaded from cache');
                    return;
                }
                const res = await helper.sendGet(`/api/recipes/${source}/${id}`);
                console.log(res);
                if (res) {


                    setRecipe(res);
                    helper.addToLocalStorage('lastViewedRecipe', JSON.stringify({ id, data:res }));
                    setLoading(false);
                    console.log('loaded from api', res);


                }
                else {
                    setError("Recipe not found");
                    setLoading(false);
                }

            }
            catch (err) {
                console.error("Error getting recipe:", err);
            }

        }

        fetchRecipe();
    }, [id]);

    const renderPage = () => {
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
                    <ClipLoader color={helper.getCssVariable('--primary-color')} size={50} />
                </div>
            );
        }
        else {
            //console.log(recipe);
            return (
                (source === 'spoon') ?
                    <SingleRecipe
                        recipe={recipe}
                    />
                    :
                    <div>
                        <h1>Recipe Error</h1>
                    </div>
            );
        }
    }

    return (
        renderPage()
    );

};

export default SingleRecipeContainer;