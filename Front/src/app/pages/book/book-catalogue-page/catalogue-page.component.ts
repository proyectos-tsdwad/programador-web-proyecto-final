import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';


@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class BookCataloguePageComponent implements OnInit {
  bookService: BookService;
  books: Book[] = [];

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }
  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks()
      .subscribe((result: Book[]) => {
        this.books = result;
      });
  }
}

