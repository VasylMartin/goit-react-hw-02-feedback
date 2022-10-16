import React from "react";

class BtnsArea extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodIncrement = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }
    

    handleNeutralIncrement = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    handleBadIncrement = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }


    render(){
        
        let countTotalFeedback = this.state.good + this.state.neutral + this.state.bad
        let countPositiveFeedbackPercentage = Math.round(
            (this.state.good / countTotalFeedback) * 100
            )

        return (
            <><h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleGoodIncrement}>Good</button>
            <button type="button" onClick={this.handleNeutralIncrement}>Neutral</button>
            <button type="button" onClick={this.handleBadIncrement}>Bad</button>

            <h2>Statistics</h2>
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Total:{countTotalFeedback}</p>
            <p>Total:{countPositiveFeedbackPercentage}%</p>
            </>
            )
    }
}

export default BtnsArea;