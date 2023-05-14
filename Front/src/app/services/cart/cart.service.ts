import { Injectable } from "@angular/core";
import { Book, SelectedBookDto } from "src/app/models/book/book-model";
import { Subject } from "rxjs";


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

    selectedBook = this.cart.find(item => book.id === item.id) || selectedBook;
    selectedBook.selectedAmount += 1;
    this.cart.push(selectedBook);
    this.cartUpdated.next([...this.cart]);
  }

  getcarttUpdatedListener() {
    return this.cartUpdated.asObservable();
  }


}
