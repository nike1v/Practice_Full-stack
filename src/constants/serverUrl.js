export const PAGE_LIMIT = 24;
export const BASE_ULR = "http://localhost:8001/books";
export const getBook = (bookId) => `${BASE_ULR}/${bookId}`;
export const getBooksCount = `http://localhost:8001/booksCount`;

export const queryBuilderBooks = (pageNum, bookSearchValue) => {
  if (bookSearchValue) {
    return `${BASE_ULR}?bookName_like=${bookSearchValue}&_page=${pageNum}&_limit=${PAGE_LIMIT}`;
  }

  return `${BASE_ULR}?_page=${pageNum}&_limit=${PAGE_LIMIT}`;
};
