import PropTypes from 'prop-types';

export const booksPropTypes = PropTypes.shape({ 
  id: PropTypes.string,
  name: PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  currencyMark: PropTypes.string
 });