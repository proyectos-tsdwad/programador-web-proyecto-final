import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book/book-model'

@Component({
  selector: 'app-selected-book-detail',
  templateUrl: './selected-book-detail.component.html',
  styleUrls: ['./selected-book-detail.component.css']
})
export class SelectedBookDetailComponent {

  @Input() book!: Book;

}
