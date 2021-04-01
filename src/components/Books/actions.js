import { createAction } from 'redux-actions';

import { booksUrl, bookUrl, countBooksUrl } from '../../constants/serverUrl';
import { toggleLoader } from '../Spinner/actions.js';
import { getData } from '../../api/HTTPSRequests';

export const setBooksList = createAction('SET_BOOKS_LIST');
export const setPageNum = createAction('SET_PAGE_NUM');
export const toggleCart = createAction('TOGGLE_CART');
export const toggleFavorite = createAction('TOGGLE_FAVORITE');
export const setGoodsCount = createAction('SET_GOODS_COUNT');
export const setSelectedBook = createAction('SET_SELECTED_BOOK');

export const getBooksList = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const currentPageNumber = state.booksStore.pageNum;
    const goodsNumber = state.booksStore.booksCount;
    
    try {
      dispatch(toggleLoader(true));
      const booksList = await getData(booksUrl(currentPageNumber));

      if (!goodsNumber) {
        const fullBooksList = await getData(countBooksUrl)
        const bookCount = fullBooksList.count;
        dispatch(setGoodsCount(bookCount));
      }

      dispatch(setBooksList(booksList));
      dispatch(setPageNum(currentPageNumber + 1));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoader(false));
    }
  }
}

export const getBookById = (bookId) => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader(true));
      const bookById = await getData(bookUrl(bookId));
      dispatch(setSelectedBook(bookById));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoader(false));
    }
  }
}