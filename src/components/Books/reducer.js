import { handleActions } from 'redux-actions';
import * as actions from './actions.js';

const initialState = {
  booksList: [],
};

const booksStore = handleActions(
  {
    [actions.setBooksList]: (state, action) => ({
      ...state,
      booksList: [...action.payload]
    })
  },
  initialState
)

export default booksStore;