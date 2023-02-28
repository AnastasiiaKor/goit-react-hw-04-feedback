import PropTypes from 'prop-types';
import { Button } from './FeedbackItem.styled';
export const FeedbackItem = ({ option, handleClick }) => (
  <Button type="button" option={option} onClick={handleClick} name={option}>
    {option.toUpperCase()}
  </Button>
);
FeedbackItem.propTypes = {
  option: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
