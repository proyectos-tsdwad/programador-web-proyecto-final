import { Injectable } from '@angular/core';
import { allBooks } from './book-simulation-data';
import { selectedBooks } from './book-simulation-data';
import { TAG } from 'src/app/utils/enums/book.enum';
import { Book } from 'src/app/models/book/book-model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = allBooks;
  private seletedBooks = selectedBooks;

  constructor() { }

  getAllBooks() {
    return [...this.books];
  }

  getSelectedBooks() {
    return [...this.seletedBooks];
  }

  getRecomendedBooks() {
    const recomendedBooks = this.books.filter((book) =>
      book.tags.includes(TAG.RECOMENDADOS)
    );

    return [...recomendedBooks];
  }

  getNewAtBooks() {
    const newAtBooks = this.books.filter((book) =>
      book.tags.includes(TAG.NOVEDADES)
    );

    return [...newAtBooks];
  }

  getTopSellerBooks() {
    const topSellerBooks = this.books.filter((book) =>
      book.tags.includes(TAG.TOP_VENDIDOS)
    );

    return [...topSellerBooks];
  }

  getRecomendedBooksByCategory(genre: string) {
    const recomendedBooks = this.books.filter((book) =>
      book.genre.includes(genre)
    );
    const randomBooks = recomendedBooks
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return [...randomBooks];
  }

  getBookByIsbn(isbn: string) {

    const book = this.books.find(book =>
      book.isbn === isbn
    );

    return { ...book as Book }


  }
}
