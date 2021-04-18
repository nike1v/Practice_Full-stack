import { createAction } from 'redux-actions';

import { v4 } from 'uuid';
import {
  queryBuilderBooks,
  getBooksCount,
  getBook,
  getCategories,
} from '../../constants/serverUrl';
import { toggleLoader } from '../Spinner/actions';
import { getData } from '../../api/HTTPSRequests';

export const setBooksList = createAction('SET_BOOKS_LIST');
export const setPageNum = createAction('SET_PAGE_NUM');
export const toggleCart = createAction('TOGGLE_CART');
export const toggleFavorite = createAction('TOGGLE_FAVORITE');
export const setGoodsCount = createAction('SET_GOODS_COUNT');
export const setSelectedBook = createAction('SET_SELECTED_BOOK');
export const setSearchValue = createAction('SET_SEARCH_VALUE');
export const setCart = createAction('SET_CART');
export const setCategories = createAction('SET_CATEGORIES');
export const setCategoryToFilter = createAction('SET_CATEGORY_TO_FILTER');
export const setEmptyFilter = createAction('SET_EMPTY_FILTER');
export const toggleToastInState = createAction('TOGGLE_ERROR_IN_STATE');

export const getBooksList = () => async (dispatch, getState) => {
  const state = getState();
  const {
    pageNum: currentPageNumber,
    booksCount: goodsNumber,
    categories,
    searchValue,
    filterCategory,
  } = state.booksStore;

  try {
    dispatch(toggleLoader(true));
    const booksList = await getData(
      queryBuilderBooks(currentPageNumber, searchValue, filterCategory)
    );

    if (!categories.length) {
      const booksCategoriesList = await getData(getCategories);
      dispatch(setCategories(booksCategoriesList));
    }

    if (!goodsNumber) {
      const fullBooksList = await getData(getBooksCount);
      const bookCount = fullBooksList.count;
      dispatch(setGoodsCount(bookCount));
    }

    dispatch(setBooksList(booksList));
    dispatch(setPageNum(currentPageNumber + 1));
  } catch {
    const errorItem = {
      id: v4(),
      toastText: "Can't get books",
      type: 'error',
    };
    dispatch(toggleToastInState(errorItem));
  } finally {
    dispatch(toggleLoader(false));
  }
};

export const getBookById = (bookId) => async (dispatch) => {
  try {
    dispatch(toggleLoader(true));
    const bookById = await getData(getBook(bookId));
    dispatch(setSelectedBook(bookById));
  } catch {
    const errorItem = {
      id: v4(),
      toastText: "Can't get book",
      type: 'error',
    };
    dispatch(toggleToastInState(errorItem));
  } finally {
    dispatch(toggleLoader(false));
  }
};
