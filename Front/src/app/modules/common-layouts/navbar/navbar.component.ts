import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../../login/login-page/login-page.component';
import { RegisterPageComponent } from '../../login/register-page/register-page.component';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private modalService: NgbModal, private navigationService: NavigationService) { }

  onClickLogIn() {
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true });
  }

  onClickRegister() {
    const modalRef = this.modalService.open(RegisterPageComponent, { fullscreen: true });
  }

  onClickNavigateToHome() {
    this.navigationService.navigateToHome();
  }

  onClickNavigateToCatalogue() {
    this.navigationService.navigateToCatalogue();
  }
}
