import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { toggleCart, toggleFavorite } from '../Books/actions';

import './bookItem.css';

const BookItem = ({ book }) => {

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
        <button className="favBook" onClick={handleFavorite}>Add to fav</button>
        <button className="shareBook">Share</button>
        <div className="bookValue">{currency} {price}</div>
        <button className="buyBook" onClick={handleCart}>Add to cart</button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.object,
}

export default connect(
  null,
  { toggleCart, toggleFavorite }
)(BookItem);