import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import BookItem from "../BookItem/BookItem";
import { getBooksList, setSearchValue, setPageNum } from "./actions";
import Carousel from "../Carousel/Carousel";
import { PAGE_LIMIT } from "../../constants/serverUrl";
import booksPropTypes from "../../propTypes/booksPropTypes";

import "./books.css";

const Books = ({
  getBooksList,
  booksList,
  booksCount,
  setSearchValue,
  setPageNum,
}) => {
  const [toggleFavorite, setToggleFavorite] = useState(false);

  useEffect(() => {
    if (!booksList.length) {
      getBooksList();
    }
  }, []);

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

  const renderAllBooks = () => {
    booksList.map((book) => <BookItem key={book.id} book={book} />);
  };

  const renderFavoriteBooks = () => {
    booksList.filter((book) => <BookItem key={book.id} book={book} />);
  };

  return (
    <main className="books">
      <Carousel />
      <section className="searchBox">
        <button
          type="button"
          className="favoriteToggleButton"
          onClick={setToggleFavorite(!toggleFavorite)}
        />
        <input
          type="text"
          placeholder="Search for books by Name"
          className="searchField"
          onChange={handleSearch}
        />
      </section>
      <section className="booksList">
        {toggleFavorite ? renderAllBooks() : renderFavoriteBooks()}
      </section>
      <div className="moreBooksButton">
        {booksList.length !== booksCount && booksList.length >= PAGE_LIMIT && (
          <button type="button" onClick={getNextPage}>
            Load more
          </button>
        )}
      </div>
    </main>
  );
};

Books.propTypes = {
  getBooksList: PropTypes.func.isRequired,
  booksList: PropTypes.arrayOf(booksPropTypes).isRequired,
  booksCount: PropTypes.number.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setPageNum: PropTypes.func.isRequired,
};

const mapStateToProps = ({ booksStore }) => ({
  booksList: booksStore.booksList,
  booksCount: booksStore.booksCount,
  searchValue: booksStore.searchValue,
});

export default connect(mapStateToProps, {
  getBooksList,
  setSearchValue,
  setPageNum,
})(Books);
