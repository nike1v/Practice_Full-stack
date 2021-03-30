import { handleActions } from 'redux-actions';

import * as actions from './actions.js';

const initialState = {
  booksList: [],
  pageNum: 1,
  booksCount: 0,
  cart: [],
  favorite: [],
};

const idToggler = (toggleId, state) => {
  const findId = state.find((id) => id === toggleId);
  if(findId){
    return state.filter((id) => id !== toggleId);
  }
  return [...state, toggleId];
}

const booksStore = handleActions(
  {
    [actions.setBooksList]: (state, action) => ({
      ...state,
      booksList: [...state.booksList, ...action.payload],
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
    })
  },
  initialState
)

export default booksStore;