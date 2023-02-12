import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedbacks = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutralFeedbacks = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBadFeedbacks = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage() {
    const percentage = (this.countTotalFeedback() / 100) * this.state.good;
    return percentage.toFixed(2);
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.handleGoodFeedbacks}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNeutralFeedbacks}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleBadFeedbacks}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statictics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
