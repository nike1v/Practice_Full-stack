import { handleActions } from 'redux-actions';

import * as actions from './actions.js';

const initialState = {
  booksList: [],
  pageNum: 1,
  cart: [],
  favorite: [],
  cartSize: 0,
};

const idToggler = (toggleId, state) => {
  const findId = state.find((id) => id === toggleId);
  console.log(findId);
  if(findId){
    return state.filter((id) => id !== toggleId);
  }
  console.log(state);
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
      cartSize: state.cart.length,
    }),
    [actions.toggleFavorite]: (state, action) => ({
      ...state,
      favorite: idToggler(action.payload, state.favorite),
    }),
  },
  initialState
)

export default booksStore;