import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book/book-model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book!: Book;
  isbn!: string;
  bookFound = false;
  recomendedBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.isbn = paramMap.get('isbn') as string;
      this.book = this.bookService.getBookByIsbn(this.isbn);

      if (this.book.isbn) {
        this.bookService.getRecommendedBooksByCategory(this.book.genre[0])
          .subscribe((result: Book[]) => {
            result = result.sort(() => Math.random() - 0.5).slice(0, 5);
            this.recomendedBooks = result;
          });

        this.bookFound = true;
      }
    });
  }

  onAddBook() {
    this.cartService.addBook(this.book);
  }
}
