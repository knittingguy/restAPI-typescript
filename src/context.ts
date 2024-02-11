import { BooksAPI } from './datasources/books-api';

export interface bookContext {
    datasource: {
        booksAPI: BooksAPI
    }
}

export const context: bookContext = {
    datasource: {
        booksAPI: new BooksAPI()
    }
}