import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

import { isBookInCartSelector, isBookInFavoriteSelector } from '../Books/selectors';
import { toggleCart, toggleFavorite } from '../Books/actions';
import { booksPropTypes } from '../../propTypes/booksPropTypes';

import './bookItem.css';

const BookItem = ({ book, isBookInCart, isBookInFavorite }) => {

  const { id, name, authorName, currency, price } = book;
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const history = useHistory();

  const handleClickBook = () => {
    const getWay = `${url}/${id}`;
    history.push(getWay);
   }

  const handleCart = () => {
    dispatch(toggleCart(id));
  }
  const handleFavorite = () => {
    dispatch(toggleFavorite(id));
  }

  return (
    <div className="bookEl" onClick={handleClickBook}>
      <div className='bookTitle'>{name}</div>
      <div>
        <img className="bookImg"></img>
      </div>
      <div className="bookDescription">{name} {authorName}</div>
      <div className="bookActivities" onClick={(event) => event.stopPropagation()}>
        <button className={`favBook ${isBookInFavorite ? "inFavorite" : ""}`} onClick={handleFavorite}>
          <FontAwesomeIcon icon={faStar} size="2x" />
        </button>
        <button className="shareBook">
          <FontAwesomeIcon icon={faShareAltSquare} size="2x" />
        </button>
        <div className="bookValue">{currency} {price}</div>
        <button className={`buyBook ${isBookInCart ? "inCart" : ""}`} onClick={handleCart}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: booksPropTypes,
  isBookInCart: PropTypes.bool,
  isBookInFavorite: PropTypes.bool,
}

BookItem.defaultProps = {
  isBookInCart: false,
  isBookInFavorite: false,
}

const mapStateToProps = (state, props) => ({ isBookInCart: isBookInCartSelector(state, props), isBookInFavorite: isBookInFavoriteSelector(state, props) })

export default connect(
  mapStateToProps,
  { toggleCart, toggleFavorite }
)(BookItem);