export const PAGE_LIMIT = 24;
export const booksUrl = (pageNum) => `http://localhost:8001/books?_page=${pageNum}&_limit=${PAGE_LIMIT}`;
export const countBooksUrl = `http://localhost:8001/booksCount`;