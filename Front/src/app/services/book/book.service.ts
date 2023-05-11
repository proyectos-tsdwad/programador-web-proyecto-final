import { Injectable } from '@angular/core';
import { allBooks } from './book-simulation-data';
import { TAG } from 'src/app/utils/enums/book.enum';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = allBooks;

  constructor() {}

  getAllBooks() {
    return [...this.books];
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

  getRecomendedBooksByCategory(category: string) {
    const recomendedBooks = this.books.filter((book) =>
      book.genre.includes(category)
    );
    const randomBooks = recomendedBooks
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    return [...randomBooks];
  }
}
