import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book, CreateBookDto } from 'src/app/models/book/book-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookDashboardService {

  private apiUrl = environment.API_URL;
  private booksFound: Book[] = [];
  private booksFoundUpdated = new BehaviorSubject<Book[]>([]);
  private searchTitleUpdated = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient
  ) { }

  getAllBooks() {
    const url = `${this.apiUrl}/books/`;
    return this.http.get<Book[]>(url);
  }

  getBookByIsbn(isbn: string) {
    const url = `${this.apiUrl}/books/${isbn}`;
    return this.http.get<Book>(url);
  }

  saveBook(book: CreateBookDto) {
    const url = `${this.apiUrl}/books/`;
    console.log('book', book);

    return this.http.post<Book>(url, book);
  }

  oderBooksByAuthorNameAsc(books: Book[]) {
    books.sort((a, b) => {
      const nameA = a.author.name.toLowerCase();
      const nameB = b.author.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return books;
  }
}
