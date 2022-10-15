import React from "react";

class BtnsArea extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodIncrement = () => {
        this.setState(prevState => ({
            good: prevState.value + 1,
        }))
    }
    

    handleNeutralIncrement = () => {
        this.setState(prevState => ({
            neutral: prevState.value + 1,
        }))
    }

    render(){
        return (
            <><h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleGoodIncrement}>Good</button>
            <button type="button" onClick={this.handleNeutralIncrement}>Neutral</button>
            <button type="button">Bad</button>

            <h2>Statistics</h2>
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            </>
            )
    }
}

export default BtnsArea;