import React from "react";


const RecipeDescription = ({ summary }) => {


    return (
        <div className="content" dangerouslySetInnerHTML={{ __html: summary }} />
    )
}

export default RecipeDescription;