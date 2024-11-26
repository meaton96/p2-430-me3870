import React from "react";


const Instructions = ({ instructions, analyzedInstructions }) => {

    return (
        <div className="">
            <h2 className="subtitle" style={{ color: 'var(--secondary-color)' }}>Instructions</h2>
            <div className="content">
                {instructions ? (
                    <div dangerouslySetInnerHTML={{ __html: instructions }} />
                ) : (
                    analyzedInstructions.map((instruction, index) => (
                        <div key={index}>
                            {instruction.steps.map((step) => (
                                <p key={step.number}>{step.step}</p>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    )

};

export default Instructions;