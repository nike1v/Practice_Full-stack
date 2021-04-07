import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = {
  booksList: [],
  pageNum: 1,
  booksCount: 0,
  cart: [],
  favorite: [],
  selectedBook: null,
  searchValue: '',
};

const idToggler = (toggleId, state) => {
  const findId = state.find((id) => id === toggleId);
  if (findId) {
    return state.filter((id) => id !== toggleId);
  }
  return [...state, toggleId];
};

const booksStore = handleActions(
  {
    [actions.setBooksList]: (state, action) => ({
      ...state,
      booksList: state.searchValue
        ? [...action.payload]
        : [...state.booksList, ...action.payload],
    }),
    [actions.setPageNum]: (state, action) => ({
      ...state,
      pageNum: action.payload,
    }),
    [actions.toggleCart]: (state, action) => ({
      ...state,
      cart: idToggler(action.payload, state.cart),
    }),
    [actions.toggleFavorite]: (state, action) => ({
      ...state,
      favorite: idToggler(action.payload, state.favorite),
    }),
    [actions.setGoodsCount]: (state, action) => ({
      ...state,
      booksCount: action.payload,
    }),
    [actions.setSelectedBook]: (state, action) => ({
      ...state,
      selectedBook: action.payload,
    }),
    [actions.setSearchValue]: (state, action) => ({
      ...state,
      searchValue: action.payload,
    }),
    [actions.setCart]: (state, action) => ({
      ...state,
      cart: action.payload,
    }),
  },
  initialState
);

export default booksStore;
