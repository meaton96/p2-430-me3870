import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecipeSearchBox = ({ source, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [tempSource, setTempSource] = useState(source || 'spoon');

    const handleSearchClick = () => {
       
        onSearch(tempSource, searchTerm);
    };

    return (
        <div className="is-flex py-5 pl-1 post-wrapper is-justify-content-center">
            <div className="mx-1">
                <input
                    className="input"
                    type="text"
                    placeholder="Search for a recipe"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="control mx-1">
                <div className="select recipe-src-select">
                    <select value={tempSource} onChange={(e) => setTempSource(e.target.value)}>
                        <option value="spoon">Spoonacular</option>
                        <option value="edamam">Edamam</option>
                    </select>
                </div>
            </div>
            <div className="mx-1">
                <button className="button is-primary recipe-search-btn" onClick={handleSearchClick}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default RecipeSearchBox;
