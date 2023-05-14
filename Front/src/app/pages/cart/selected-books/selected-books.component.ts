import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { SelectedBookDto } from 'src/app/models/book/book-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-selected-books',
  templateUrl: './selected-books.component.html',
  styleUrls: ['./selected-books.component.css']
})
export class SelectedBooksComponent implements OnInit, OnDestroy {

  books!: SelectedBookDto[];
  cartSub!: Subscription;

  constructor(private cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.cartSub = this.cartService.getcarttUpdatedListener().
      subscribe((books: SelectedBookDto[]) => {
        this.books = books;
      });
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

}
