import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section className={style.buttonFeedback}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={style.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
