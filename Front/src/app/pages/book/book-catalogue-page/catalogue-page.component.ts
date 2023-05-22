import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';
import { GENRE } from 'src/app/utils/enums/book.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css'],
})
export class BookCataloguePageComponent implements OnInit, OnDestroy {
  searchSub!: Subscription;
  bookService: BookService;
  books: Book[] = [];
  genre = GENRE;
  selectedGenre: string = '';

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit() {
    // this.bookService.getSearchResults();
    this.getSearchBooks();
    // if (!this.books.length) {
    //   this.getAllBooks();
    // }
  }

  ngOnDestroy() {
    this.bookService.clearSearchResults();
    this.searchSub.unsubscribe();
  }
  getSearchBooks() {
    this.selectedGenre = 'libros encontrados';
    this.searchSub = this.bookService
      .getBookSearchListener()
      .subscribe((result: Book[]) => {
        this.books = result;
        if (!this.books.length) {
          this.getAllBooks();
        }
      });
  }

  getAllBooks() {
    this.selectedGenre = '';
    this.bookService.getAllBooks().subscribe((result: Book[]) => {
      this.books = result;
    });
  }

  onBookGenre(genre: string) {
    this.selectedGenre = genre;
    this.bookService.getBooksByGenre(genre).subscribe((result: Book[]) => {
      this.books = result;
    });
  }

  isActive(navGenre: string) {
    return this.selectedGenre === navGenre;
  }
}
