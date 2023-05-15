import { Injectable } from "@angular/core";
import { Book, SelectedBookDto } from "src/app/models/book/book-model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: SelectedBookDto[] = [];
  private cartUpdated = new BehaviorSubject<SelectedBookDto[]>([]);

  addBook(book: Book | SelectedBookDto) {
    let selectedBook: SelectedBookDto = {
      id: book.id,
      author: book.author,
      img: book.img,
      isbn: book.isbn,
      price: book.price,
      title: book.title,
      selectedAmount: 0
    }

    selectedBook = this.cart.find(item => item.id === book.id) || selectedBook;

    if (selectedBook.selectedAmount > 0) {
      selectedBook.selectedAmount += 1;
    } else {
      selectedBook.selectedAmount += 1;
      this.cart.push(selectedBook);
    }

    this.cartUpdated.next([...this.cart]);
  }

  removeBook(bookId: number) {
    let selectedBook = this.cart.find(item => item.id === bookId);

    if (!selectedBook) {
      return;
    }

    selectedBook.selectedAmount -= 1;

    if (!selectedBook.selectedAmount) {
      this.cart = this.cart.filter(item => item.id !== bookId);
    }

    this.cartUpdated.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.cartUpdated.next([...this.cart]);
  }

  getcartUpdatedListener() {
    return this.cartUpdated.asObservable();
  }


}
