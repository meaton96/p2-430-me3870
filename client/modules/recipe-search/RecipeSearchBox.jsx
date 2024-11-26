import React, { useState } from "react";
import helper from "../../utils/helper";


const RecipeSearchBox = ({ setRecipes, source, setSource, setLoading, setError }) => {

    const [searchTerm, setSearchTerm] = useState("");


    const handleSearch = async () => {
        setError(null);
        setLoading(true);
        let cachedData = helper.getFromLocalStorage(`recipe-search-${source}-${searchTerm}`);

        if (cachedData) {
            setRecipes(cachedData);
            setLoading(false);
            return;
        }

        const res = await fetch(`/api/recipes/${source}/basic-search?q=${searchTerm}`);
        console.log(res);
        const data = await res.json();
        console.log(data);
        if (source === "spoon") {
            if (data && data.results) {
                setRecipes(data.results);
                setLoading(false);
                helper.addToLocalStorage(`recipe-search-${source}-${searchTerm}`, data.results);
            }
            else {
                setError("Error getting recipes. Please try again later.");
                setLoading(false);
            }
        }
        else if (source == 'edamam') {
            if (data && data.hits) {
                setRecipes(data.hits);
                setLoading(false);
                helper.addToLocalStorage(`recipe-search-${source}-${searchTerm}`, data.hits);
            }
            else {
                setError("Error getting recipes. Please try again later.");
                setLoading(false);
            }
        }
        //console.log(data);
    }

    return (
        <div className="is-flex py-5 pl-1 post-wrapper">
            <input
                className="input"
                type="text"
                placeholder="Search for a recipe"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="control">
                <div className="select">
                    <select onChange={(e) => setSource(e.target.value)}>
                        <option value="spoon">Spoonacular</option>
                        <option value="edamam">Edamam</option>
                    </select>
                </div>
            </div>

            <button className="button is-primary" onClick={() => handleSearch()}>Search</button>
        </div>
    );
};

export default RecipeSearchBox;