import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';
import { GENRE } from 'src/app/utils/enums/book.enum';


@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class BookCataloguePageComponent implements OnInit {

  bookService: BookService;
  books: Book[] = [];
  genre = GENRE;
  selectedGenre: string = '';

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }
  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.selectedGenre = '';
    this.bookService.getAllBooks()
      .subscribe((result: Book[]) => {
        this.books = result;
      });
  }

  onBookGenre(genre: string) {
    this.selectedGenre = genre;
    this.bookService.getBooksByGenre(genre)
      .subscribe((result: Book[]) => {
        this.books = result;
      });
  }

  isActive(navGenre: string) {
    return this.selectedGenre === navGenre;
  }
}

