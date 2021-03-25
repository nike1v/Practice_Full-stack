import { handleActions } from 'redux-actions';

import * as actions from './actions.js';

const initialState = {
  booksList: [],
  pageNum: 1,
};

const booksStore = handleActions(
  {
    [actions.setBooksList]: (state, action) => ({
      ...state,
      booksList: [...state.booksList, ...action.payload],
    }),
    [actions.setPageNum]: (state, action) => ({
      ...state,
      pageNum: action.payload,
    })
  },
  initialState
)

export default booksStore;