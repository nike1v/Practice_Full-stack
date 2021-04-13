export const PAGE_LIMIT = 24;
export const BASE_ULR = 'http://localhost:8001/';

const booksCount = 'booksCount';
const checkout = 'checkout';
const booksCategories = 'booksCategories';
const booksListUrl = 'books';
const searchQueryParam = 'bookName_like=';
const pageQueryParam = '_page=';
const limitQueryParam = '&_limit=';
const categoryFilterParam = 'category=';

export const getBook = (bookId) => `${BASE_ULR}${booksListUrl}/${bookId}`;
export const getBooksCount = `${BASE_ULR}${booksCount}`;
export const setCheckoutUrl = `${BASE_ULR}${checkout}`;
export const getCategories = `${BASE_ULR}${booksCategories}`;

export const queryBuilderBooks = (pageNum, bookSearchValue, categoryFilter) => {
  let booksList = `${BASE_ULR}${booksListUrl}?${pageQueryParam}${pageNum}${limitQueryParam}${PAGE_LIMIT}`;

  if (categoryFilter.length) {
    const filtrationByCategory = categoryFilter.reduce(
      (result, category) => `&${categoryFilterParam}${category}${result}`,
      ''
    );
    booksList = `${booksList}${filtrationByCategory}`;
  }

  if (bookSearchValue) {
    booksList = `${booksList}&${searchQueryParam}${bookSearchValue}`;
  }

  return booksList;
};
