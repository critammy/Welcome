import React from 'react';

function Display(props) {
    return (
        <div className="Display">
            <p><strong>Score: </strong>
                {props.score}
            </p>
            <h3>Question:
                {props.question}
            </h3>
            <p><strong>Value: </strong>
                {props.value}
            </p>
            <p><strong>Category: </strong>
                {props.category}
            </p>
            <button onClick={props.handleSubmit}>Users Answer: </button>
            <input
                value={props.userGuess}
                onChange={props.handleChange}
            />
        </div>

    )

}

export default Display