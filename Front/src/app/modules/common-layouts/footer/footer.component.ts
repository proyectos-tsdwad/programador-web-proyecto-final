import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private navigationService: NavigationService) { }

  onClickNavigateToHome() {
    this.navigationService.navigateToHome();
  }

  onClickGoToCartDetail() {
    this.navigationService.navigateToCartDetail();
  }
}
