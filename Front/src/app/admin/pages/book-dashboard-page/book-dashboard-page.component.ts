import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-dashboard-page',
  templateUrl: './book-dashboard-page.component.html',
  styleUrls: ['./book-dashboard-page.component.css']
})
export class BookDashboardPageComponent implements OnInit {
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

