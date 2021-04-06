import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import {
  isBookInCartSelector,
  isBookInFavoriteSelector,
} from "../Books/selectors";
import { toggleCart, toggleFavorite, setSelectedBook } from "../Books/actions";
import booksPropTypes from "../../propTypes/booksPropTypes";

import "./bookItem.css";

const BookItem = ({
  book,
  isBookInCart,
  isBookInFavorite,
  toggleCart,
  toggleFavorite,
  setSelectedBook,
}) => {
  const { id, bookName, currencyMark, price, image, shortDescription } = book;
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleClickBook = () => {
    setSelectedBook(book);
    const getWay = `${url}/${id}`;
    history.push(getWay);
  };

  const handleCart = () => {
    toggleCart(id);
  };

  const handleFavorite = () => {
    toggleFavorite(id);
  };

  const favClassName = classNames("favBook", { inFavorite: isBookInFavorite });

  const cartClassName = classNames("buyBook", { inCart: isBookInCart });

  return (
    <div
      className="bookEl"
      role="button"
      onClick={handleClickBook}
      tabIndex={-10}>
      <div className="bookTitle">{bookName}</div>
      <div>
        <img className="bookImg" src={image} alt={image} />
      </div>
      <div className="bookDescription">{shortDescription}</div>
      <div
        className="bookActivities"
        role="button"
        onClick={(event) => event.stopPropagation()}
        tabIndex={-15}>
        <button type="button" className={favClassName} onClick={handleFavorite}>
          <FontAwesomeIcon icon={faStar} size="2x" />
        </button>
        <button type="button" className="shareBook">
          <FontAwesomeIcon icon={faShareAltSquare} size="2x" />
        </button>
        <div className="bookValue">
          {currencyMark}
          {price}
        </div>
        <button type="button" className={cartClassName} onClick={handleCart}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: booksPropTypes.isRequired,
  toggleCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isBookInFavorite: PropTypes.bool,
  isBookInCart: PropTypes.bool,
  setSelectedBook: PropTypes.func.isRequired,
};

BookItem.defaultProps = {
  isBookInCart: false,
  isBookInFavorite: false,
};

const mapStateToProps = (state, props) => ({
  isBookInCart: isBookInCartSelector(state, props),
  isBookInFavorite: isBookInFavoriteSelector(state, props),
});

export default connect(mapStateToProps, {
  toggleCart,
  toggleFavorite,
  setSelectedBook,
})(BookItem);
