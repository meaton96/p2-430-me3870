import React, { useState } from "react";


const RecipeSearchBox = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = async () => {
        console.log(searchTerm);

        const res = await fetch(`/recipes/spoon/basic-search?q=${searchTerm}`);
        const data = await res.json();
        console.log(data);
    }

    return (
        <div className="is-flex pt-5 pl-1">
            <input
                className="input"
                type="text"
                placeholder="Search for a recipe"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="button is-primary" onClick={() => handleSearch()}>Search</button>
        </div>
    );
};

export default RecipeSearchBox;