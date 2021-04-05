import React, { useEffect, useCallback } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import _ from "lodash"

import BookItem from "../BookItem/BookItem"
import { getBooksList, setSearchValue, setPageNum } from "./actions"
import Carousel from "../Carousel/Carousel"
import { PAGE_LIMIT } from "../../constants/serverUrl"
import booksPropTypes from "../../propTypes/booksPropTypes"

import "./books.css"

const Books = ({
  getBooksList,
  booksList,
  booksCount,
  setSearchValue,
  setPageNum,
}) => {
  useEffect(() => {
    if (!booksList.length) {
      getBooksList()
    }
  }, [])

  const getNextPage = () => {
    getBooksList()
  }

  const searchByName = () => {
    setPageNum(1)
    getBooksList()
  }

  const throttling = useCallback(_.throttle(searchByName, 2000), [])

  /* const throttle = (func, limit) => {
    let inThrottle = false
    let savedArgs
    let savedThis

    const warper = (...args) => {
      if (inThrottle) {
        savedArgs = args
        savedThis = this
        return
      }

      func.apply(this, args)

      inThrottle = true

      setTimeout(() => {
        inThrottle = false

        if (savedArgs) {
          warper.apply(savedThis, savedArgs)
          savedThis = null
          savedArgs = savedThis
        }
      }, limit)
    }
    return warper
  } */

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value)
    throttling()
  }

  return (
    <main className="books">
      <Carousel />
      <section className="searchBox">
        <input
          type="text"
          placeholder="Search for books by Name"
          className="searchField"
          onChange={handleSearch}
        />
      </section>
      <section className="booksList">
        {booksList.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </section>
      <div className="moreBooksButton">
        {booksList.length !== booksCount && booksList.length >= PAGE_LIMIT && (
          <button type="button" onClick={getNextPage}>
            Load more
          </button>
        )}
      </div>
    </main>
  )
}

Books.propTypes = {
  getBooksList: PropTypes.func.isRequired,
  booksList: PropTypes.arrayOf(booksPropTypes).isRequired,
  booksCount: PropTypes.number.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  setPageNum: PropTypes.func.isRequired,
}

const mapStateToProps = ({ booksStore }) => ({
  booksList: booksStore.booksList,
  booksCount: booksStore.booksCount,
  searchValue: booksStore.searchValue,
})

export default connect(mapStateToProps, {
  getBooksList,
  setSearchValue,
  setPageNum,
})(Books)
