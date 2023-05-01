import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book/book-model'

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input() book!: Book;

}
