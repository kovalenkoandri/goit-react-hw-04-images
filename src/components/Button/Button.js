import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ loadMorePage }) => {
  return (
    <button className={css.Button} type="button" onClick={loadMorePage}>
      Load more
    </button>
  );
};
Button.propTypes = {
  loadMorePage: PropTypes.func.isRequired,
};
