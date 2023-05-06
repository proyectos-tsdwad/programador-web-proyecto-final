import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book!: Book;
  isbn!: string;
  route: ActivatedRoute;
  bookService: BookService;
  bookFound = false;
  recomendedBooks: Book[] = [];

  constructor(route: ActivatedRoute, bookService: BookService) {
    this.route = route;
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.isbn = paramMap.get('isbn') as string;

      this.book = this.bookService.getBookByIsbn(this.isbn);

      if (this.book.isbn) {
        this.bookFound = true;
      }
    });
    this.recomendedBooks = this.bookService.getRecomendedBooks();
  }
}
