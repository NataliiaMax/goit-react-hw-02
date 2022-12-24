import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>Good: {good}</li>
      <li className={style.item}>Neutral: {neutral}</li>
      <li className={style.item}>Bad: {bad}</li>
      <li className={style.item}>Total: {total()}</li>
      <li className={style.item}>Positive feedback: {positivePersentage()}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePersentage: PropTypes.func.isRequired,
};

export default Statistics;
