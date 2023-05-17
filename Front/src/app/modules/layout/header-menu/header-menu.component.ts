import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {

  constructor(private navigationService: NavigationService) { }

  onClickNavigateToHome() {
    this.navigationService.navigateToHome();
  }

}
