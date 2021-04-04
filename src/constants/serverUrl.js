export const PAGE_LIMIT = 24
/* export const booksUrl = (pageNum) =>
  `http://localhost:8001/books?_page=${pageNum}&_limit=${PAGE_LIMIT}`
export const bookUrl = (bookId) => `http://localhost:8001/books/${bookId}`
export const searchUrl = (bookName) =>
  `http://localhost:8001/books?bookName_like=${bookName}` */
export const countBooksUrl = `http://localhost:8001/booksCount`

export const queryBuilderBooks = (pageNum, bookId, bookName) => {
  if (bookId) {
    return `http://localhost:8001/books/${bookId}`
  }
  if (bookName) {
    return `http://localhost:8001/books?bookName_like=${bookName}&_page=${pageNum}&_limit=${PAGE_LIMIT}`
  }
  return `http://localhost:8001/books?_page=${pageNum}&_limit=${PAGE_LIMIT}`
}
