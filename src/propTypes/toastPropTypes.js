import PropTypes from 'prop-types';

const toastPropType = PropTypes.shape({
  id: PropTypes.string,
  errorText: PropTypes.string,
  type: PropTypes.string,
});

export default toastPropType;
