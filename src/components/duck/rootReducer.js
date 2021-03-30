import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import booksStore from '../Books/reducer.js';
import loaderStore from '../Spinner/reducer.js';

const persistConfig = {
  key: 'bookList',
  storage,
  whitelist: ['cart', 'favorite'],
}

export default combineReducers({
  booksStore: persistReducer(persistConfig, booksStore),
  loaderStore,
})