import PropTypes from 'prop-types';

function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback: {isNaN(positivePercentage) ? 0 : positivePercentage}%
      </p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
