import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'

import BookItem from '../BookItem/BookItem';
import { getBooksList, setPageNum } from './actions.js';
import Carousel from '../Carousel/Carousel';
import { PAGE_LIMIT } from '../../constants/serverUrl';

import './books.css';

const Books = ({ getBooksList, booksList, pageNum }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    getBooksList(pageNum);
  }, [pageNum]);

  const pageNumSetter = () => {
    const nextPage = pageNum + 1;
    dispatch(setPageNum(nextPage));
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
          (booksList.length !== 60 && booksList.length >= PAGE_LIMIT) && <button onClick={pageNumSetter}>Load more</button>
        }
      </div>
    </main>
  )
}

Books.propTypes = {
  getBooksList: PropTypes.func,
  booksList: PropTypes.array,
  pageNum: PropTypes.number,
}

const mapStateToProps = ({ booksStore }) => ({ booksList: booksStore.booksList, pageNum: booksStore.pageNum })

export default connect(
  mapStateToProps,
  { getBooksList, setPageNum }
)(Books);