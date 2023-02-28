import Statistics from '../Statictics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Wrapper } from './App.styled';
import { useState, useEffect } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleFeedback = ({ target }) => {
    const name = target.name;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
    setPercentage(((good / total) * 100).toFixed());
  }, [good, bad, neutral, total]);

  return (
    <Wrapper>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statictics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </Wrapper>
  );
};
