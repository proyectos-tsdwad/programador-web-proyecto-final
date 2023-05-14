import { Component, OnInit } from '@angular/core';
import { SelectedBookDto } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-selected-books',
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.css']
})
export class SelectedBooksComponent implements OnInit {

  books!: SelectedBookDto[];
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.books = this.bookService.getSelectedBooks();
  }

}
