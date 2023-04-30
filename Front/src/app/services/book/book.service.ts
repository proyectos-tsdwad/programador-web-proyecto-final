import { Injectable } from '@angular/core';
import { allBooks } from './book-simulation-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = [...allBooks];

  constructor() { }

  getAllBooks() {
    return this.books;
  }

  // getRecomendedBooks() {
  //   return this.books.filter(book =>{
  //     book.tags.includes('tag');
  //   });
  // }
}
