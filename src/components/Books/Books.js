import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookItem from '../BookItem/BookItem';
import { getBooksList } from './actions.js';
import Carousel from '../Carousel/Carousel';
import { PAGE_LIMIT } from '../../constants/serverUrl';
import { booksPropTypes } from '../../propTypes/booksPropTypes';

import './books.css';

const Books = ({ getBooksList, booksList }) => {

  useEffect(() => {
    if(!booksList.length) {
      getBooksList();
    }
  }, []);

  const getNextPage = () => {
    getBooksList();
  }

  return(
    <main className="books">
      <Carousel />
      <section className="booksList">
        {booksList.map((book) => {
          return (
            <BookItem key={book.id} book={book} />
          )
        })}
      </section>
      <div className="moreBooksButton">
        {
          (booksList.length !== 60 && booksList.length >= PAGE_LIMIT) && <button onClick={getNextPage}>Load more</button>
        }
      </div>
    </main>
  )
}

Books.propTypes = {
  getBooksList: PropTypes.func,
  booksList: PropTypes.arrayOf(booksPropTypes),
}

const mapStateToProps = ({ booksStore }) => ({ booksList: booksStore.booksList})

export default connect(
  mapStateToProps,
  { getBooksList }
)(Books);