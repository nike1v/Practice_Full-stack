import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './bookItem.css';

const BookItem = ({ book }) => {

  const { id, name, authorName, currency, price } = book;
  const { url } = useRouteMatch();

  const history = useHistory();

  const handleClickBook = () => {
    const getWay = `${url}/${id}`;
    history.push(getWay);
   }

  return (
    <div className="bookEl" onClick={handleClickBook}>
      <div className='bookTitle'>{name}</div>
      <img className="bookImg"></img>
      <div className="bookDescription">{name} {authorName}</div>
      <div className="bookValue">{currency} {price}<button className="buyBook">Buy book</button></div>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.object,
}

export default BookItem;