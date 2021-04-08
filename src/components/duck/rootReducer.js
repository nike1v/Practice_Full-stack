import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import booksStore from '../Books/reducer';
import loaderStore from '../Spinner/reducer';
import cartStore from '../Cart/reducer';

const persistConfigBook = {
  key: 'bookList',
  storage,
  whitelist: ['cart', 'favorite'],
};

const persistConfigCart = {
  key: 'cartList',
  storage,
  whitelist: ['cartItemList'],
};

export default combineReducers({
  booksStore: persistReducer(persistConfigBook, booksStore),
  loaderStore,
  cartStore: persistReducer(persistConfigCart, cartStore),
});
