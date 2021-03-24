import { combineReducers } from 'redux';
import booksStore from '../Books/reducer.js';
import loaderStore from '../reducer.js';

export default combineReducers({
  booksStore,
  loaderStore,
})