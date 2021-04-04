/* eslint-disable no-console */
import { createAction } from "redux-actions"

import { queryBuilderBooks, countBooksUrl } from "../../constants/serverUrl"
import { toggleLoader } from "../Spinner/actions"
import { getData } from "../../api/HTTPSRequests"

export const setBooksList = createAction("SET_BOOKS_LIST")
export const setPageNum = createAction("SET_PAGE_NUM")
export const toggleCart = createAction("TOGGLE_CART")
export const toggleFavorite = createAction("TOGGLE_FAVORITE")
export const setGoodsCount = createAction("SET_GOODS_COUNT")
export const setSelectedBook = createAction("SET_SELECTED_BOOK")
export const setSearchValue = createAction("SET_SEARCH_VALUE")

export const getBooksList = () => async (dispatch, getState) => {
  const state = getState()
  const currentPageNumber = state.booksStore.pageNum
  const goodsNumber = state.booksStore.booksCount
  // eslint-disable-next-line prefer-destructuring
  const searchValue = state.booksStore.searchValue

  try {
    dispatch(toggleLoader(true))
    const booksList = await getData(queryBuilderBooks(currentPageNumber))

    if (!goodsNumber) {
      const fullBooksList = await getData(countBooksUrl)
      const bookCount = fullBooksList.count
      dispatch(setGoodsCount(bookCount))
      return
    }

    if (searchValue) {
      const booksList = await getData(
        queryBuilderBooks(currentPageNumber, null, searchValue)
      )
      dispatch(setBooksList(booksList))
      return
    }

    dispatch(setBooksList(booksList))
    dispatch(setPageNum(currentPageNumber + 1))
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(toggleLoader(false))
  }
}

export const getBookById = (bookId) => async (dispatch, getState) => {
  const state = getState()
  const currentPageNumber = state.booksStore.pageNum

  try {
    dispatch(toggleLoader(true))
    const bookById = await getData(queryBuilderBooks(currentPageNumber, bookId))
    dispatch(setSelectedBook(bookById))
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(toggleLoader(false))
  }
}

/* export const searchBooksByName = (bookName) => async (dispatch) => {
  try {
    dispatch(toggleLoader(true))
    const booksByName = await getData(searchUrl(bookName))
    dispatch(searchedBooksList(booksByName))
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(toggleLoader(false))
  }
}
 */
