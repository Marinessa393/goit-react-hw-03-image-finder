import PropTypes from 'prop-types';

export default function Button({ fetchImages }) {
  return (
    <button type="button" onClick={fetchImages} className="Button">
      Load more...
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
};
