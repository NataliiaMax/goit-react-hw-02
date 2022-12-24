import PropTypes from 'prop-types';
import style from './SectionTitle.module.css';

const SectionTitle = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
