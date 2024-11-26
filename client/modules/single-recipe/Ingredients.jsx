import React from "react";

const Ingredients = ({ ingredients }) => {
   // console.log(ingredients);

    const filterIngredients = (ingredients) => {
        const uniqueIngredients = ingredients.filter((ingredient, index, self) =>
            ingredient.id >= 0 && index === self.findIndex((i) => i.id === ingredient.id)
        );
        return uniqueIngredients;
    };

    const filteredIngredients = filterIngredients(ingredients);
   // console.log(filteredIngredients);

    return (
        <div className="">
            <h2 className="subtitle" style={{ color: 'var(--secondary-color)' }}>Ingredients</h2>
            <ul>
                {filteredIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;