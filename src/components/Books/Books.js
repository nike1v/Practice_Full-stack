import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookItem from '../BookItem/BookItem';
import { getBooksList } from './actions.js';
import Carousel from '../Carousel/Carousel';
import { PAGE_LIMIT } from '../../constants/serverUrl';
import { booksPropTypes } from '../../propTypes/booksPropTypes';

import './books.css';

const Books = ({ getBooksList, booksList, booksCount }) => {

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
          (booksList.length !== booksCount && booksList.length >= PAGE_LIMIT) && <button onClick={getNextPage}>Load more</button>
        }
      </div>
    </main>
  )
}

Books.propTypes = {
  getBooksList: PropTypes.func.isRequired,
  booksList: PropTypes.arrayOf(booksPropTypes).isRequired,
  booksCount: PropTypes.number.isRequired,
}

const mapStateToProps = ({ booksStore }) => ({ booksList: booksStore.booksList, booksCount: booksStore.booksCount })

export default connect(
  mapStateToProps,
  { getBooksList }
)(Books);