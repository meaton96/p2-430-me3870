import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import helper from '../utils/helper.js';
import SingleRecipe from '../modules/single-recipe/SingleRecipe.jsx';
import { ClipLoader } from "react-spinners";

const SingleRecipeContainer = () => {

    const { source, id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const cachedData= JSON.parse(helper.getFromLocalStorage('lastViewedRecipe'));
                //console.log(id, cachedData);
                if (cachedData && cachedData.id === id) {

                    setRecipe(cachedData.data);
                    setLoading(false);
                   // console.log('loaded from cache');
                    return;
                }
                const res = await helper.sendGet(`/api/recipes/${source}/${id}`);
                if (res) {
                    setRecipe(res);
                    helper.addToLocalStorage('lastViewedRecipe', JSON.stringify({ id, data: res}));
                    setLoading(false);
                   // console.log('loaded from api');
                }
                else {
                    setError("Recipe not found");
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
            console.log(recipe);
            return (
                <SingleRecipe
                    recipe={recipe}
                />
            );
        }
    }

    return (
        renderPage()
    );

};

export default SingleRecipeContainer;