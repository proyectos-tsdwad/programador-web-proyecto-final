import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-search-book-not-found',
  templateUrl: './search-book-not-found.component.html',
  styleUrls: ['./search-book-not-found.component.css']
})
export class SearchBookNotFoundComponent {

  constructor(
    private navigationService: NavigationService
  ) { }

  goToCatalogue() {
    this.navigationService.navigateToCatalogue();
  }
}
