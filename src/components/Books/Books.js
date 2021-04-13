import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import BookItem from '../BookItem/BookItem';
import {
  getBooksList,
  setSearchValue,
  setPageNum,
  setCategoryToFilter,
  setEmptyFilter,
} from './actions';
import Carousel from '../Carousel/Carousel';
import { PAGE_LIMIT } from '../../constants/serverUrl';
import booksPropTypes from '../../propTypes/booksPropTypes';

import './books.css';

const Books = ({
  getBooksList,
  booksList,
  booksCount,
  setSearchValue,
  setPageNum,
  favoriteBooks,
  categories,
  setCategoryToFilter,
  filterCategory,
  setEmptyFilter,
}) => {
  const [isToggleFavorite, setIsToggleFavorite] = useState(false);
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!booksList.length) {
      getBooksList();
    }
    setIsFetching(false);
  }, []);

  /* useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(getBooksList(), options);
  }); */

  const getNextPage = () => {
    getBooksList();
  };

  const searchByName = () => {
    setPageNum(1);
    getBooksList();
  };

  const throttlingSearch = _.throttle(searchByName, 300);

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
    throttlingSearch();
  };

  const handleClearButton = () => {
    setPageNum(1);
    setEmptyFilter([]);
    getBooksList();
  };

  const handleInfiniteScroll = () => {
    setIsInfiniteScroll(!isInfiniteScroll);
  };

  const toggleFavoriteRender = () => {
    setIsToggleFavorite(!isToggleFavorite);
  };

  const toggleCategoryChange = ({ target }) => {
    const filterCategory = target.id;
    setPageNum(1);
    setCategoryToFilter(filterCategory);
    getBooksList();
  };

  const renderAllBooks = () =>
    booksList.map((book) => <BookItem key={book.id} book={book} />);

  const renderFavoriteBooks = () =>
    booksList
      .filter((book) => favoriteBooks.includes(book.id))
      .map((book) => <BookItem key={book.id} book={book} />);

  const handleScroll = () => {};

  return (
    <main className="books" onScroll={handleScroll}>
      <Carousel />
      <section className="searchBox">
        <button
          type="button"
          className="favoriteToggleButton"
          onClick={toggleFavoriteRender}>
          {isToggleFavorite ? 'Show all' : 'Show only favorite'}
        </button>
        <input
          type="text"
          placeholder="Search for books by Name"
          className="searchField"
          onChange={handleSearch}
        />
      </section>
      <section className="filterCheckbox">
        Choose category<span>to filter:</span>
        <input
          type="button"
          className="filterButton"
          value="Clear all"
          onClick={handleClearButton}
        />
        {categories.map((category) => (
          <label key={category} className="checkbox">
            <input
              type="checkbox"
              id={category}
              onChange={toggleCategoryChange}
              checked={filterCategory.includes(category)}
            />
            {category}
          </label>
        ))}
      </section>
      <section className="booksList">
        {isToggleFavorite ? renderFavoriteBooks() : renderAllBooks()}
      </section>
      <button
        type="button"
        className="infiniteToggler"
        onClick={handleInfiniteScroll}>
        {isInfiniteScroll ? 'Infinite On' : 'Infinite OFF'}
      </button>
      {isInfiniteScroll ? (
        <div className="moreBooksButton">
          {booksList.length !== booksCount && booksList.length >= PAGE_LIMIT && (
            <button type="button" onClick={getNextPage}>
              Load more
            </button>
          )}
        </div>
      ) : (
        isFetching ?? <div>Fetching more...</div>
      )}
    </main>
  );
};

Books.propTypes = {
  getBooksList: PropTypes.func.isRequired,
  booksList: PropTypes.arrayOf(booksPropTypes).isRequired,
  booksCount: PropTypes.number.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setPageNum: PropTypes.func.isRequired,
  favoriteBooks: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCategoryToFilter: PropTypes.func.isRequired,
  filterCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
  setEmptyFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ booksStore }) => ({
  booksList: booksStore.booksList,
  booksCount: booksStore.booksCount,
  searchValue: booksStore.searchValue,
  favoriteBooks: booksStore.favorite,
  categories: booksStore.categories,
  filterCategory: booksStore.filterCategory,
});

export default connect(mapStateToProps, {
  getBooksList,
  setSearchValue,
  setPageNum,
  setCategoryToFilter,
  setEmptyFilter,
})(Books);
