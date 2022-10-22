import React from "react";
import { nanoid } from 'nanoid'

// export const FeedbackOptions = ({handleGoodIncrement, handleNeutralIncrement, handleBadIncrement}) => {
//     return (
//         <div>
//             <button type="button" onClick={handleGoodIncrement}>Good</button>
//             <button type="button" onClick={handleNeutralIncrement}>Neutral</button>
//             <button type="button" onClick={handleBadIncrement}>Bad</button>
//         </div>
//     )
// }


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(
                    ({option}) => (
                        <button key={nanoid()} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                    )
                )
            }
        </div>
    )
}