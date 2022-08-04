import s from './index.module.css';
import PropTypes from 'prop-types';

function Button({ title, onClick }) {
  return (
    <button type="button" className={s.nav_btn} onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
