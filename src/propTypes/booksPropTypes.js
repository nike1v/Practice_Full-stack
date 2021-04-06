import PropTypes from "prop-types";

const booksPropTypes = PropTypes.shape({
  id: PropTypes.string,
  bookName: PropTypes.string,
  authorName: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  currencyMark: PropTypes.string,
  image: PropTypes.string,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.string,
});

export default booksPropTypes;
