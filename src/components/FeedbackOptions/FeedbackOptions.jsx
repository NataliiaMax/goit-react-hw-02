import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section className={style.buttonFeedback}>
      {options.map(option => {
        <button
          type="button"
          key={options}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>;
      })}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(option.PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
