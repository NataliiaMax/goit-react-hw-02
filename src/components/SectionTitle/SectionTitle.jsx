import PropTypes from 'prop-types';
import style from './SectionTitle.module.css';

const SectionTitle = ({ title, children }) => {
  return (
    <>
      {' '}
      <p className={style.title}>{title}</p>
      {children}
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
