import PropTypes from 'prop-types';
import { FeedbackItem } from './FeedbackItem';
import { ButtonList } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map(option => (
      <li key={option}>
        <FeedbackItem option={option} handleClick={onLeaveFeedback} />
      </li>
    ))}
  </ButtonList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
