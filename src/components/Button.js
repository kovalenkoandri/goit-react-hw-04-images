import PropTypes from 'prop-types';

export const Button = ({ httpRequest }) => {
  return (
    <button type="button" onClick={httpRequest}>
      load more
    </button>
  );
};
Button.propTypes = {
  httpRequest: PropTypes.func.isRequired,
};