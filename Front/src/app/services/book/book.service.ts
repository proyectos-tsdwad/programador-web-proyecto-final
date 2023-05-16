import { Injectable } from '@angular/core';
import { allBooks } from './book-simulation-data';
import { selectedBooks } from './book-simulation-data';
import { TAG } from 'src/app/utils/enums/book.enum';
import { Book } from 'src/app/models/book/book-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books = allBooks;
  private seletedBooks = selectedBooks;
  private apiUrl = `${environment.API_URL}/books`;

  constructor(private http: HttpClient) { }

  getRecommendedBooksByCategory(category: string): Promise<Book[]> {
    return this.http
      .get<Book[]>(this.apiUrl)
      .toPromise()
      .then((books) =>
        this.filterRecommendedBooksByCategory(books as Book[], category)
      )
      .then((recommendedBooks) => this.getRandomBooks(recommendedBooks));
  }
  private filterRecommendedBooksByCategory(
    books: Book[],
    category: string
  ): Book[] {
    return books.filter(
      (book) =>
        book.tags.includes('recomendados') && book.genre.includes(category)
    );
  }
  private getRandomBooks(books: Book[]): Book[] {
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
    return shuffledBooks.slice(0, 3);
  }

  //
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

  getRecomendedBookByCategory(genre: string) {
    const recomendedBook = this.books.filter((book) =>
      book.genre.includes(genre)
    );
    const randomBooks = recomendedBook
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return [...randomBooks];
  }

  getBookByIsbn(isbn: string) {
    const book = this.books.find(book => book.isbn === isbn);

    return { ...book as Book }
  }
}
