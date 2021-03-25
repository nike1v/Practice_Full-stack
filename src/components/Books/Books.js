import React, { useEffect } from 'react';
import './books.css';
import BookItem from '../BookItem/BookItem';
import { getBooksList } from './actions.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from '../Carousel/Carousel';

const Books = ({ getBooksList, booksList }) => {

  useEffect(() => {
    getBooksList();
  }, []);

  return(
    <main className="books">
      <Carousel />
      <section className="booksList">
        {booksList.map((el) => {
          return (
            <BookItem key={el.id} el={el} />
          )
        })}
      </section>
    </main>
  )
}

Books.propTypes = {
  getBooksList: PropTypes.func,
  booksList: PropTypes.array,
}

const mapStateToProps = ({ booksStore }) => ({ booksList: booksStore.booksList })

export default connect(
  mapStateToProps,
  { getBooksList }
)(Books);