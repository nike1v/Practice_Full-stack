import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { isBookInCartSelector, isBookInFavoriteSelector } from '../Books/selectors';
import { toggleCart, toggleFavorite } from '../Books/actions';
import { booksPropTypes } from '../../propTypes/booksPropTypes';

import './bookItem.css';

const BookItem = ({ book, isBookInCart, isBookInFavorite, toggleCart, toggleFavorite }) => {

  const { id, name, authorName, currency, price } = book;
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleClickBook = () => {
    const getWay = `${url}/${id}`;
    history.push(getWay);
   }

  const handleCart = () => {
    toggleCart(id);
  }

  const handleFavorite = () => {
    toggleFavorite(id);
  }

  const favClassName = classNames('favBook', { inFavorite: isBookInFavorite });

  const cartClassName = classNames('buyBook', { inCart: isBookInCart });

  return (
    <div className="bookEl" onClick={handleClickBook}>
      <div className='bookTitle'>{name}</div>
      <div>
        <img className="bookImg"></img>
      </div>
      <div className="bookDescription">{name} {authorName}</div>
      <div className="bookActivities" onClick={(event) => event.stopPropagation()}>
        <button className={favClassName} onClick={handleFavorite}>
          <FontAwesomeIcon icon={faStar} size="2x" />
        </button>
        <button className="shareBook">
          <FontAwesomeIcon icon={faShareAltSquare} size="2x" />
        </button>
        <div className="bookValue">{currency} {price}</div>
        <button className={cartClassName} onClick={handleCart}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: booksPropTypes.isRequired,
  toggleCart: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isBookInFavorite: PropTypes.bool,
  isBookInCart: PropTypes.bool,
}

BookItem.defaultProps = {
  isBookInCart: false,
  isBookInFavorite: false,
}

const mapStateToProps = (state, props) => ({ 
  isBookInCart: isBookInCartSelector(state, props),
  isBookInFavorite: isBookInFavoriteSelector(state, props),
})

export default connect(
  mapStateToProps,
  { toggleCart, toggleFavorite }
)(BookItem);