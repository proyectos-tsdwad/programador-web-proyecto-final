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
  id: string = '';
  bookFound = false;
  recomendedBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id') as string;

      this.getBook();
    });
  }

  onAddBook() {
    this.cartService.addBook(this.book);
  }

  getBook() {
    this.bookService.getBookById(Number(this.id))
      .subscribe((result: Book) => {
        this.book = result;

        if (this.book) {
          this.bookFound = true;
          this.getRecomendations();
        }

      });
  }

  getRecomendations() {
    this.bookService.getBooksByGenre(this.book.genres[0])
      .subscribe((result: Book[]) => {

        result = result.sort(() => Math.random() - 0.5).slice(0, 5);
        this.recomendedBooks = result;
      });
  }
}
