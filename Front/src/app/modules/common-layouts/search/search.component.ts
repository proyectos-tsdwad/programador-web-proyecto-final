import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private navigationService: NavigationService) { }

  onClickSearch() {
    this.navigationService.navigateToCatalogue();
  }
}
