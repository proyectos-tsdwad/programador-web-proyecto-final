import { Injectable } from '@angular/core';
import { Book, SelectedBookDto } from 'src/app/models/book/book-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private totalItems: number = 0;
  private totalCost: number = 0;
  private cart: SelectedBookDto[] = [];
  private cartUpdated = new BehaviorSubject<SelectedBookDto[]>([]);
  private totalItemsUpdated = new BehaviorSubject<number>(0);
  private totalCostUpdated = new BehaviorSubject<number>(0);

  addBook(book: Book | SelectedBookDto) {
    let selectedBook: SelectedBookDto = {
      id: book.id,
      author: book.author,
      img: book.img,
      isbn: book.isbn,
      price: book.price,
      title: book.title,
      selectedAmount: 0,
    };

    selectedBook =
      this.cart.find((item) => item.id === book.id) || selectedBook;

    if (selectedBook.selectedAmount > 0) {
      selectedBook.selectedAmount += 1;
    } else {
      selectedBook.selectedAmount += 1;
      this.cart.push(selectedBook);
    }

    this.updatetTotalQuantity();
    this.cartUpdated.next([...this.cart]);
  }

  removeCopy(bookId: number) {
    let selectedBook = this.cart.find((item) => item.id === bookId);

    if (!selectedBook) {
      return;
    }

    selectedBook.selectedAmount -= 1;

    if (!selectedBook.selectedAmount) {
      this.cart = this.cart.filter((item) => item.id !== bookId);
    }
    this.updatetTotalQuantity();
    this.cartUpdated.next([...this.cart]);
  }

  removeBook(bookId: number) {
    let selectedBook = this.cart.find((item) => item.id === bookId);

    if (!selectedBook) {
      return;
    }

    this.cart = this.cart.filter((item) => item.id !== bookId);

    this.updatetTotalQuantity();
    this.cartUpdated.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.updatetTotalQuantity();
    this.cartUpdated.next([...this.cart]);
  }

  updatetTotalQuantity() {
    this.totalItems = this.cart.reduce((partialSum, book) => {
      return partialSum + book.selectedAmount;
    }, 0);

    this.totalItemsUpdated.next(this.totalItems);
  }

  updatedTotalCost() {
    this.totalCost = this.cart.reduce((partialSum, book) => {
      return partialSum + book.selectedAmount;
    }, 0);

    this.totalCostUpdated.next(this.totalCost);
  }

  getcartUpdatedListener() {
    return this.cartUpdated.asObservable();
  }

  getTotalItemsListener() {
    return this.totalItemsUpdated.asObservable();
  }

  getTotalCostListener() {
    return this.totalCostUpdated.asObservable();
  }
}
