import React, { useEffect, useState } from "react";
import RecipeSearchBox from "../modules/recipe-search/RecipeSearchBox.jsx";
import RecipeSearchWrapper from "../modules/recipe-search/RecipeSearchWrapper.jsx";
import { ClipLoader } from "react-spinners";
import { getCssVariable } from "../utils/helper.js";
import { useParams, useNavigate } from "react-router-dom";
import helper from "../utils/helper.js";

const RecipeSearch = () => {
    const [recipes, setRecipes] = useState([]);
    const { recipeSource, q } = useParams();
    const [source, setSource] = useState(recipeSource);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (recipeSource) setSource(recipeSource);
    }, [recipeSource]);

    useEffect(() => {
        const fetchRecipes = async () => {
            if (q && source) {
                setError(null);
                setLoading(true);
                let cachedData = helper.getFromLocalStorage(`recipe-search-${source}-${q}`);

                if (cachedData) {
                    setRecipes(cachedData);
                    setLoading(false);
                    return;
                }

                try {
                    const res = await fetch(`/api/recipes/${source}/basic-search?q=${q}`);
                    const data = await res.json();

                    if (source === "spoon" && data?.results) {
                        setRecipes(data.results);
                        helper.addToLocalStorage(`recipe-search-${source}-${q}`, data.results);
                    } else if (source === "edamam" && data?.hits) {
                        setRecipes(data.hits);
                        helper.addToLocalStorage(`recipe-search-${source}-${q}`, data.hits);
                    } else {
                        setError("Error getting recipes. Please try again later.");
                    }
                } catch (err) {
                    console.error("Error getting recipes:", err);
                    setError("Error getting recipes. Please try again later.");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchRecipes();
    }, [q, source]);

    const handleSearch = (newSource, searchTerm) => {
        setSource(newSource);
        navigate(`/recipes/search/${newSource}/${searchTerm}`);
    };

    const renderResults = () => {
        if (error) {
            return (
                <div className="error-container">
                    <p>{error}</p>
                    <button
                        className="button return-to-home-btn"
                        onClick={() => (window.location.href = "/")}
                    >
                        Go back to feed
                    </button>
                </div>
            );
        } else if (loading) {
            return (
                <div className="spinner-container">
                    <ClipLoader color={getCssVariable("--primary-color")} size={50} />
                </div>
            );
        } else if (recipes?.length > 0) {
            return <RecipeSearchWrapper recipes={recipes} source={source} />;
        } else {
            return <div><p>Start a search!</p></div>;
        }
    };

    return (
        <div>
            <RecipeSearchBox source={source} onSearch={handleSearch} />
            {renderResults()}
        </div>
    );
};

export default RecipeSearch;
