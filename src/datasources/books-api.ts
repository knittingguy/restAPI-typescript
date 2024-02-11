import { RESTDataSource } from '@apollo/datasource-rest';

export class BooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:63301/index.cfm/';
  }

  async getBooks(id: number) {
    return this.get(`books/${id}`);
  }

  async getAllBooks(){
    return this.get(`books`);
  }

 async createBook(title: string, isbn: string, yearPublished: number){
    return this.post(`books`, { body: { title, isbn, yearPublished }});
 }
}