import React from "react";

const RecipeHeader = ({ title, image, diets, dishTypes, creditsText, sourceUrl }) => {

    return (



        <div className="is-flex-direction-column">

            <h1 className="title" style={{ color: 'var(--primary-color)' }}>{title}</h1>
            <div className="is-flex">
                <div>
                    <img src={image} alt={title} />
                
                <p className="recipe-credit">
                    Recipe by <a href={sourceUrl} style={{ color: 'var(--accent-color)' }}>{creditsText}</a>
                </p>
                </div>

                <div className="tags is-flex is-flex-direction-column is-align-items-start is-justify-content-center pl-3">
                    {diets.map((diet) => (
                        <span key={diet} className="tag is-success">{diet}</span>
                    ))}
                    {dishTypes.map((type) => (
                        <span key={type} className="tag is-info">{type}</span>
                    ))}
                </div>
            </div>
        </div>
    )

};


export default RecipeHeader;