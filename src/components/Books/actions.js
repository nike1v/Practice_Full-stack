import { createAction } from 'redux-actions';
import { booksUrl } from '../../constatnts/serverUrl';
import { toggleLoader } from '../actions.js';
import { getData } from '../../api/HTTPSRequests';

export const setBooksList = createAction('SET_BOOKS_LIST');

export const getBooksList = () => {
  return (dispatch) => {
    dispatch(toggleLoader(true));
    return getData(booksUrl)
      .then((booksList) => {
        dispatch(setBooksList(booksList));
        dispatch(toggleLoader(false));
      })
  }
}