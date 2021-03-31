import { createSelector } from 'reselect';

const getBooksInCart = (state) => state.booksStore.cart;

const getBooksInFavorite = (state) => state.booksStore.favorite;

const getBookId = (state, { book }) => book.id;

const getDetailId = ({ booksStore }) => booksStore.selectedBook?.id;

export const isBookInCartSelector = createSelector(
  [getBooksInCart, getBookId],
  (cart, bookId) => cart.includes(bookId)
)

export const isBookInFavoriteSelector = createSelector(
  [getBooksInFavorite, getBookId],
  (favorite, bookId) => favorite.includes(bookId)
)

export const isBookInCartDetailSelector = createSelector(
  [getBooksInCart, getDetailId],
  (cart, bookId) => cart.includes(bookId)
)

export const isBookInFavoriteDetailSelector = createSelector(
  [getBooksInFavorite, getDetailId],
  (favorite, bookId) => favorite.includes(bookId)
)