import React from "react";

export const FeedbackOptions = ({handleGoodIncrement, handleNeutralIncrement, handleBadIncrement}) => {
    return (
        <div>
            <button type="button" onClick={handleGoodIncrement}>Good</button>
            <button type="button" onClick={handleNeutralIncrement}>Neutral</button>
            <button type="button" onClick={handleBadIncrement}>Bad</button>
        </div>
    )
}