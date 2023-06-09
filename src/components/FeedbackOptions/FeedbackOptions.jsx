import React from "react";
import PropTypes from 'prop-types';
import { ButtonList, Button } from '../FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ButtonList>
        {options.map(option => (
            <Button
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </Button>
        ))}
    </ButtonList>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};