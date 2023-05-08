import { Component, OnInit} from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { BookService } from 'src/app/services/book/book.service';


@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.css']
})
export class CataloguePageComponent implements OnInit {
  bookService: BookService;
  Books: Book[] = [];

  constructor(bookService: BookService) {
    this.bookService = bookService;
}
ngOnInit() {
  this.Books = this.bookService.getAllBooks();
}
}

