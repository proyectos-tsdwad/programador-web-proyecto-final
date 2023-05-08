import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../models/book/book-model'
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book!: Book;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {

  }

  navegar(isbn: string) {
    this.navigationService.navigateToBookDetail(isbn);
  }
}
