import PropTypes from 'prop-types';

export const booksPropTypes = PropTypes.shape({ 
  id: PropTypes.number,
  name: PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  currencyMark: PropTypes.string
 });