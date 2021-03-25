import { createAction } from 'redux-actions';

import { booksUrl } from '../../constants/serverUrl';
import { toggleLoader } from '../Spinner/actions.js';
import { getData } from '../../api/HTTPSRequests';

export const setBooksList = createAction('SET_BOOKS_LIST');
export const setPageNum = createAction('SET_PAGE_NUM');

export const getBooksList = ( pageNum ) => {
  return (dispatch) => {
    dispatch(toggleLoader(true));
    return getData(booksUrl(pageNum))
      .then((booksList) => {
        dispatch(setBooksList(booksList));
        dispatch(toggleLoader(false));
      })
  }
}