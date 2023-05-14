import { Injectable } from "@angular/core";
import { Book, SelectedBookDto } from "src/app/models/book/book-model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: SelectedBookDto[] = [];
  private cartUpdated = new Subject<SelectedBookDto[]>();

  addBook(book: Book) {

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

    console.log('dd', this.cart);

    this.cartUpdated.next([...this.cart]);
  }

  updateCart() {
    this.cartUpdated.next([...this.cart]);
  }

  getcartUpdatedListener() {
    return this.cartUpdated.asObservable();
  }


}
