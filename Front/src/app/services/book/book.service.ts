import { Injectable } from '@angular/core';
import { allBooks } from './book-simulation-data';
import { selectedBooks } from './book-simulation-data';
import { TAG } from 'src/app/utils/enums/book.enum';
import { Book } from 'src/app/models/book/book-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = environment.API_URL;
  private booksFound: Book[] = [];
  private booksFoundUpdated = new BehaviorSubject<Book[]>([]);
  searchTitle = '';

  constructor(private http: HttpClient) {}

  getBookSearchListener() {
    return this.booksFoundUpdated.asObservable();
  }

  getSearchResults(title: string) {
    this.http
      .get<Book[]>(
        `${this.apiUrl}/books?_expand=author&_expand=publisher&title_like=${title}`
      )
      .subscribe((result: Book[]) => {
        this.booksFound = result;
        this.booksFoundUpdated.next([...this.booksFound]);
        console.log('libros encontrados', this.booksFound);
      });
    console.log(
      `${this.apiUrl}/books?_expand=author&_expand=publisher&title_like=${title}`
    );
  }

  clearSearchResults() {
    this.booksFound = [];
    this.booksFoundUpdated.next([...this.booksFound]);
  }

  getAllBooks() {
    return this.http.get<Book[]>(
      `${this.apiUrl}/books?_expand=author&_expand=publisher`
    );
  }

  getBooksByGenre(genre: string): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${this.apiUrl}/books?_expand=author&_expand=publisher&genre_like=${genre}`
    );
  }

  getBookByIsbn(isbn: string) {
    return this.http.get<Book[]>(
      `${this.apiUrl}/books?_expand=author&_expand=publisher&isbn=${isbn}`
    );
  }

  getBooksByTag(tag: string) {
    return this.http.get<Book[]>(
      `${this.apiUrl}/books?_expand=author&_expand=publisher&tags_like=${tag}`
    );
  }

  getBooksByPublisher(publisherId: string) {
    return this.http.get<Book[]>(
      `${this.apiUrl}/publisher/${publisherId}/books?_expand=author&_expand=publisher`
    );
  }

  getBooksByauthor(authorId: number) {
    return this.http.get<Book[]>(
      `${this.apiUrl}/author/${authorId}/books?_expand=author&_expand=publisher`
    );
  }
}
