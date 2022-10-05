import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ httpRequest }) => {
  return (
    <button className={css.Button} type="button" onClick={httpRequest}>
      Load more
    </button>
  );
};
Button.propTypes = {
  httpRequest: PropTypes.func.isRequired,
};
