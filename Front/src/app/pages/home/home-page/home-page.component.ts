import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  bookService: BookService;
  recomendedBooks: Book[] = [];
  newAtBooks: Book[] = [];
  topSellingBooks: Book[] = [];

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit() {
    this.recomendedBooks = this.bookService.getRecomendedBooks();
    this.newAtBooks = this.bookService.getNewAtBooks();
    this.topSellingBooks = this.bookService.getTopSellerBooks();
  }

}
