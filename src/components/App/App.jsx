import { Component } from 'react';
import Statistics from '../Statictics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Wrapper } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const event = e;
    const name = event.target.innerHTML.toLowerCase();
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = (this.state.good / total) * 100;
    return percentage.toFixed();
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Wrapper>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statictics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </Wrapper>
    );
  }
}
