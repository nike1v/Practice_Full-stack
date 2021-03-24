import React, { useEffect } from 'react';
import './books.css';
import BookItem from '../BookItem/BookItem';
import { getBooksList } from './actions.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Books = ({ getBooksList, booksList }) => {

  useEffect(() => {
    getBooksList();
  }, []);

  return(
    <main className="books">
      <section className="stickySlider">
        <img></img>
        <button></button>
        <button></button>
        <button></button>
      </section>
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