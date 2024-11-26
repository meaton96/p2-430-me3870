import React from "react";

const Ingredients = ({ ingredients }) => {

    return (
        <div className="">
            <h2 className="subtitle" style={{ color: 'var(--secondary-color)' }}>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;