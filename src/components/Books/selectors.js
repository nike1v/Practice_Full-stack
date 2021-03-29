
import { createSelector } from 'reselect';

const getBooksInCart = (state) => state.booksStore.cart;

const getBooksInFavorite = state => state.booksStore.favorite;

const getBookId = (state, {book}) => book.id;

export const isBookInCartSelector = createSelector(
  [getBooksInCart, getBookId],
  (cart, bookId) => cart.includes(bookId)
)

export const isBookInFavoriteSelector = createSelector(
  [getBooksInFavorite, getBookId],
  (favorite, bookId) => favorite.includes(bookId)
)